





const text = "must be won";
const container = document.getElementById("animated-text");

[...text].forEach((char, i) => {
	const span = document.createElement("span");
	span.textContent = char;
	span.style.animationDelay = `${i * 0.15}s`;
	container.appendChild(span);
});


setTimeout(() => {
	const btnText = "Play now";
	const btnContainer = document.getElementById("animated-btn-text");

	[...btnText].forEach((char, i) => {
		const span = document.createElement("span");
		span.textContent = char;
		span.style.animationDelay = `${i * 0.15}s`;
		btnContainer.appendChild(span);
	});
}, 2400);

