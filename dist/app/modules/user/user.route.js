"use strict";
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserRoutes = void 0;
const express_1 = __importDefault(require("express"));
const user_controller_1 = require("./user.controller");
const validateRequest_1 = require("../../middlewares/validateRequest");
const user_validation_1 = require("./user.validation");
const auth_1 = require("../../middlewares/auth");
const user_1 = require("../../../enums/user");
const router = express_1.default.Router();
router.get(
  "/my-profile",
  (0, auth_1.auth)(user_1.ENUM_USER_ROLE.BUYER, user_1.ENUM_USER_ROLE.SELLER),
  user_controller_1.getProfile
);
router.patch(
  "/my-profile",
  (0, auth_1.auth)(user_1.ENUM_USER_ROLE.BUYER, user_1.ENUM_USER_ROLE.SELLER),
  user_controller_1.updateProfile
);
router.get(
  "/:id",
  (0, auth_1.auth)(user_1.ENUM_USER_ROLE.ADMIN),
  user_controller_1.getSingleUser
);
router.patch(
  "/:id",
  (0, auth_1.auth)(user_1.ENUM_USER_ROLE.ADMIN),
  (0, validateRequest_1.validateRequest)(user_validation_1.updateUserZodSchema),
  user_controller_1.updateSingleUser
);
router.delete(
  "/:id",
  (0, auth_1.auth)(user_1.ENUM_USER_ROLE.ADMIN),
  user_controller_1.deleteSingleUser
);
router.get(
  "/",
  (0, auth_1.auth)(user_1.ENUM_USER_ROLE.ADMIN),
  user_controller_1.getAllUser
);
exports.UserRoutes = router;
