const express = require("express");
const router = express.Router();

const { createLead, getLeads, updateStatus } = require("../controllers/leadController");

router.post("/", createLead);
router.get("/", getLeads);
router.patch("/:id", updateStatus);

module.exports = router;
