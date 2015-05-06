'use strict';
var people = [
  {name: 'Ben', age: 33, gender: 'male'},
  {name: 'Ben', age: 22, gender: 'male'},
  {name: 'Kevin', age: 27, gender: 'male'},
  {name: 'Ben', age: 22, gender: 'male'},
  {name: 'Ben', age: 15, gender: 'male'},
  {name: 'Ben', age: 65, gender: 'male'},
  {name: 'Melissa', age: 32, gender: 'female'}
];


// simple for loop

var melissa;

for (var i = 0; i < people.length; i++) {
  var person = people[i];
  if(person.name === 'Melissa'){
    melissa = person;
    break;
  }
}

console.log(melissa);


// lodash find one 'name'

var ben = _.find(people, {name: 'Ben'});
console.log(ben);


//Loop: find all 'Ben\s'
var bens = [];
for (var i = 0; i < people.length; i++) {
    var person = people[i];
    if(person.name === 'Ben'){
        bens.push(person);
    }
}

console.log(bens);


var ben2 = _.findLast(people, function (person) {
  return person.name === 'Ben';
});
console.log(ben2);

var gender = _.find(people, function (person) {
  return person === 'male';
});


var allBens = _.filter(people, {name: 'Ben'});
console.log('All ', allBens);



var allMales = _.filter(people.gender, {name: 'male'});
console.log('Males ', allMales);
