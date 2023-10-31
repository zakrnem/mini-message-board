var express = require('express');
var router = express.Router();

const messages = [
  {
    text: "Hi there!",
    user: "Amando",
    added: new Date()
  },
  {
    text: "Hello World!",
    user: "Charles",
    added: new Date()
  }
];

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
