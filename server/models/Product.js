const mongoose = require('mongoose');
const { Schema } = mongoose;

const CATEGORY_ENUM = [
    "Home Decor",
    "Kitchen & Dining",
    "Gardenware",
    "Festive Specials"
];

const productSchema = new Schema({
    productName: { type: String, required: true, trim: true },
    description: { type: String, required: true, trim: true },
    category: { type: String, enum: CATEGORY_ENUM, required: true },
    productDetails: { type: String, required: true, trim: true },

    price: { type: Number, required: true, min: 0 },
    sku: { type: String, unique: true, required: true, trim: true },
    stockQuantity: { type: Number, default: 0, min: 0 },

    dimensions: {
        height: { type: Number, required: true, min: 0 },
        width: { type: Number, required: true, min: 0 },
        depth: { type: Number, required: true, min: 0 }
    },
    weight: { type: Number, required: true, min: 0 },

    material: { type: String, default: "Terracotta" },
    careInstructions: { type: String, trim: true, default: "Handle with care. Clean with a dry cloth. Avoid prolonged exposure to water." },
    images: [{ type: String, required: true }],

    isHandmade: { type: Boolean, default: true },
    limitedEdition: { type: Boolean, default: false },

    discountPercentage: { type: Number, min: 0, max: 100, default: 10 },

    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now }
});

productSchema.pre('save', function (next) {
    this.updatedAt = Date.now();
    next();
});

module.exports = mongoose.model('Product', productSchema);
