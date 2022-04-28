const express = require("express");

const { userExists } = require("../middlewares/users.middlewares");

const {
  getAllUsers,
  createUser,
  getUserById,
  updateUser,
  deleteUser,
  getActivesUsers,
} = require("../controllers/users.controller");

const router = express.Router();

router.get("/", getAllUsers);
router.get("/actives", getActivesUsers);
router.post("/", createUser);

router
  .route("/:id")
  .get(userExists, getUserById)
  .patch(userExists, updateUser)
  .delete(userExists, deleteUser);

module.exports = { usersRouter: router };
