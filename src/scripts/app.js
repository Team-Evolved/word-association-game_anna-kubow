

const questions = [

	{
		quiz   :['value', 'estamate', 'evaluate'],
		options:['jury', 'assess'],
		correct: 2
	},

	{
		quiz   :['close', 'near', 'next'],
		options:['trace', 'adjacent'],
		correct: 2
	},

	{
		quiz   :['assume', 'insight', 'weather'],
		options:['forecast', 'sustainable'],
		correct: 1
	},

	{
		quiz   :['assume', 'insight', 'weather'],
		options:['forecast', 'sustainable'],
		correct: 1
	},

	{
		quiz   :['fast', 'quick', 'promt'],
		options:['rapid', 'sustainable'],
		correct: 1
	},
]

const scoreDisplay    = document.getElementById('score-display')
const questionDisplay = document.getElementById('question-display')

let score = 0
scoreDisplay.textContent = score

let log = console.log





log(questions[0])

log(questions[1][[0]])