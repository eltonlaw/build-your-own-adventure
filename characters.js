var selectedChar;
// Character Object 
// this.addHtml creates the character div from scratch for each character using the rest of it's info
var Character = function(name, description, img) {
	this.name = name;
	this.description = description;
	this.img = img;
	this.html = null;
	this.addHtml = function(){
		var html = document.createElement("div");
		html.setAttribute("class", "character col-xs-6");
		html.addEventListener("click", function(e){
			selectedChar = name;
			newScene();
			// START HERE - Create a new script + function that we wanna call here for the next scene
		});

		var cImg = createAndAppend("img", html);
		cImg.setAttribute("src", this.img);

		var cName = createAndAppend("h4", html);
		cName.innerHTML = this.name;

		var cDesc = createAndAppend("p", html);
		cDesc.innerHTML = this.description;

		this.html = html;
	}
	this.addHtml();
}


//Character bios
var pig = new Character("Porkus the Fat", 
	"Porkus hails from a land far away. Not much is known about this enigmatic fellow, but we do know one thing...he likes to eat.",
	"img/characters/pig.jpg")

var dog = new Character("Barkington the Loyal",
	"Barkington's fame is spread wide and far, the mere mention of him is known to send his enemies into a fit of terror. In addition he is extremely proficient at digging up bones and burying them.",
	"img/characters/dog.gif")

var turtle = new Character("Wiley the Steady", 
	"The legend goes that a long, long time ago old Wiley prevailed against a mighty foe from the Rabbit Clan with the power of his will", 
	"img/characters/turtle.png")

var crow = new Character("Crowley the Cautious", 
	"Cunning and Intelligent, uses powerful magic to slay it's enemies.",
	"img/characters/crow.jpg")

var fish = new Character ("Fish the Dragon",
	"Don't be fooled by her looks, though she looks cute and tame beneath the visage is a fire-breathing dragon. No one knows why she looks like a fish.", 
	"img/characters/fish.png")