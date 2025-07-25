const pool = require("../config/db.config");

// Get all addresses for the logged-in user
const getAllAddresses = async (req, res) => {
  try {
    const user_id = req.user?.id;

    if (!user_id) {
      console.error("Unauthorized - No user_id found in request");
      return res.status(401).json({ error: "Unauthorized - userId missing" });
    }

    const result = await pool.query(
      "SELECT * FROM user_addresses WHERE user_id = $1 ORDER BY is_default DESC, updated_at DESC",
      [user_id]
    );

    res.json(result.rows);
  } catch (err) {
    console.error("Error fetching addresses:", err.message);
    res.status(500).json({ error: "Failed to fetch addresses" });
  }
};

// Get a specific address by ID (only if it belongs to the user)
const getAddressById = async (req, res) => {
  try {
    const user_id = req.user?.id;
    const address_id = req.params.id;

    if (!user_id) {
      return res.status(401).json({ error: "Unauthorized - userId missing" });
    }

    const result = await pool.query(
      "SELECT * FROM user_addresses WHERE id = $1 AND user_id = $2",
      [address_id, user_id]
    );

    if (result.rows.length === 0) {
      return res.status(404).json({ error: "Address not found or unauthorized" });
    }

    res.json(result.rows[0]);
  } catch (err) {
    console.error("Error fetching address by ID:", err.message);
    res.status(500).json({ error: "Failed to fetch address" });
  }
};

// Create a new address
const createAddress = async (req, res) => {
  try {
    const user_id = req.user?.id;

    if (!user_id) {
      return res.status(401).json({ error: "Unauthorized - userId missing" });
    }

    const {
      name,
      phone,
      address,
      city,
      state,
      pincode,
      type = "Home",
      is_default = false,
    } = req.body;

    // Validate required fields
    if (!name || !phone || !address || !city || !state || !pincode) {
      return res.status(400).json({ error: "Required fields missing" });
    }

    // If this is the user's first address, make it default
    const existingAddresses = await pool.query(
      "SELECT COUNT(*) as count FROM user_addresses WHERE user_id = $1",
      [user_id]
    );
    
    const shouldBeDefault = is_default || existingAddresses.rows[0].count === '0';

    // If user wants this address as default, unset previous default addresses
    if (shouldBeDefault) {
      await pool.query(
        "UPDATE user_addresses SET is_default = FALSE WHERE user_id = $1",
        [user_id]
      );
    }

    // Insert new address
    const result = await pool.query(
      `INSERT INTO user_addresses 
        (user_id, name, phone, address, city, state, pincode, type, is_default) 
       VALUES 
        ($1, $2, $3, $4, $5, $6, $7, $8, $9) 
       RETURNING *`,
      [user_id, name, phone, address, city, state, pincode, type, shouldBeDefault]
    );

    res.status(201).json({
      message: "Address created successfully",
      address: result.rows[0]
    });
  } catch (err) {
    console.error("Error creating address:", err.message);
    res.status(500).json({ error: "Failed to create address" });
  }
};

// Update an existing address (only if it belongs to the user)
const updateAddress = async (req, res) => {
  try {
    const user_id = req.user?.id;
    const address_id = req.params.id;

    if (!user_id) {
      return res.status(401).json({ error: "Unauthorized - userId missing" });
    }

    const {
      name,
      phone,
      address,
      city,
      state,
      pincode,
      type = "Home",
      is_default = false,
    } = req.body;

    // Validate required fields
    if (!name || !phone || !address || !city || !state || !pincode) {
      return res.status(400).json({ error: "Required fields missing" });
    }

    // If is_default is set to true, unset other default addresses for this user
    if (is_default) {
      await pool.query(
        "UPDATE user_addresses SET is_default = FALSE WHERE user_id = $1 AND id != $2",
        [user_id, address_id]
      );
    }

    const result = await pool.query(
      `UPDATE user_addresses SET
        name = $1,
        phone = $2,
        address = $3,
        city = $4,
        state = $5,
        pincode = $6,
        type = $7,
        is_default = $8,
        updated_at = CURRENT_TIMESTAMP
       WHERE id = $9 AND user_id = $10
       RETURNING *`,
      [
        name, phone, address, city, state, pincode, 
        type, is_default, address_id, user_id
      ]
    );

    if (result.rows.length === 0) {
      return res.status(404).json({ error: "Address not found or unauthorized" });
    }

    res.json({
      message: "Address updated successfully",
      address: result.rows[0]
    });
  } catch (err) {
    console.error("Error updating address:", err.message);
    res.status(500).json({ error: "Failed to update address" });
  }
};

// Delete an address (only if it belongs to the user)
const deleteAddress = async (req, res) => {
  try {
    const user_id = req.user?.id;
    const address_id = req.params.id;

    if (!user_id) {
      return res.status(401).json({ error: "Unauthorized - userId missing" });
    }

    // Check if this is the default address
    const addressToDelete = await pool.query(
      "SELECT is_default FROM user_addresses WHERE id = $1 AND user_id = $2",
      [address_id, user_id]
    );

    if (addressToDelete.rows.length === 0) {
      return res.status(404).json({ error: "Address not found or unauthorized" });
    }

    const wasDefault = addressToDelete.rows[0].is_default;

    // Delete the address
    const result = await pool.query(
      "DELETE FROM user_addresses WHERE id = $1 AND user_id = $2 RETURNING *",
      [address_id, user_id]
    );

    // If we deleted the default address, make another address default
    if (wasDefault) {
      await pool.query(
        `UPDATE user_addresses 
         SET is_default = TRUE 
         WHERE user_id = $1 
         AND id = (
           SELECT id FROM user_addresses 
           WHERE user_id = $1 
           ORDER BY updated_at DESC 
           LIMIT 1
         )`,
        [user_id]
      );
    }

    res.json({ 
      message: "Address deleted successfully",
      deletedAddress: result.rows[0]
    });
  } catch (err) {
    console.error("Error deleting address:", err.message);
    res.status(500).json({ error: "Failed to delete address" });
  }
};

module.exports = {
  getAllAddresses,
  getAddressById,
  createAddress,
  updateAddress,
  deleteAddress,
};