function main() {
    var Human = {
        firstName: "Ceko",
        lastName: "Minev",
        toString: function () { return this.firstName + " " + this.lastName; }
    };
    console.log("Human: Ceko Minev -> " + Human.toString());
    var pesho = Human;
    pesho.firstName = "Misho";

    var smesho = makeDeepCopy(Human);
    smesho.firstName = "Smesho";

    console.log("Pesho copied Human and changed 'First Name' to Misho");
    console.log("Pesho: Misho -> " + pesho.toString());
    console.log("Human also changed:");
    console.log("Human: Ceko Minev ->" + Human.toString());
    console.log("Smesho deep copied Human and changed 'First Name' to Smesho");
    console.log("Smesho: Smesho -> " + smesho.toString());
    console.log("Human isn't changed");
    console.log("Human: Misho Minev -> " + Human.toString());

}

function makeDeepCopy(obj) {
    if (null === obj || "object" != typeof obj) {
        return obj;
    }
    var copy = obj.constructor();
    for (var attr in obj) {
        if (obj.hasOwnProperty(attr)) {
            copy[attr] = obj[attr];
        }
    }
    return copy;
}

main();