const imageInput = document.getElementById("image_input");
const titleInput = document.getElementById("title_input");
const descriptionInput = document.getElementById("description_input");
const datetimeInput = document.getElementById("datetime_input");
const submitBtn = document.getElementById("submit_btn");
const cardWrapper = document.querySelector(".card_wrapper");

let newImage = "";

submitBtn.addEventListener("click", () => {
	const newImageInput = imageInput.value;
	const newITitleInput = titleInput.value;
	const newIdecriptionInput = descriptionInput.value;
	const newdatetimeInput = datetimeInput.value;
	// CREATE ELEMENT
	const cardResults = document.createElement("div");
	cardResults.className = "card_results";

	imageResultImg = document.createElement("img");
	imageResultImg.className = "image_result";
	imageResultImg.src = newImage;
	imageResultImg.style.display = "block";

	const titlResultH3 = document.createElement("h3");
	titlResultH3.className = "title";

	const descriptionInputP = document.createElement("p");
	descriptionInputP.className = "description";

	const dateTimeUpdateP = document.createElement("p");
	dateTimeUpdateP.className = "date_time";

	// APPEND CHILD
	cardWrapper.appendChild(cardResults);
	cardResults.appendChild(imageResultImg);
	cardResults.appendChild(titlResultH3);
	cardResults.appendChild(descriptionInputP);
	cardResults.appendChild(dateTimeUpdateP);

	// imageResultImg.innerHTML = newImageInput;
	titlResultH3.innerText = newITitleInput;
	descriptionInputP.innerText = newIdecriptionInput;
	dateTimeUpdateP.innerText = newdatetimeInput;
});

imageInput.addEventListener("change", function (e) {
	const file = e.target.files[0];
	console.log(file);

	if (file) {
		const reader = new FileReader();

		// const fileUrl = URL.createObjectURL(file);
		// console.log(fileUrl);

		// nedImage.src = fileUrl;

		reader.onload = () => {
			newImage = reader.result;
			console.log(newImage);
		};
		reader.readAsDataURL(file);
	}
});
