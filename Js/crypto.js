// import crypto from "crypto";

const crypto = require("crypto");

let s = crypto.randomBytes(24).toString("base64");

console.log(s.length, s);


