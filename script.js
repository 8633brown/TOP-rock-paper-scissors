const weapons = ['rock', 'paper', 'scissors']

const computerPlay = function () {
	return weapons[Math.floor(Math.random() * 3)]
}

const playRound = function (playerSelection, computerSelection) {
	playerSelection = playerSelection.toLowerCase()

	if (playerSelection === computerSelection) {
		return 0
	}

	const win = 1
	const lose = -1
	const resultTable = {
		rock: {
			paper: lose,
			scissors: win,
		},
		paper: {
			scissors: lose,
			rock: win,
		},
		scissors: {
			rock: lose,
			paper: win,
		}
	}

	return resultTable[playerSelection][computerSelection]
}

const getUserSelection = function() {
	selection = prompt('rock, paper or scissors?')
	if (~weapons.indexOf(selection.toLowerCase())) {
		return selection
	}
	return getUserSelection()
}

let score = 0
let round = 1
const totalRounds = 5
const game = function() {
	for (round; round < totalRounds && Math.abs(score) < 3; round++) {
		let result = playRound(getUserSelection(), computerPlay())
		switch (result) {
			case (-1):
				console.log('lose')
				break
			case (1):
				console.log('win')
				break
			case (0):
				console.log('draw')
				// replay the round.
				round--
				continue
		}
		score += result;
	}
	if (score > 0) {
		return 'YOU WIN'
	}
	return 'YOU LOSE'
}
