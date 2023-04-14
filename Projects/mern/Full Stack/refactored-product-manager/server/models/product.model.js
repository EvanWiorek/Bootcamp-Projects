const mongoose = require("mongoose");

const ProductSchema = new mongoose.Schema(
  {
    title: { 
      type: String,
      required: [true, "{PATH} must not be blank"],
      minlength: [2, "{PATH} needs to be at least 2 characters long"],
    },
    price: { 
      type: Number,
      required: [true, "Price must not be blank."],
      minlength: [1, "Price needs to be at least 1 character long"],
      validate: {
        validator: Number.isInteger,
        message: `{VALUE} is not a number.`
      }
    },
    description: { 
      type: String,
      required: [true, "Description must not be blank."],
      minlength: [2, "Description needs to be at least 2 characters long"],
     },
  },
  { timestamps: true }//this is making the updateAt and createdAt fields of the Product documents
);

module.exports.Product = mongoose.model('Product', ProductSchema);
