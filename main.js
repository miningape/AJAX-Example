var pageCounter = 1
var container = document.getElementById("animal-info");
var btn = document.getElementById("btn");

btn.addEventListener("click", function() {
	var request = new XMLHttpRequest();

	var URL = "";
	URL += "https://learnwebcode.github.io/json-example/animals-";
	URL += pageCounter + ".json";

	// Can also POST
	request.open('GET', URL);

	request.onload = function() {
		var data = JSON.parse(request.responseText);
		renderHTML(data);
	};

	request.send();
	pageCounter++;
	if (pageCounter > 3) {
		btn.classList.add("hide-me");
	}
});

function renderHTML(data) {
	var htmlString = "";

	for (i = 0; i < data.length; i++) {
		htmlString += "<p>" + data[i].name + " is a "; 
		htmlString += data[i].species + " that likes ";

		for (j = 0; j < data[i].foods.likes.length; j++) {
			if (j == 0) {
				htmlString += data[i].foods.likes[j];
			} else {
				htmlString += " and " + data[i].foods.likes[j];
			}
		}

		htmlString += " and dislikes ";

		for (j = 0; j < data[i].foods.dislikes.length; j++) {
			if (j == 0) {
				htmlString += data[i].foods.dislikes[j];
			} else {
				htmlString += " and " + data[i].foods.dislikes[j];
			}
		}

		htmlString += ".</p>";
	}

	container.insertAdjacentHTML('beforeend', htmlString);
}