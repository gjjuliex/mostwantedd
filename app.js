/*
Build all of your functions for displaying and gathering information below (GUI).
*/

// app is the function called to start the entire application


function appendAgeToData(people) {
	let newPeople = people; //Get the global people data
	//Map across each person's data
    newPeople.map(function(person) {
		//append age category to the newPeople data with the evalualated value using getAge(of that person's dob)
	    person.age = getAge(person.dob);
    })

	return newPeople;
}


function app(people){
  appendAgeToData(people);
  var searchType = promptFor("Do you know the name of the person you are looking for? Enter 'yes' or 'no'", yesNo).toLowerCase();
  switch(searchType) {
    case "yes":
      filteredPeople = searchByName(people);
      
    // TODO: search by name
      break;
    case 'no':
      searchByTraits(people);
      break;
    default:
      alert("Wrong! Please try again, following the instructions dummy. :)");
      app(people); // restart app
      break;
  }

  let foundPerson = filteredPeople[0];

  mainMenu(foundPerson, people);
}

function searchByName(people){
  var firstName = promptFor("What is the person's first name?", chars);
  var lastName = promptFor("What is the person's last name?", chars);

  let newArray = people.filter(function (el) {
    if(el.firstName == firstName && el.lastName == lastName) {
      return true;
    }
    // return true if full name matches database
  });
  return newArray;
  // IP -- TODO: find the person using the name they entered

}

// if one person is finally found, then return to main loop
function onePersonFound(filteredPeople,people) {
  if (filteredPeople.length == 1) {
    app(people);
  }
  searchByTraits(filteredPeople);
}

function searchByTraits(people) {
  let userSearchChoice = prompt("What would you like to search by? 'height', 'weight', 'eye color', 'gender', 'age', 'occupation'.");
  let filteredPeople;

  switch(userSearchChoice) {
    case "height":
      filteredPeople = searchByHeight(people);
      alert (displayPeople(filteredPeople));
      onePersonFound(filteredPeople,people);
      //searchByTraits(filteredPeople);
      break;
    case "weight":
      filteredPeople = searchByWeight(people);
      alert (displayPeople(filteredPeople));
      onePersonFound(filteredPeople,people);
      //searchByTraits(filteredPeople);
      break;
    case "eye color":
      filteredPeople = searchByEyeColor(people);
      alert (displayPeople(filteredPeople));
      onePersonFound(filteredPeople,people);
      //searchByTraits(filteredPeople);
      break;
    case "gender":
      filteredPeople = searchByGender(people);
      alert (displayPeople(filteredPeople));
      onePersonFound(filteredPeople,people);
      //searchByTraits(filteredPeople);
      break;
    case "age":
      filteredPeople = searchByAge(people);
      alert (displayPeople(filteredPeople));
      onePersonFound(filteredPeople,people);
      //searchByTraits(filteredPeople);
      break;
    case "occupation":
      filteredPeople = searchByOccupation(people);
      alert (displayPeople(filteredPeople));
      onePersonFound(filteredPeople,people);
      //searchByTraits(filteredPeople);
      break;  
    // so on and so forth
    default:
      alert("You entered an invalid search type! Please try again.");
      searchByTraits(people);
      break;
  }  

  let foundPerson = filteredPeople[0];

  mainMenu(foundPerson, people);

}

function searchByWeight(people) {
  let userInputWeight = prompt("How much does the person weigh?");

  let newArray = people.filter(function (el) {
    if(el.weight == userInputWeight) {
      return true;
    }
    // return true if el.weight matches userInputHeight
  });

  return newArray;
}

function searchByEyeColor(people) {
  let userInputEyeColor = prompt("What is the person's eye color?");

  let newArray = people.filter(function (el) {
    if(el.eyeColor == userInputEyeColor) {
      return true;
    }
    // return true if eye color matches person's
  });

  return newArray;
}

function searchByAge(people) {
  let userInputAge = prompt("What is the person's age?");

  let newArray = people.filter(function (el) {
    if(el.age == userInputAge) {
      return true;
    }
    // return true if a person's age matches
  });
  // alert(displayPeople(newArray));
  return newArray;
}

function searchByGender(people) {
  let userInputGender = prompt("What is the person's gender?");

  let newArray = people.filter(function (el) {
    if(el.gender == userInputGender) {
      return true;
    }
    // return true if a person's gender matches
  });
  // alert(displayPeople(newArray));
  return newArray;
}

function searchByOccupation(people) {
  let userInputOccupation = prompt("What is the person's Occupation?");

  let newArray = people.filter(function (el) {
    if(el.occupation == userInputOccupation) {
      return true;
    }
    // return true if a person's occupation matches
  });
  // alert(displayPeople(newArray));
  return newArray;
}

function searchByHeight(people) {
  let userInputHeight = prompt("What is the person's height?");

  let newArray = people.filter(function (el) {
    if(el.height == userInputHeight) {
      return true;
    }
    // return true if a person's height matches
  });
  // alert(displayPeople(newArray));
  return newArray;
}

