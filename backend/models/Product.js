const mongoose = require('mongoose');

const Store = mongoose.model('Store');

const ProductSchema = new mongoose.Schema({
  category: {type: String, lowercase: true, required: [true, "can't be blank"]},
  images: [{type: String, default: null}],
  brand: {type: String, required: [true, "can't be blank"]},
  model: {type: String, required: [true, "can't be blank"]},
  available: {type: Number, required: [true, "can't be blank"]},
  weight: {
    value: {type: Number, default: 0},
    unit: {type: String, default: 'g'}
  },
  dimensions: {
    width: {type: Number, default: 0},
    height: {type: Number, default: 0},
    length: {type: Number, default: 0},
    unit: {type: String, default: 'mm'}
  },
  description: {type: String, required: [true, "can't be blank"]},
  price: {type: Number, required: [true, "can't be blank"]}
}, {timestamps: true});


ProductSchema.methods.addStore = async function(amount) {

  try {

    const store = new Store({
      productId: this._id,
      date: new Date(),
      amount
    });

    await store.save();

    this.available = this.available ?  this.available + amount : amount;
    return true;

  } catch (error) {

    console.log(error);
    return false;

  }

}

mongoose.model('Product', ProductSchema);
