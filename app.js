var MostWanted = {};

function app(){
  var searchType = promptFor("Do you know the name of the person you are looking for?\n Enter 'yes' or 'no'", yesNo).toLowerCase();
  switch(searchType){
    case 'yes':
      searchByName();
      mainMenu(MostWanted.currentPerson);
    break;
    case 'no':
      MostWanted.data = data;
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
  if(!currentPerson){
    alert("Could not find that individual.");
    return app(); // restart
  }

  var displayOption = prompt("Found " + currentPerson.firstName + " " + currentPerson.lastName + " . Do you want to know their\n 1 = Info\n 2 = Family\n 3 = Descendants\n 4 = Restart\n 5 = Quit");
  
  
  switch(displayOption){
    case "1":
     displayPerson();
    // TODO: get person's info
    break;
    case "2":
      displayFamily(MostWanted.currentPerson);
    // TODO: get person's family
    break;
    case "3":
      MostWanted.DescendantsList = '';
      displayDescendants(MostWanted.currentPerson);
      //print here
      alert(MostWanted.DescendantsList);
      mainMenu(MostWanted.currentPerson);
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
    MostWanted.currentPerson = results[0];
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

/*function getCurrentPersonId(){
MostWanted.currentPerson;
var testOne = MostWanted.currentPerson.map(function(x){
  return x.id; 
 });
}*/

function displayDescendants(person){

var arrayOfDescendants = []; 
  data.map(function(x){
    if(x.parents.length === 2){
      var parentOne = x.parents[0];
      var parentTwo = x.parents[1];
    }

    else if(x.parents.length === 1){
      var parentOne = x.parents[0];
    }

    if(person.id === parentOne){
      var childOneName = x;
      arrayOfDescendants.push(childOneName);
    }
    if(person.id === parentTwo){
      var childTwoName = x;
      arrayOfDescendants.push(childTwoName);
    }
  });

  if(arrayOfDescendants.length > 0){
    for (var i = 0; i < arrayOfDescendants.length; i++) {
      MostWanted.DescendantsList += arrayOfDescendants[i].firstName + " " + arrayOfDescendants[i].lastName + "\n";
      displayDescendants(arrayOfDescendants[i]);

    }  
  }
}    
    //if(alertOfDescendants !== ''){

    //}
      
   
   /* if(data[i].parents.length > 0){
    
      if(testTwo === parentOne || testTwo === parentTwo){

      }

    /*
      var filteredChildren = data.filter(function(x){
        if(testTwo === parentOne ||  testTwo === parentTwo){
          return true;
        }
        else{
          return false;
        }
      });
    }*/
    
  


 /* data.map(function(x){
    if(filteredChildren === MostWanted.parentOne || filteredChildren === MostWanted.parentTwo){
      var childOneName = x.firstName + ' ' + x.lastName;
      alertOfDescendants += childOneName + '\n';
    }
  
      if(filteredChildren.length > 0){
      displayDescendants()
      }
      else{
        return;
      }
  });
    //return MostWanted________.firstName + ' ' + MostWanted__________.lastName;

//.join("\n"));
  alert(alertOfDescendants);
  mainMenu(MostWanted.currentPerson);
}
/*
function displayPeople(people){
  alert(people.map(function(person){
    return MostWanted________.firstName + ' ' + MostWanted__________.lastName;

  }).join("\n"));
}*/

function displayFamily(person){
//CHILDREN

var stringOfDescendants = 'CHILDREN:' + '\n'; 
  data.map(function(x){
    if(x.parents.length === 2){
      var parentOne = x.parents[0];
      var parentTwo = x.parents[1];
    }

    else if(x.parents.length === 1){
      var parentOne = x.parents[0];
    }

    if(person.id === parentOne){
      var childOneName = x.firstName + ' ' + x.lastName;
      stringOfDescendants += childOneName + '\n';
    }
    if(person.id === parentTwo){
      var childTwoName = x.firstName + ' ' + x.lastName;
      stringOfDescendants += childTwoName + '\n';
    }
  });
//SPOUSE


var holdCurrentSpouse = 'CURRENT SPOUSE:' + '\n';
  data.map(function(x){
    if(person.currentSpouse == x.id){
      var spouseName = x.firstName + ' ' + x.lastName + '\n';
      holdCurrentSpouse += spouseName;
    } 
  });
//SIBLINGS
var parentOne = person.parents[0];
var parentTwo = person.parents[1];
  if(!parentOne){
      parentOne = 'noParents';
    }
  if(!parentTwo){
    parentTwo = 'noParents';
  }

  var childrenFromParents = [];
  childrenFromParents = data.filter(x => x.parents[0] === parentOne || x.parents[1] === parentOne || x.parents[0] === parentTwo || x.parents[1] === parentTwo);

  var siblingsFromParents
  siblingsFromParents = childrenFromParents.filter(x => x !== MostWanted.currentPerson);

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
  var person = MostWanted.currentPerson;
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

function chooseMultipleTraits(){
  var multipleTraits = prompt('would you like to refine your search by adding another trait? \n 1 = yes \n 2 = no');
    switch (multipleTraits){
      case '1':
        searchByTrait();
        break;

      case '2':
        MostWanted.data = data;
        app();
        break;

      default:
        alert('sorry we did not understand please try entring 1 or 2.');
        chooseMultipleTraits();
        break;
    }
}

function searchByTrait(){
	var trait = prompt("What do you know of the person?\n 1 = Age \n 2 = Eye color\n 3 = Height\n 4 = Weight\n 5 = Occupation");

	switch (trait){
    case '1':
      var userAge = parseInt(prompt("Enter the person's age."));
      databaseAge();

      var ageResult = MostWanted.data.filter(x => x.age == userAge);
      MostWanted.searchByAge = ageResult;
      MostWanted.data = MostWanted.searchByAge;

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
      chooseMultipleTraits();

    break;

		case '2':
			var eyeColor = prompt("Enter color of the person's eyes\n black\n blue\n brown\n green\n hazel");
			var eyeResult = MostWanted.data.filter(x => x.eyeColor === eyeColor);
			MostWanted.searchByEyes = eyeResult;
      MostWanted.data = MostWanted.searchByEyes; 
     
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
      chooseMultipleTraits();
      //for (var i = 0; i < MostWanted.searchByEyes.length; i++) {

      //futureAlert += MostWanted.searchByEyes[i]

    break;
		case '3':
			var heightEntered = prompt("Enter the person's height (Number only)");
			var heightResult = MostWanted.data.filter(x => x.height == heightEntered);
			MostWanted.searchByHeight = heightResult;
      MostWanted.data = MostWanted.searchByHeight;

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
      chooseMultipleTraits();

		break;
		case '4':
			var weightEntered = prompt("Enter the person's weight (Number only)");
			var weightResult = MostWanted.data.filter(x => x.weight == weightEntered);
			MostWanted.searchByWeight = weightResult;
      MostWanted.data = MostWanted.searchByHeight;

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
      chooseMultipleTraits();


		break;
		case '5':
			var employment = prompt("Enter the person's occupation");
			var employmentResult = MostWanted.data.filter(x => x.occupation === employment);
			MostWanted.searchByOccupation = employmentResult;
      MostWanted.data = MostWanted.searchByOccupation;

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
      chooseMultipleTraits();

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

