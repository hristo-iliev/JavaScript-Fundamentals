function main() {
    var persons = [
  { firstname: 'Gosho', lastname: 'Petrov', age: 32 },
  { firstname: 'Bay', lastname: 'Ivan', age: 81 },
  { firstname: 'Minko', lastname: 'Berov', age: 32 },
  { firstname: 'Simona', lastname: 'Madamova', age: 21 },
  { firstname: 'Vanq', lastname: 'Konchina', age: 33 },
  { firstname: 'Sasho', lastname: 'Lazarov', age: 41 },
  { firstname: 'Lesly', lastname: 'Jivkov', age: 12 },
  { firstname: 'Mimi', lastname: 'Nikolova', age: 58 }, ];

    var goupedByFName = deepCopy(persons);
    var groupedByAge = deepCopy(persons);
    goupedByFName = group(goupedByFName, "FirstName");
    groupedByAge = group(persons, "Age");

    printArrayOfPersons(persons, "PERSONS");
    printArrayOfPersons(goupedByFName, "GROUPED BY FIRST NAME");
    printArrayOfPersons(groupedByAge, "GROUPED BY AGE");
}

function printArrayOfPersons(arr, string) {
    console.log(string);
    for (var person in arr) {
        console.log(arr[person].firstname + " " + arr[person].lastname + " AGE: " + arr[person].age);
    }
    console.log("");
}

function group(arr, criterion) {
    var groupBy = criterion.toLowerCase();

    if (groupBy == "age") {
        return arr.sort(function (a, b) {
            return a.age - b.age;
        });
    } else {
        return arr.sort(function (a, b) {
            return a.firstname == b.firstname ? 0 :
                   a.firstname > b.firstname ? 1 : -1;
        });
    }
}

function deepCopy(arr) {
    return arr.slice(0);
}
