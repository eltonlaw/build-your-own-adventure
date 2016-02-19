// Creates a blank slate/Obliterates everything(other than the fixed nav)
var newScene = function() {
	var sb = document.getElementById("storyboard");
	sb.innerHTML = "";
}

// Creates an element and appends it to a parent node
function createAndAppend(tag, parentNode) {
	var element = document.createElement(tag);
	parentNode.appendChild(element);
	return element;
}
