const fs = require("fs");
const express = require("express");

let fileLocation = fs.readFileSync("data.json");
let messagesData = JSON.parse(fileLocation);

module.exports = messagesData;