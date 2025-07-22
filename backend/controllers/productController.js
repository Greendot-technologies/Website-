
const pool = require('../config/db.config');



exports.addProduct = async (req, res) => {
  try {
    const {
      category_id, sub_category_id, name_en, name_hi, name_mr,
      description, technical_name, brand, manufacturer,
      mrp, selling_price, pack_size, pack_type, unit_per_pack,
      sku, stock_quantity, minimum_order_quantity, recommended_crops,
      primary_image_url, video_url, status, is_prescription_required, is_banned
    } = req.body;

    const { id: userId, role } = req.user;

    if (!['vendor', 'company'].includes(role)) {
      return res.status(403).json({ message: 'Not allowed' });
    }

    // Helper function to safely parse numbers
    const toInt = (val) => {
      const num = parseInt(val);
      return isNaN(num) ? null : num;
    };

    const toFloat = (val) => {
      const num = parseFloat(val);
      return isNaN(num) ? null : num;
    };

    // Image paths (from multer)
    const imagePaths = req.files?.map(file => `/uploads/${file.filename}`) || [];

    const result = await pool.query(
      `INSERT INTO products (
        vendor_id, category_id, sub_category_id,
        name_en, name_hi, name_mr, description, technical_name,
        brand, manufacturer, mrp, selling_price,
        pack_size, pack_type, unit_per_pack, sku,
        stock_quantity, minimum_order_quantity,
        recommended_crops, primary_image_url, images, video_url,
        status, is_prescription_required, is_banned
      ) VALUES (
        $1, $2, $3,
        $4, $5, $6, $7, $8,
        $9, $10, $11, $12,
        $13, $14, $15, $16,
        $17, $18,
        $19, $20, $21, $22,
        $23, $24, $25
      ) RETURNING *`,
      [
        userId,
        toInt(category_id),
        toInt(sub_category_id),
        name_en,
        name_hi || null,
        name_mr || null,
        description || null,
        technical_name || null,
        brand || null,
        manufacturer || null,
        toFloat(mrp),
        toFloat(selling_price),
        pack_size || null,
        pack_type || null,
        toInt(unit_per_pack),
        sku || null,
        toInt(stock_quantity),
        toInt(minimum_order_quantity),
        recommended_crops ? recommended_crops.split(',').map(cropId => toInt(cropId)).filter(Boolean) : [],
        primary_image_url || null,
        JSON.stringify(imagePaths),
        video_url || null,
        status || 'active',
        is_prescription_required === 'true',
        is_banned === 'true'
      ]
    );

    res.status(201).json({
      message: 'Product added successfully',
      product: result.rows[0]
    });

  } catch (err) {
    console.error('Error adding product:', err.message);
    res.status(500).json({ message: 'Server error' });
  }
};





// // DELETE /api/products/:id
exports.deleteProduct = async (req, res) => {
  try {
    const { id: productId } = req.params;
    const { id: userId } = req.user;

    const result = await pool.query(
      `DELETE FROM products WHERE id = $1 AND vendor_id = $2 RETURNING *`,
      [productId, userId]
    );

    if (result.rows.length === 0) {
      return res.status(404).json({ message: 'Product not found or unauthorized' });
    }

    res.json({ message: 'Product deleted successfully' });

  } catch (err) {
    console.error('Delete error:', err.message);
    res.status(500).json({ message: 'Server error' });
  }
};



// // GET /api/products?category_id=&sub_category_id=
exports.getProducts = async (req, res) => {
  try {
    const { category_id, sub_category_id } = req.query;

    // Base query and params array
    let query = `SELECT * FROM products WHERE 1=1`;
    const params = [];
    let idx = 1;

    // Filter by category_id if provided
    if (category_id) {
      query += ` AND category_id = $${idx}`;
      params.push(category_id);
      idx++;
    }

    // Filter by sub_category_id if provided
    if (sub_category_id) {
      query += ` AND sub_category_id = $${idx}`;
      params.push(sub_category_id);
      idx++;
    }

    query += ` ORDER BY created_at DESC`;

    const result = await pool.query(query, params);

    res.json({
      count: result.rows.length,
      products: result.rows
    });
  } catch (err) {
    console.error('Error fetching products:', err.message);
    res.status(500).json({ message: 'Server error' });
  }
};





