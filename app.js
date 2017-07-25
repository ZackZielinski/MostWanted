var MostWanted = {};

function app(person){
  var searchType = promptFor("Do you know the name of the person you are looking for? Enter 'yes' or 'no'", yesNo).toLowerCase();
  switch(searchType){
    case 'yes':
      MostWanted.currentPerson = searchByName();
    break;
    case 'no':
<<<<<<< HEAD
      MostWanted.searchTrait = searchByTrait();
=======
    // TODO: search by traits



>>>>>>> cbf759eb9f221415969ee0c7f7b6e38f8d180eb9
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
  
<<<<<<< HEAD

    var results = data.filter(x => x.firstName === firstName && x.lastName === lastName);
    return results[0];

=======
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
>>>>>>> cbf759eb9f221415969ee0c7f7b6e38f8d180eb9
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

var results = data.filter(x => x.firstName === firstName && x.lastName === lastName);
   return results[0];