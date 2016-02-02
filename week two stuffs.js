document.write("beetlejuice beetlejuice beetlejuice<br>");
var array = [5, 6, 7];
if (150 < 100) {
    document.write("met<br>");
} else {
    document.write("not met<br>");
};

for (var i = 0; i < array.length; i++) {
	array[i]
	document.write(i + ""+" "+array[i] +"<br>");
};

document.write(addBling("Daniel"));

function addBling(to_bling) {
	return "---$$$ "+ to_bling + " $$$---<br>";
}


var answer = prompt("This website only tells lies. Yes or No?");

if(answer != null){
	document.write(answer + " is one way to answer the question.<br/>");
	}
document.write("Maximum number = ", Number.MAX_VALUE, "<br/>");
var RndmNmbr = Math.random() * (10);
var RndmNmbr2 = Math.random() * (10);
document.write("Random number 1 = ", RndmNmbr, " <br/>");
document.write("Random number 2 = ", RndmNmbr2, " <br/>");
var RoundedNum1 = Math.floor(RndmNmbr);
var RoundedNum2 = Math.floor(RndmNmbr2);

document.write("Random number 1 rounded = ", RoundedNum1, " <br/>");
document.write("Random number 2 rounded = ", RoundedNum2, " <br/>");
var character = {
	name: "Tortuga",
	hitpoint: 20,
	type: "Turtle",
	takeDamage: function(damageTaken){
		this.hitpoint -=damageTaken;
	},
	heal: function(amountHealed){
		this.hitpoint -=amountHealed;
	},
}
document.write("Character Name : ", character.name, " <br/>"); 
document.write("Character Class : ", character.type, " <br/>");
document.write("Current Hitpoints : ", character.hitpoint,"<br/>");
character.takeDamage(RoundedNum1);
document.write("Oh No! Tortuga has taken ", RoundedNum1, " points of damage! ");
document.write("Tortuga's hit points are now at ", character.hitpoint, "! <br/>");
character.heal(RoundedNum2);
document.write("Tortuga has been healed ", RoundedNum2, " hit points! ");
document.write("Tortuga's hit points are now at ", character.hitpoint, "! <br/>");
	console.log(character);



