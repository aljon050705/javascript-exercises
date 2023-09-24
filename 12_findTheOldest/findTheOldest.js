const findTheOldest = function(people) {
    let oldest = "";
    let oldestage = 0;
    /*list = list.map((person) => {
        let age = 0;
        if (person.yearOfDeath) age = person.yearOfDeath - person.yearOfBirth;
        else age = 2023 - person.yearOfBirth;

        if (age > oldest) oldest = person.name;
        return {[person.name]: age};
    });
    */
    people.forEach(person => {
        let age = 0;
        if (person.yearOfDeath) age = person.yearOfDeath - person.yearOfBirth;
        else age = 2023 - person.yearOfBirth;

        if (age > oldestage) {
            oldest = person;
            oldestage = age;
        }
    });

    return oldest;
};


/*const people = [
    {
      name: "Carly",
      yearOfBirth: 1942,
      yearOfDeath: 1970,
    },
    {
      name: "Ray",
      yearOfBirth: 1962,
      yearOfDeath: 2011,
    },
    {
      name: "Jane",
      yearOfBirth: 1912,
      yearOfDeath: 1941,
    },
  ]

console.log(findTheOldest(people))
*/


// Do not edit below this line
module.exports = findTheOldest;
