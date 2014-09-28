function main() {
    var persons = [
        { name: "Petar", age: 14 },
        { name: "Mladen", age: 44 },
        { name: "Genka", age: 18 },
        { name: "Sifona", age: 39 },
        { name: "Marto", age: 50 },
        { name: "Lalka", age: 34 },
        { name: "Misha", age: 41 },
        { name: "Tasho", age: 15 },
        { name: "Petiu", age: 21 },
    ];

    var tmpl = document.getElementById("list-item").innerHTML;
    var peopleList = generateList(persons, tmpl);
    document.getElementById("result").innerHTML = peopleList;
}

function generateList(people, template) {
    var result = "<ul>";
    for (var i = 0; i < people.length; i++) {
        result += template.replace("<strong>-{name}-", "<li><strong> " + people[i].name);
        result = result.replace("-{age}-</span>", people[i].age + "</span></li>");
    }
    return result += "</ul>";
}