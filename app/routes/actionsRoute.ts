import express from "express";
const actionController = require("../controllers/actionController");

const router = express.Router();

router.get("/", actionController.getAllActions);
router.post("/", actionController.addAction);

module.exports = router;
