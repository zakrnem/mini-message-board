var express = require("express");
var router = express.Router();

const Message = require("../db");

run();
async function run() {
  try {
    const msg1 = await Message.findOne({ user: "Amando" });
    const msg2 = await Message.findOne({ user: "Charles" });

    if (msg1 === null && msg2 === null) {
      await Message.create({
        text: "Hi there!",
        user: "Amando",
        added: new Date(),
      });
      await Message.create({
        text: "Hello World!",
        user: "Charles",
        added: new Date(),
      });
      console.log("Users created");
    } else {
      console.log("Users already exist");
    }
  } catch (error) {
    console.log("Error: ", error.message);
  }
}

renderMessages();
function renderMessages() {
  router.get("/", async function (req, res, next) {
    const messages = await Message.find();
    res.render("index", { title: "Messageboard", messages });
  });
}

async function postMessages(message, name) {
  await Message.create({
    text: message,
    user: name,
    added: new Date(),
  });
}
router.post("/new", function (req, res) {
  const name = req.body.name;
  const message = req.body.message;
  postMessages(message, name);
  res.redirect("/");
});

module.exports = router;
