"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.WishlistRoutes = void 0;
const express_1 = __importDefault(require("express"));
const validateRequest_1 = require("../../middlewares/validateRequest");
const wishlist_validation_1 = require("./wishlist.validation");
const wishlist_controller_1 = require("./wishlist.controller");
const auth_1 = require("../../middlewares/auth");
const user_1 = require("../../../enums/user");
const router = express_1.default.Router();
router.post("/", (0, validateRequest_1.validateRequest)(wishlist_validation_1.createWishlistZodSchema), (0, auth_1.auth)(user_1.ENUM_USER_ROLE.ADMIN, user_1.ENUM_USER_ROLE.USER), wishlist_controller_1.createWishlist);
router.get("/", (0, auth_1.auth)(user_1.ENUM_USER_ROLE.ADMIN), wishlist_controller_1.getAllWishlist);
router.get("/user", (0, auth_1.auth)(user_1.ENUM_USER_ROLE.ADMIN, user_1.ENUM_USER_ROLE.USER), wishlist_controller_1.getAllWishlistByUser);
router.get("/:id", (0, auth_1.auth)(user_1.ENUM_USER_ROLE.ADMIN, user_1.ENUM_USER_ROLE.USER), wishlist_controller_1.getSingleWishlistByBookId);
router.patch("/:id", (0, validateRequest_1.validateRequest)(wishlist_validation_1.updateWishlistZodSchema), (0, auth_1.auth)(user_1.ENUM_USER_ROLE.ADMIN, user_1.ENUM_USER_ROLE.USER), wishlist_controller_1.updateSingleWishlist);
router.delete("/:id", (0, auth_1.auth)(user_1.ENUM_USER_ROLE.ADMIN, user_1.ENUM_USER_ROLE.USER), wishlist_controller_1.deleteSingleWishlist);
exports.WishlistRoutes = router;
