
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const itemSchema = new Schema({
    name: { type: String, required: true },
    mobileNumber: { type: String, required: true },
    quantity: { type: Number, required: true },
    totalPrice: { type: Number, required: true },
    paymentMethod: { type: String, required: true }, // online-payment or cash-on-delivery
    cardDetails: { type: String, required: function() { return this.paymentMethod === 'online-payment'; } },
    deliveryAddress: {
      city: { type: String, required: true },
      area: { type: String, required: true },
      nearbyShop: { type: String }
    },
    user: { type: Schema.Types.ObjectId, ref: 'User', required: true }, // Reference to the user
    datePlaced: { type: Date, default: Date.now }
  });
  
// module.exports = mongoose.model('Order', orderSchema);

// module.exports = mongoose.model('order', orderSchema);
// module.exports = order;
const Item = mongoose.model('Item', itemSchema);

module.exports = Item;
