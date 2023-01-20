const codeBlock = document.getElementsByClassName('s-code-block');
// const test = document.querySelector('div');
// const test2 = test.appendChild(btn);

// for loop to iterate through the code block and append button
for (let i = 0; i < codeBlock.length; i++) {
	// Create element for the copy clipboard button
	const btn = document.createElement('button');
	const copyBoard = document.createElement('img');
	btn.setAttribute('class', 'copy-button');
	// copyBoard.src = `${browser.runtime.getURL('./images/clipboard.svg')}`;
	// copyBoard.alt = 'Clipboard Copy';
	copyBoard.setAttribute('src', './images/clipboard.svg');
	copyBoard.alt = 'Clipboard Copy';
	btn.appendChild(copyBoard);
	codeBlock[i].appendChild(btn);
	console.log('TEST SUCCESS');
}

const button = document.querySelectorAll('.copy-button');
button.forEach((el) => {
	el.addEventListener('click', (event) => {
		navigator.clipboard.writeText(el.parentNode.childNodes[0].innerText);
		alert('Copied to Clipboard');
	});
});
