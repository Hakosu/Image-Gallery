const images = document.querySelectorAll(".image");

images.forEach((image) => {
	image.addEventListener("click", () => {
		const src = image.querySelector("img").getAttribute("src");
		const alt = image.querySelector("img").getAttribute("alt");
		const modal = document.createElement("div");
		modal.classList.add("modal");
		modal.innerHTML = `
			<div class="modal-content">
				<span class="close">&times;</span>
				<img src="${src}" alt="${alt}">
			</div>
		`;
		document.body.appendChild(modal);
		const close = modal.querySelector(".close");
		close.addEventListener("click", () => {
			document.body.removeChild(modal);
		});
	});
});
