const btn = document.getElementById('btn');
const color = document.getElementById('color');
const tooltip = document.getElementById("tooltip");
const randomColor = generateRandomColor();
setColor(randomColor);

function generateRandomColor() {
	return '#' + Math.floor(Math.random() * 16777215).toString(16);
}

function setColor(randomColor) {
	document.body.style.backgroundColor = randomColor;
	color.innerText = randomColor;
	color.style.color = randomColor;
}

function copyToClipBoard() {
	var copyText = color;
	var textArea = document.createElement("textarea");
	textArea.value = copyText.textContent;
	document.body.appendChild(textArea);
	textArea.select();
	document.execCommand("Copy");

	tooltip.innerHTML = "Copied: " + textArea.value;

	textArea.remove();
}

function clearToolTip() {
	tooltip.innerHTML = "Copy to clipboard";
}

btn.addEventListener('click', () => {
	let randomColor = generateRandomColor();
	setColor(randomColor);
	clearToolTip();
});

color.addEventListener("click", copyToClipBoard);