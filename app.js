var MostWanted = {};

function app(){
  var searchType = promptFor("Do you know the name of the person you are looking for?\n Enter 'yes' or 'no'", yesNo).toLowerCase();
  switch(searchType){
    case 'yes':
      var currentPerson = searchByName();
      mainMenu(currentPerson);
    break;
    case 'no':

      MostWanted.searchTrait = searchByTrait();
    // TODO: search by traits
    break;
    default:
    app(people); // restart app
    break;
  }
}

// Menu function to call once you find who you are looking for
function mainMenu(currentPerson){
  /* Here we pass in the entire person object that we found in our search, as well as the entire original dataset of people. We need people in order to find descendants and other information that the user may want. */
  if(currentPerson.length === 0){
    alert("Could not find that individual.");
    return app(); // restart
  }

  var displayOption = prompt("Found " + currentPerson[0].firstName + " " + currentPerson[0].lastName + " . Do you want to know their\n 1 = Info\n 2 = Family\n 3 = Descendants\n 4 = Restart\n 5 = Quit");

  switch(displayOption){
    case "1":
     displayPerson();
    // TODO: get person's info
    break;
    case "2":
      displayFamily();
    // TODO: get person's family
    break;
    case "3":
      displayDescendants();
    // TODO: get person's descendants
    break;
    case "4":
    app(); // restart
    break;
    case "5":
    return; // stop execution
    default:
    return mainMenu(); // ask again
  }
}

function searchByName(){
  //IS CASE SESITIVE
  var firstName = promptFor("What is the person's first name?", chars);
  var lastName = promptFor("What is the person's last name?", chars);
  /*
    var results = data.filter(x => x.firstName === firstName && x.lastName === lastName);
    results[0];
*/
    /*if(){
      displayPerson(person, testOne);
    }*/

    var results = data.filter(x => x.firstName === firstName && x.lastName === lastName);
    MostWanted.currentPerson = results;
    return results;
/*
    var results = data.filter(function(el){
      
        if(el.firstName === firstName && el.lastName === lastName){
          return true;
        }
        else{
          return false;
        }
    });
    var tempPerson = results[0];*/
  // TODO: find the person using the name they entered
}



function displayDescendants(){
 MostWanted.currentPerson.map(function(x){
  currentPersonId = x.id; 
 });

var alertOfDescendants = ''; 
  data.map(function(x){
    if(x.parents.length === 2){
      var parentOne = x.parents[0];
      var parentTwo = x.parents[1];
    }

    else if(x.parents.length === 1){
      var parentOne = x.parents[0];
    }

    if(currentPersonId === parentOne){
      var childOneName = x.firstName + ' ' + x.lastName;
      alertOfDescendants += childOneName + '\n';
    }
    if(currentPersonId === parentTwo){
      var childTwoName = x.firstName + ' ' + x.lastName;
      alertOfDescendants += childTwoName + '\n';
    }

    //return MostWanted________.firstName + ' ' + MostWanted__________.lastName;

  });//.join("\n"));
  alert(alertOfDescendants);
  mainMenu();
}
/*
function displayPeople(people){
  alert(people.map(function(person){
    return MostWanted________.firstName + ' ' + MostWanted__________.lastName;

  }).join("\n"));
}*/

