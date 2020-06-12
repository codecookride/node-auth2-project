const express = require("express");
const helmet = require("helmet");
const cors = require("cors");

const authRouter = require("./auth/auth-router.js");
const usersRouter = require("./user/user-router");

const server = express();

server.use(helmet());
server.use(express.json());
server.use(cors());

server.use("/api/auth", authRouter);
server.use("/api/user", usersRouter);

server.get("/", (req, res) => {
  res.json({ api: "up" });
});

module.exports = server;