var MostWanted = {};

function app(person){
  var searchType = promptFor("Do you know the name of the person you are looking for? Enter 'yes' or 'no'", yesNo).toLowerCase();
  switch(searchType){
    case 'yes':
      MostWanted.currentPerson = searchByName();
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
function mainMenu(){

  /* Here we pass in the entire person object that we found in our search, as well as the entire original dataset of people. We need people in order to find descendants and other information that the user may want. */

  if(!MostWanted.currentPerson){
    alert("Could not find that individual.");
    return app(); // restart
  }

  var displayOption = prompt("Found " + MostWanted.currentPerson.firstName + " " + MostWanted.currentPerson.lastName + " . Do you want to know their 'info', 'family', or 'descendants'? Type the option you want or 'restart' or 'quit'");

  switch(displayOption){
    case "info":
     displayPerson();
    // TODO: get person's info
    break;
    case "family":
    // TODO: get person's family
    break;
    case "descendants":
    // TODO: get person's descendants
    break;
    case "restart":
    app(); // restart
    break;
    case "quit":
    return; // stop execution
    default:
    return mainMenu(person, people); // ask again
  }
}

function searchByName(){
  //IS CASE SESITIVE
  var firstName = promptFor("What is the person's first name?", chars);
  var lastName = promptFor("What is the person's last name?", chars);

    var results = data.filter(x => x.firstName === firstName && x.lastName === lastName);
    return results[0];

    /*if(){
      displayPerson(person, testOne);
    }*/

    var results = data.filter(x => x.firstName === firstName && x.lastName === lastName);
    MostWanted.currentPerson = results[0];
    mainMenu();
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


function displayPeople(people){
  alert(people.map(function(person){
    return MostWanted________.firstName + ' ' + MostWanted__________.lastName;
    
  }).join("\n"));
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
  mainMenu();
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

	var trait = prompt("What do you know of the person? Enter age, eye color, height, weight or occupation");

	switch (trait){

		case 'eye color':
			var eyeColor = prompt("Enter color of the person's eyes (black, blue, brown, green, or hazel)");
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
		case 'height':
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
		case 'weight':
			var weightEntered = prompt("Enter the person's weight");
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
		case 'occupation':
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
		case 'age':
			var birthDate = prompt("Enter the person's Date of Birth (Ex: 07/05/1978)")

			var ageResult = data.filter(x => x.dob === birthDate);
			MostWanted.searchByBirthDate = ageResult;
      findAge(MostWanted.searchByBirthDate);


		break;
		default:
		alert("Sorry, that is not a valid character trait. Please try again");
		app();
	}
} 
