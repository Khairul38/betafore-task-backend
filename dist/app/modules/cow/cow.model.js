"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Cow = void 0;
const mongoose_1 = require("mongoose");
const cow_constant_1 = require("./cow.constant");
const cowSchema = new mongoose_1.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    age: {
      type: Number,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    location: {
      type: String,
      required: true,
      enum: cow_constant_1.cowLocations,
    },
    breed: {
      type: String,
      required: true,
      enum: cow_constant_1.cowBreeds,
    },
    weight: {
      type: Number,
      required: true,
    },
    label: {
      type: String,
      enum: cow_constant_1.cowLabels,
    },
    category: {
      type: String,
      required: true,
      enum: cow_constant_1.cowCategories,
    },
    seller: {
      type: mongoose_1.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
  },
  {
    timestamps: true,
    toJSON: {
      virtuals: true,
    },
  }
);
exports.Cow = (0, mongoose_1.model)("Cow", cowSchema);
