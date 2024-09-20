const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const orderSchema = new mongoose.Schema({
  userId: { type: String, required: true },
  name: { type: String, required: true },
  mobileNumber: { type: String, required: true },
  quantity: { type: Number, required: true },
  paymentMethod: { type: String, required: true },
  totalPrice: { type: Number, required: true },
  deliveryAddress: {
    city: { type: String, required: true },
    area: { type: String, required: true },
    nearbyShop: { type: String, required: true },
  },
}, { timestamps: true });
// module.exports = mongoose.model('order', orderSchema);
// module.exports = order;
const order= mongoose.model('order', orderSchema);

module.exports = order;
