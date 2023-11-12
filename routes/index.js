var express = require('express');
var router = express.Router();

const Message = require('../db')

run()
async function run () {
  try {
    const msg1 = await Message.findOne({user: "Amando"})
    const msg2 = await Message.findOne({user: "Charles"})

    if (msg1 === null && msg2 === null) {
      await Message.create({
        text: "Hi there!",
        user: "Amando",
        added: new Date(),
      })    
      await Message.create({
        text: "Hello World!",
        user: "Charles",
        added: new Date(),
      })
      console.log('Users created')
    } else {
      console.log('Users already exist')
    }
  } catch (error) {
    console.log("Error: ", error.message)
  }
}

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Messageboard', messages });
});

router.post('/new', function(req, res) {
  const name = req.body.name
  const message = req.body.message
  messages.push({ 
    text: message,
    user: name,
    added: new Date()
   })
  console.log(messages)
  res.redirect('/')
})

module.exports = router;
