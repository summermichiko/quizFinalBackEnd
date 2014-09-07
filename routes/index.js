var express = require('express');
var router = express.Router();

var quiz = [
	{
		"q": "What continent has the fewest flowering plants?", 
		'options': [{ 'value': "Africa"} , { 'value': "Australia"} , {'value' : "Antarctica"} , { 'value': "North America"}],
		'answer': "Antarctica", 
		'difficulty': 5
		},
		{ "q": "What was the first planet to be discovered using the telescope in 1781??", 
		'options':[{ 'value': 'Mars'} , { 'value': 'Uranus'} , {'value' : 'Pluto'} , { 'value': 'none of the above'}], 
		'answer':'Uranus',
		'difficulty': 2
		},
		{ 
		'q': "What is the diamete of Earth?", 
		'options':[{ 'value': '5,000 miles'} ,{ 'value': '3,500 miles'} , {'value' : '10,000 miles'} , { 'value': '8,000 miles'}], 
		'answer':'8,000 miles',
		'difficulty': 6
		},
		{ 
		'q': "Someone who suffers from oneirophobia is scared of what?", 
		'options':[{ 'value': 'Dreams'} ,{ 'value': 'Light'} , {'value' : 'technology'} , { 'value': 'plants'}], 
		'answer':'Dreams',
		'difficulty': 1
		}
	];

router.get('/', function(req, res) {
  res.json(quiz);
});

router.post('/new_question', function(req, res) {
	quiz.push(req.body.newQuestion);
	res.send(200);
});

module.exports = router;