exports.updateProduct = async (req, res) => {
  try {
    const { id: productId } = req.params;
    const { id: userId, role } = req.user;

    // Allow only vendors or companies to update
    if (!['vendor', 'company'].includes(role)) {
      return res.status(403).json({ message: 'Not allowed' });
    }

    // Ensure product belongs to the current vendor
    const existing = await pool.query(
      `SELECT * FROM products WHERE id = $1 AND vendor_id = $2`,
      [productId, userId]
    );

    if (existing.rows.length === 0) {
      return res.status(404).json({ message: 'Product not found or unauthorized' });
    }

    const fields = req.body;
    const keys = [];
    const values = [];

    const toInt = (val) => {
      const num = parseInt(val);
      return isNaN(num) ? null : num;
    };

    const toFloat = (val) => {
      const num = parseFloat(val);
      return isNaN(num) ? null : num;
    };

    const fieldParsers = {
      category_id: toInt,
      sub_category_id: toInt,
      mrp: toFloat,
      selling_price: toFloat,
      unit_per_pack: toInt,
      stock_quantity: toInt,
      minimum_order_quantity: toInt,
      is_prescription_required: (val) => val === 'true' || val === true,
      is_banned: (val) => val === 'true' || val === true,
      recommended_crops: (val) => val.split(',').map(v => toInt(v)).filter(Boolean),
    };

    for (let [key, value] of Object.entries(fields)) {
      if (fieldParsers[key]) {
        value = fieldParsers[key](value);
      }
      keys.push(key);
      values.push(value);
    }

    // Handle image upload if files exist
    if (req.files && req.files.length > 0) {
      const imagePaths = req.files.map(file => `/uploads/${file.filename}`);
      keys.push('images');
      values.push(JSON.stringify(imagePaths));
    }

    if (keys.length === 0) {
      return res.status(400).json({ message: 'No valid fields to update' });
    }

    // Generate the SET clause dynamically
    const setClause = keys.map((key, i) => `${key} = $${i + 1}`).join(', ');
    const query = `UPDATE products SET ${setClause}, updated_at = NOW() WHERE id = $${keys.length + 1} RETURNING *`;

    const result = await pool.query(query, [...values, productId]);

    res.json({
      message: 'Product updated successfully',
      product: result.rows[0],
    });
  } catch (err) {
    console.error('Update error:', err.message);
    res.status(500).json({ message: 'Server error' });
  }
};


// GET /api/products/summary
exports.getProductSummary = async (req, res) => {
  try {
    const result = await pool.query(`
      SELECT 
        p.id,
        p.name,
        p.brand,
        p.price,
        p.discount_percentage,
        p.discounted_price,
        COALESCE(json_agg(
          json_build_object(
            'id', pi.id,
            'image_url', pi.image_url,
            'is_primary', pi.is_primary
          )
        ) FILTER (WHERE pi.id IS NOT NULL), '[]') AS images
      FROM products p
      LEFT JOIN product_images pi ON p.id = pi.product_id
      WHERE p.is_active = true
      GROUP BY p.id
      ORDER BY p.created_at DESC
    `);

    res.status(200).json({ products: result.rows });
  } catch (error) {
    console.error("Error fetching product summary:", error.message);
    res.status(500).json({ message: "Internal server error" });
  }
};

exports.getProductById = async (req, res) => {
  const { id } = req.params;

  try {
    const result = await pool.query(`
      SELECT 
        p.id,
        p.name,
        p.brand,
        p.description,
        p.price,
        p.discount_percentage,
        p.discounted_price,
        p.category_id,
        p.subcategory_id,
        p.stock_quantity,
        p.created_at,
        COALESCE(json_agg(
          json_build_object(
            'id', pi.id,
            'image_url', pi.image_url,
            'is_primary', pi.is_primary
          )
        ) FILTER (WHERE pi.id IS NOT NULL), '[]') AS images
      FROM products p
      LEFT JOIN product_images pi ON p.id = pi.product_id
      WHERE p.id = $1
      GROUP BY p.id
    `, [id]);

    if (result.rows.length === 0) {
      return res.status(404).json({ message: "Product not found" });
    }

    res.status(200).json({ product: result.rows[0] });
  } catch (error) {
    console.error("❌ Error in getProductById:", error); // ✅ print full error
    res.status(500).json({ message: "Internal server error" });
  }
};



// Add this to your backend controllers (e.g., productController.js)

// GET /api/products/:id/similar
exports.getSimilarProducts = async (req, res) => {
  const { id } = req.params;
  const { limit = 4 } = req.query;
  
  try {
    // First get the current product to find its brand/category
    const currentProduct = await pool.query(`
      SELECT brand, category_id, subcategory_id 
      FROM products 
      WHERE id = $1
    `, [id]);

    if (currentProduct.rows.length === 0) {
      return res.status(404).json({ message: "Product not found" });
    }

    const { brand, category_id, subcategory_id } = currentProduct.rows[0];

    // Find similar products by brand and category (excluding current product)
    const result = await pool.query(`
      SELECT 
        p.id,
        p.name,
        p.brand,
        p.price,
        p.discount_percentage,
        p.discounted_price,
        COALESCE(json_agg(
          json_build_object(
            'id', pi.id,
            'image_url', pi.image_url,
            'is_primary', pi.is_primary
          )
        ) FILTER (WHERE pi.id IS NOT NULL), '[]') AS images
      FROM products p
      LEFT JOIN product_images pi ON p.id = pi.product_id
      WHERE p.id != $1 
        AND (
          p.brand = $2 
          OR p.category_id = $3 
          OR p.subcategory_id = $4
        )
      GROUP BY p.id
      ORDER BY 
        CASE WHEN p.brand = $2 THEN 1 ELSE 2 END,
        CASE WHEN p.category_id = $3 THEN 1 ELSE 2 END,
        p.created_at DESC
      LIMIT $5
    `, [id, brand, category_id, subcategory_id, limit]);

    res.status(200).json({ 
      similar_products: result.rows,
      total: result.rows.length
    });
  } catch (error) {
    console.error("❌ Error in getSimilarProducts:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

// Don't forget to add the route to your routes file:
// router.get('/products/:id/similar', productController.getSimilarProducts);