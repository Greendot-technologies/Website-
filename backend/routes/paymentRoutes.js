// const express = require("express");
// const { checkout, paymentVerification } = require("../controllers/paymentController.js");

// const router = express.Router();

// router.post("/checkout", checkout);
// router.post("/paymentverification", paymentVerification);

// module.exports = router;

const express = require("express");
const { 
  checkout, 
  paymentVerification, 
  codOrder, 
  getPaymentStatus 
} = require("../controllers/paymentController.js");

const router = express.Router();

// Create Razorpay order
router.post("/checkout", checkout);

// Verify Razorpay payment
router.post("/paymentverification", paymentVerification);

// Place Cash on Delivery order
router.post("/cod-order", codOrder);

// Get payment status
router.get("/status/:payment_id", getPaymentStatus);
// router.get("/test-config", testConfig);
module.exports = router;