function displayFamily(){
//CHILDREN
  MostWanted.currentPerson.map(function(x){
    currentPersonId = x.id; 
 });

var stringOfDescendants = 'CHILDREN:' + '\n'; 
  data.map(function(x){
    if(x.parents.length === 2){
      var parentOne = x.parents[0];
      var parentTwo = x.parents[1];
    }

    else if(x.parents.length === 1){
      var parentOne = x.parents[0];
    }

    if(currentPersonId === parentOne){
      var childOneName = x.firstName + ' ' + x.lastName;
      stringOfDescendants += childOneName + '\n';
    }
    if(currentPersonId === parentTwo){
      var childTwoName = x.firstName + ' ' + x.lastName;
      stringOfDescendants += childTwoName + '\n';
    }
  });
//SPOUSE

  MostWanted.currentPerson.map(function(x){
    currentSpouseId = x.currentSpouse;
  });

var holdCurrentSpouse = 'CURRENT SPOUSE:' + '\n';
  data.map(function(x){
    var currentSpouse = x.id;
    if(currentSpouseId == currentSpouse){
      var spouseName = x.firstName + ' ' + x.lastName + '\n';
      holdCurrentSpouse += spouseName;
    } 
  });
//SIBLINGS
var parentOne;
var parentTwo;
  MostWanted.currentPerson.map(function(x){
    if(x.parents.length === 2){
      parentOne = x.parents[0];
      parentTwo = x.parents[1];
    }

     else if(x.parents.length === 1){
      parentOne = x.parents[0];
    }

    else{
      parentOne = 'noParents'
      parentTwo = 'noParents'
    }
});
  var childrenFromParents = [];
  childrenFromParents = data.filter(x => x.parents[0] === parentOne);

  childrenFromParents = data.filter(x => x.parents[1] === parentTwo);

  var siblingsFromParents
  siblingsFromParents = childrenFromParents.filter(x => x !== MostWanted.currentPerson[0]);

  var siblingsFromParentsString = 'SIBLINGS:' + '\n';
  for (var i = 0; i = siblingsFromParents.length; i++) {
    var getWholeObject = siblingsFromParents.pop()
    var getName = getWholeObject.firstName + ' ' + getWholeObject.lastName + '\n';
    siblingsFromParentsString += getName;

  }
//PARENTS
  var wholeParents = '';
  wholeParents = data.filter(x => x.id === parentOne || x.id === parentTwo);

  //wholeParents = data.filter(x => x.id === MostWanted.parentTwo);

  var wholeParentsString = 'PARENTS:' + '\n';
  for (var i = 0; i = wholeParents.length; i++) {
    var getWholeObject = wholeParents.pop()
    var getName = getWholeObject.firstName + ' ' + getWholeObject.lastName + '\n';
    wholeParentsString += getName;
  }
  alert(stringOfDescendants + '\n' + holdCurrentSpouse + '\n' + siblingsFromParentsString + '\n' + wholeParentsString);
  mainMenu(MostWanted.currentPerson);
}

function displayPerson(){
  var person = MostWanted.currentPerson[0];
  var personAttributes = "Gender: " + person.gender + "\n";
  personAttributes += "Date of birth: " + person.dob + "\n";
  personAttributes += "Height: " + person.height + "\n";
  personAttributes += "Weight: " + person.weight + "\n";
  personAttributes += "Eye color: " + person.eyeColor + "\n";
  personAttributes += "Occupation: " + person.occupation;
  
  var personInfo = "First Name: " + person.firstName + "\n";
  personInfo += "Last Name: " + person.lastName + "\n";
  
  alert(personInfo);
  alert(personAttributes);
  mainMenu(MostWanted.currentPerson);
}

function promptFor(question, valid){
  do{
    var response = prompt(question).trim();
  } while(!response || !valid(response));
  return response;
}


function yesNo(input){
  return input.toLowerCase() == "yes" || input.toLowerCase() == "no";
}


function chars(input){
  return true;
}

