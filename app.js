// Utility functions

function siblings(selector) {
	var element = document.querySelector(selector)
	var childElements = Array.from(element.parentNode.children)
	return childElements.filter(function(child) {
		return child !== element
	})
}

function closest(element, query) {
	while (!!element && element !== document) {
		if (element.matches(query)) {
			return element
		}
		element = element.parentNode
	}
	return null
}

function delegate(selector, eventName, targetSelector, listener) {
	document.querySelector(selector).addEventListener(eventName, function (event) {
		var closestMatch = closest(event.target, targetSelector)
		if (closestMatch) {
			event.delegateTarget = closestMatch
			listener(event)
		}
	})
}


/* ////////////////////////////////////////////////////////////////  */

const template = {
	button: (param)=>{ return `<button>${param}</button>`},
}


const appContainer = document.getElementById('appContainer');
const destStart = state.round_1.a

// example: choice = state.round_3.a
const gameTemplate = (choice)=>{
	let optionKeys = Object.keys(choice.options);
	const buttons = optionKeys.map((v)=>{
		return `
			<button data-round="${choice.options[v].destination[0]}" data-path="${choice.options[v].destination[1]}" >
				${choice.options[v].text}
			</button>
		`
	}).join('');

	return `
		<div class="wrapper">
			<h1 class="question">${choice.question}</h1>
			${ buttons }
		</div>
	`
}

const endTemplate = (choice)=>{
	return `
		<div class="wrapper">
			<h1 class="question">${choice.question}</h1>
		</div>
	`
}


const renderGame = (data)=>{
	appContainer.innerHTML = data
}


delegate('#appContainer', 'click', 'button', ()=>{
	let destA = event.target.getAttribute('data-round');
	let destB = event.target.getAttribute('data-path');
	state.destNext = state[destA][destB];	

	let gameContent = (data)=>{
		if (!!state.destNext.playing){
			return gameTemplate(data) 
		} else {
			return endTemplate(data)
		}
	}
	renderGame( gameContent(state.destNext) )

});

renderGame( gameTemplate(destStart) )