// Function to search for family
function familySearch(person,people) {
  let newArray = people.filter(function (el) {
    if ((person.id == el.parents[0]) || (person.id == el.parents[1]) || (person.id == el.currentSpouse)) {
      return true;
    }
  });

  return newArray;
}

function parentSearch (person,people) {
    let newArray = people.filter(function (el) {
      if ((person.parents[0] == el.id) || (person.parents[1] == el.id)) {
        return true;
      }
    });
  return newArray;
}

function childrenSearch (person,people) {
  let newArray = people.filter(function (el) {
    if (person.id == el.parents[0] || person.id == el.parents[1]) {
      return true;
    }
  });
return newArray;
}

function siblingSearch (person,people) {
  let newArray = people.filter(function (el) {
    if ((person.id !== el.id) && (person.parents && person.parents.length) && ((person.parents[0] == el.parents[0]) || 
    (person.parents[1] == el.parents[1]) || (person.parents[0] == el.parents[1]) || (person.parents[1] == el.parents[0]))) {
      return true;
    }
  });
return newArray;
}

function spouseSearch (person,people) {
  let newArray = people.filter(function (el) {
    if (person.id == el.currentSpouse) {
      return true;
    }
  });
return newArray;
}

// A function to calculate age in years
function getAge(dateOfBirth) {
	var arrDateOfBirth = dateOfBirth.split("/"); //01/01/YYYY
	var dteYear = arrDateOfBirth[2]; //Year Index
	var dteMonth = arrDateOfBirth[0]; //Month Index
	var dteDay = arrDateOfBirth[1]; //Day Index
	var dteCurrentDate = new Date(); //Full Year Information from Current Computer
	var dteCurrentYear = dteCurrentDate.getFullYear(); //Extract Current Year from Current Computer
	var fixedCurrentMonth = dteCurrentDate.getMonth() + 1; //month is counted from 0, not 1. So add 1 to compensate.
	if (fixedCurrentMonth > dteMonth) {
		return dteCurrentYear - dteYear;
	} else {
		if (fixedCurrentMonth == dteMonth && dteCurrentDate.getDate() >= dteDay) {
			return dteCurrentYear - dteYear;
		} else {
			return dteCurrentYear - dteYear -1;
		}
	}
}

// Menu function to call once you find who you are looking for
function mainMenu(person, people){

  /* Here we pass in the entire person object that we found in our search, as well as the entire original dataset of people. 
  We need people in order to find descendants and other information that the user may want. */

  if(!person){
    alert("Could not find that individual.");
    return app(people); // restart
  }

  var displayOption = prompt("Found " + person.firstName + " " + person.lastName + " . Do you want to know their 'info', 'family', or 'descendants'? Type the option you want or 'restart' or 'quit'");

  switch(displayOption){
    case "info":
      displayPerson(person);
      // get person's info
    break;

    case "family":
      // let foundFamily = siblingSearch(person,people);
      // alert (displayPeople(foundFamily));
      let foundChildren = childrenSearch(person,people);
      let foundSpouse = spouseSearch(person,people);
      let foundParents = parentSearch(person,people);
      let foundSiblings = siblingSearch(person,people);
      alert ("Spouse: ");
      alert (displayPeople(foundSpouse));
      alert ("Parents: ");
      alert (displayPeople(foundParents));
      alert ("Siblings: ");
      alert (displayPeople(foundSiblings));
      alert ("Children: ");
      alert (displayPeople(foundChildren));
      // TODO: get person's family
    break;

    case "descendants":
      // TODO: get person's descendants
    break;

    case "restart":
    app(people); // restart
    break;

    case "quit":
    return; // stop execution
    default:
    return mainMenu(person, people); // ask again

  }

}

// alerts a list of people
function displayPeople(people){
  alert(people.map(function(person){
    return person.firstName + " " + person.lastName;
  }).join("\n"));
}

function displayPerson(person){
  // print all of the information about a person:
  // height, weight, age, name, occupation, eye color.
  var personInfo = "First Name: " + person.firstName + "\n";
  personInfo += "Last Name: " + person.lastName + "\n";
  personInfo += "Height: " + person.height + "\n";
  personInfo += "Weight: " + person.weight + "\n";
  personInfo += "Eye Color: " + person.eyeColor + "\n";
  personInfo += "Occupation: " + person.occupation + "\n";
  personInfo += "Age: " + person.age + "\n";
  personInfo += "BirthDate: " + person.dob + "\n";

  // TODO: finish getting the rest of the information to display
  alert(personInfo);
}

// function that prompts and validates user input
function promptFor(question, callback){
  do{
    var response = prompt(question).trim();
  } while(!response || !callback(response));
  return response;
}

// helper function to pass into promptFor to validate yes/no answers
function yesNo(input){
  return input.toLowerCase() == "yes" || input.toLowerCase() == "no";
}

// helper function to pass in as default promptFor validation
function chars(input){
  return true; // default validation only
}