
const state = {
	round_1: { // Use rounds to collect different stages of the stories. -- can be any name
		a:{ // options within each round. -- can be any name
			playing: true, //is the game still playing
			question: 'Adventure time! will you choose the road or the forest',
			options: {
				a: {
					text: 'Road', // button text
					destination: ['round_2', 'b'] // option to display when the button pressed
				},
				b: {
					text: 'Forest',
					destination: ['round_2', 'a']
				}
			}
		}// end round_1.a
	},// end round_1
	round_2: {
		a: {
			playing: true,
			question: 'As you you contemplate the conundrum "Does a falling tree make any sound if there is no one to hear it", a tree falls! Will you...',
			options: {
				a: {
					text: 'jump left',
					destination: ['end', 'a']
				},
				b: {
					text: 'jump right',
					destination: ['round_3', 'a']
				}
			}
		},
		b: {
			playing: true,
			question: 'As you\'re walking along you meet someone asking for help',
			options: {
				a: {
					text: 'Stop and help',
					destination: ['round_3', 'b']
				},
				b: {
					text: 'Keep walking',
					destination: ['end', 'b']
				}
			}
		}
		
	},// end round_2
	round_3: {
		a: {
			playing: true,
			question: 'That was close but you dodged the tree. Clearly this is more dangerous than you though for a simple little text game! Where to next?',
			options: {
				a: {
					text: 'Deeper into the forest',
					destination: ['round_4', 'a']
				},
				b: {
					text: 'Head out to the road',
					destination: ['round_2', 'b']
				}
			}
		},
		b: {
			playing: true,
			question: 'They are very grateful and offers you a small reward',
			options: {
				a: {
					text: 'Take it',
					destination: ['end', 'b']
				},
				b: {
					text: 'Don\'t take it',
					destination: ['end', 'b']
				}
			}
		}
	},// end round_3
	round_4: {
		a: {
			playing: true,
			question: 'Dead end! You see a cave with smoke, pouring out, it looks dangerous...  ',
			options: {
				a: {
					text: 'Let\'s take a look',
					destination: ['round_5', 'a']
				},
				b: {
					text: 'Head out to the road',
					destination: ['round_2', 'b']
				}
			}
		}
	},//end round 4
	round_5: {
		a: {
			playing: true,
			question: 'Dragon!!!',
			options: {
				a: {
					text: 'Fight',
					destination: ['end', 'c']
				},
				b: {
					text: 'Runaway!!',
					destination: ['end', 'a']
				}
			}
		}
	},// end round 5

	end: { // end of game screens
		a: {
			playing: false, // game no longer in play
			question: 'You weren\'t fast enough and died, your adventure ends here and the world will probably forget you ever existed',
		},
		b: {
			playing: false,
			question: 'He follows you at a distance and while you sleep ties you up and robs you. Your pittiful attempt at a heroic quest ends here.',	
		},
		c: {
			playing: false,
			question: 'The dragon trips over it\'s own tail and is out cold! You dash it and grab the gold and live happily ever after' ,
		}
		

	}
}
