// const { query } = require("../config/db.config.js");

// const createOrderTable = async () => {
//   try {
//     await query(`
//       CREATE TABLE IF NOT EXISTS orders (
//         id SERIAL PRIMARY KEY,
//         user_id INTEGER NOT NULL REFERENCES users(id),
//         shipping_address_id INTEGER NOT NULL REFERENCES user_addresses(id),
//         total_amount NUMERIC(10,2) NOT NULL,
//         status VARCHAR(20) DEFAULT 'Pending',
//         razorpay_order_id VARCHAR(100),
//         razorpay_payment_id VARCHAR(100),
//         razorpay_signature VARCHAR(255),
//         created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
//         updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
//       )
//     `);
//     console.log("Orders table created or already exists");
//   } catch (error) {
//     console.error("Error creating orders table:", error);
//   }
// };

// module.exports = { createOrderTable };