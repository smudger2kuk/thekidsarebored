var sun = document.getElementById("sun-icon");
var cloud = document.getElementById("cloud-icon");
var rain = document.getElementById("rain-icon");
var weather = "";
var activityText = document.getElementById("activity-text");
var activityButton = document.getElementById("activity-button");

var activitiesSun = ["have a day at the beach", "go for a picnic in the park", "feed the ducks at the park", "go for a bike ride", "check out a local school/village fete", "go to a local festival", "go exploring in the woods", "find a local outdoor park and play area", "check out a local car boot sale and sell some unwanted toys", "fill the paddling pool and have a bbq in the garden", "visit a local farm and feed the animals", "go to the zoo", "visit a safari park", "visit the local garden centre", "pick your own fruit and veg", "go to a theme park", "find your local English Heritage site", "become a nature detective with <a href='https://www.woodlandtrust.org.uk/naturedetectives/activities/'>The Woodlands Trust</a>", "go and catch 'em all with Pokemon Go", "catch the train to the next town/city to you and explore", "go swimming", "find a local splash park", "go and play crazy golf"];

var activitiesRain = ["go to an indoor play centre", "visit the local museum", "build a indoor den and watch a film", "go to the cinema", "get your wellies and waterproofs on and visit the park", "go bowling and eat out for lunch", "visit the local craft village and make something cool", "go to a tramploine park", "go swimming", "find a 'kids eat free' restaurant for lunch or dinner", "visit Pets at Home and see the animals", "visit the library to read and borrow some books", "do some baking", "get creative with arts & crafts", "get the colouring books, crayons & paint out for messy play", "get some playdoh and get creative"];

var activitiesCloud = ["go to an indoor play centre", "visit the local museum", "build a indoor den and watch a film", "go to the cinema", "feed the ducks at the park", "go for a bike ride", "check out a local school/village fete", "go to a local festival", "go exploring in the woods", "find a local outdoor park and play area", "check out a local car boot sale and sell some unwanted toys", "pick your own fruit and veg", "become a nature detective with <a href='https://www.woodlandtrust.org.uk/naturedetectives/activities/'>The Woodlands Trust</a>", "go and catch 'em all with Pokemon Go", "catch the train to the next town/city to you and explore", "go swimming", "go and play crazy golf", "find a 'kids eat free' restaurant for lunch or dinner", "visit Pets at Home and see the animals", "visit the library to read and borrow some books" ];

sun.onclick = function () {
	"use strict";
    weather = "sun";
    sun.classList.add('selected');
    cloud.classList.remove('selected');
    rain.classList.remove('selected');
};

cloud.onclick = function () {
	"use strict";
    weather = "cloud";
    sun.classList.remove('selected');
    cloud.classList.add('selected');
    rain.classList.remove('selected');
};

rain.onclick = function () {
	"use strict";
    weather = "rain";
    sun.classList.remove('selected');
    cloud.classList.remove('selected');
    rain.classList.add('selected');
};

activityButton.onclick = function () {
	"use strict";
    var leadingText = "Why don't you ",
		randomValue;
	
    if (weather === "sun") {
        randomValue = Math.floor((Math.random() * (activitiesSun.length)));
        activityText.innerHTML = leadingText.concat(activitiesSun[randomValue]);
        activityButton.innerHTML = "Pick another activity";
    
    } else if (weather === "cloud") {
        randomValue = Math.floor((Math.random() * (activitiesCloud.length)));
        activityText.innerHTML = leadingText.concat(activitiesCloud[randomValue]);
        activityButton.innerHTML = "Pick another activity";
    
    } else if (weather === "rain") {
        randomValue = Math.floor((Math.random() * (activitiesRain.length)));
        activityText.innerHTML = leadingText.concat(activitiesRain[randomValue]);
        activityButton.innerHTML = "Pick another activity";
    
    } else {
        activityText.innerHTML = "Please choose the weather first";
    
    }
 
    activityText.scrollIntoView(true);
  
};