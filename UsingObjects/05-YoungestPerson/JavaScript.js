function main() {
    var persons = [
  { firstname : 'Gosho', lastname: 'Petrov', age: 32 }, 
  { firstname: 'Bay', lastname: 'Ivan', age: 81 },
  { firstname: 'Minko', lastname: 'Berov', age: 32 },
  { firstname: 'Simona', lastname: 'Madamova', age: 21 },
  { firstname: 'Vanq', lastname: 'Konchina', age: 33 },
  { firstname: 'Sasho', lastname: 'Lazarov', age: 41 },
  { firstname: 'Lesly', lastname: 'Jivkov', age: 12 },
  { firstname: 'Mimi', lastname: 'Nikolova', age: 58 }, ];
    
    printArrayOfPersons(persons);
    var youngestPerson = findYoungest(persons);
    console.log("The youngest person is:");
    console.log(youngestPerson.firstname + " " + youngestPerson.lastname + " AGE: " + youngestPerson.age);
}

function printArrayOfPersons(arr) {
    console.log("PERSONS");
    for (var person in arr) {
        console.log(arr[person].firstname + " " + arr[person].lastname + " AGE: " + arr[person].age);
    }
    console.log("");
}

function findYoungest(arr) {
    var youngest = arr[0];
    for (var i = 1; i < arr.length; i++) {
        if (arr[i].age < youngest.age) {
            youngest = arr[i];
        }
    }
    return youngest;
}
