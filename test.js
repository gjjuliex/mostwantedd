






// data[i] = data[i].push { "category": getAge(person.dob) }


// function displayPeople(people){
//     alert(people.map(function(person){
//       return person.firstName + " " + person.lastName;
//     }).join("\n"))};

// displayPeople(people);

// let newArray = data.map (function(el)  {
//     return el.firstName;
// })

//console.log (newArray.sort());

// let newArray = data.filter(function (el) {
//     if(el.weight <= 170) {
//       return true;
//     }
// })

// console.log (newArray);
// // var firstName = promptFor("What is the person's first name?", chars);


//=============================================================================
function addAgetoArray(people) {
    return people.map(function(person) {
	    person.push["Age: ", getAge(person.dob)]
    });
}

function calculateAge(year, month, day) {
	var currentDate = new Date();
	var currentYear = currentDate.getFullYear();
	var currentMonth = currentDate.getUTCMonth() + 1;
	var currentDay = currentDate.getUTCDate();
	// You need to treat the cases where the year, month or day hasn't arrived yet.
	var age = currentYear - year;
	if (currentMonth > month) {
		return age;
	} else {
		if (currentDay >= day) {
			return age;
		} else {
			age--;
			return age;
		}
	}
}

let age = 56;
data[0].push ("hello");
console.log (data[0]);

// let capture = addAgetoArray(data);
// console.log (capture[0]);


// let x =  getAge("3/17/1968");
// alert (x);


// alert(people.map(function(person){
//     return person.firstName + " " + person.lastName;
//   })


// let currentDate = new Date();
// let month = currentDate.getMonth() + 1;
// let year =  currentDate.getFullYear();
// let date =  currentDate.getDate();

// console.log (month);
// console.log (date);
// console.log (year);