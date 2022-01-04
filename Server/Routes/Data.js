const express = require("express");
const messageController = require("../Controllers/messageController");
const router = express.Router();
const fs = require('fs');

router.get("/messages/:screen", messageController.getMessagesByScreenNumber);
router.get("/", messageController.getAll);

module.exports = router;