function searchByTrait(){

	var trait = prompt("What do you know of the person?\n 1 = Age \n 2 = Eye color\n 3 = Height\n 4 = Weight\n 5 = Occupation");

	switch (trait){

    case '1':
      var userAge = parseInt(prompt("Enter the person's age."));
      databaseAge();

      var ageResult = data.filter(x => x.age == userAge);
      MostWanted.searchByAge = ageResult;

      var futureAlert = '';
      var i = 0;
     //MAP
      MostWanted.searchByAge.map(function(x){
        var firstName = x.firstName;
        var lastName = x.lastName;
        var fullName = firstName + ' ' + lastName + '\n';
        futureAlert += fullName;
        i++
          if(i === MostWanted.searchByAge.length){
            return futureAlert;
          } 
      });
      alert('here is a list of people meeting the requirments: ' + '\n' + futureAlert);
      app();

    break;

		case '2':
			var eyeColor = prompt("Enter color of the person's eyes\n 1 = black\n 2 = blue\n 3 = brown\n 4 = green\n 5 = hazel");
			var eyeResult = data.filter(x => x.eyeColor === eyeColor);
			MostWanted.searchByEyes = eyeResult;
     
      var futureAlert = '';
      var i = 0;
     //MAP
      MostWanted.searchByEyes.map(function(x){
        var firstName = x.firstName;
        var lastName = x.lastName;
        var fullName = firstName + ' ' + lastName + '\n';
        futureAlert += fullName;
        i++
          if(i === MostWanted.searchByEyes.length){
            return futureAlert;
          } 
      });
      alert('here is a list of people meeting the requirments: ' + '\n' + futureAlert);
      app();
      //for (var i = 0; i < MostWanted.searchByEyes.length; i++) {

      //futureAlert += MostWanted.searchByEyes[i]

    break;
		case '3':
			var heightEntered = prompt("Enter the person's height (Number only)");
			var heightResult = data.filter(x => x.height == heightEntered);
			MostWanted.searchByHeight = heightResult;

      var futureAlert = '';
      var i = 0;
     //MAP
      MostWanted.searchByHeight.map(function(x){
        var firstName = x.firstName;
        var lastName = x.lastName;
        var fullName = firstName + ' ' + lastName + '\n';
        futureAlert += fullName;
        i++
          if(i === MostWanted.searchByHeight.length){
            return futureAlert;
          } 
      });
      alert('here is a list of people meeting the requirments: ' + '\n' + futureAlert);
      app();

		break;
		case '4':
			var weightEntered = prompt("Enter the person's weight (Number only)");
			var weightResult = data.filter(x => x.weight == weightEntered);
			MostWanted.searchByWeight = weightResult;

      var futureAlert = '';
      var i = 0;
     //MAP
      MostWanted.searchByWeight.map(function(x){
        var firstName = x.firstName;
        var lastName = x.lastName;
        var fullName = firstName + ' ' + lastName + '\n';
        futureAlert += fullName;
        i++
          if(i === MostWanted.searchByWeight.length){
            return futureAlert;
          } 
      });
      alert('here is a list of people meeting the requirments: ' + '\n' + futureAlert);
      app();


		break;
		case '5':
			var employment = prompt("Enter the person's occupation");
			var employmentResult = data.filter(x => x.occupation === employment);
			MostWanted.searchByOccupation = employmentResult;

      var futureAlert = '';
      var i = 0;
     //MAP
      MostWanted.searchByOccupation.map(function(x){
        var firstName = x.firstName;
        var lastName = x.lastName;
        var fullName = firstName + ' ' + lastName + '\n';
        futureAlert += fullName;
        i++
          if(i === MostWanted.searchByOccupation.length){
            return futureAlert;
          } 
      });
      alert('here is a list of people meeting the requirments: ' + '\n' + futureAlert);
      app();

		break;
		default:
		alert("Sorry, that is not a valid character trait. Please try again");
		app();
	}
} 

function databaseAge(){
 var age = [];
 var dob = [];
 var birthday = data.map(function (x){
  dobNew = x.dob;
  dob.push(dobNew);
 });
 
  for (var i = 0; i < dob.length; i++){
    birthday = dob[i];
    var birthdayMilliseconds = Date.parse(birthday);
    var currentDateMilliseconds = Date.now();
    var millisecondsInYear = 31556952000;
    
    var  dateCalculated = currentDateMilliseconds - birthdayMilliseconds;

    var calculatedAge = Math.floor(dateCalculated / millisecondsInYear);

    birthday.split('/');

    var currentDate = new Date();
    var currentDay = currentDate.getDate();
    var currentMonth = currentDate.getMonth() + 1;

    if (birthday[0] === currentMonth){
         if (birthday[1] > currentDay){
            calculatedAge--;
         }
    }

    data[i].age = calculatedAge;
  }
}

