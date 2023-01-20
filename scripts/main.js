const codeBlock = document.getElementsByClassName('s-code-block');
// const test = document.querySelector('div');
// const test2 = test.appendChild(btn);

// for loop to iterate through the code block and append button
for (let i = 0; i < codeBlock.length; i++) {
	// Create element for the copy clipboard button
	const btn = document.createElement('button');
	const copyBoard = document.createElement('img');
	btn.setAttribute('class', 'copy-button');

	// Create tooltip element
	// const tooltip = document.createElement('tooltip');
	// tooltip.appendChild(document.createTextNode('Copied'));
	// tooltip.setAttribute('class', 'tooltip');
	// tooltip.style = 'display:none; border-bottom: 20px solid; width: 20px';

	// Append clipboard icon
	copyBoard.src = `${chrome.runtime.getURL('/images/clipboard.svg')}`;
	copyBoard.alt = 'Clipboard Copy';
	btn.appendChild(copyBoard);
	// btn.appendChild(tooltip);
	codeBlock[i].appendChild(btn);

	//Position the button
	// btn.style.position = 'relative';
	btn.style.marginTop = '15px';
	// if (codeBlock[i].scrollWidth === codeBlock[i].offsetWidth && codeBlock[i].scrollHeight === codeBlock[i].offsetHeight) btn.style.left = `${codeBlock[i].offsetWidth - 25}px`;

	// btn.style.position = 'absolute';
	console.log('TEST SUCCESS');
}

const button = document.querySelectorAll('.copy-button');

button.forEach((el) => {
	el.addEventListener('click', (event) => {
		navigator.clipboard.writeText(el.parentNode.childNodes[0].innerText);
		// el.innerText = 'Copied';
		// alert('Copied to Clipboard');
		if (tooltip.style.display === 'none') {
			tooltip.style.display = 'block';
		} else {
			tooltip.style.display = 'none';
		}
	});
});
