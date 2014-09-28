function Solve(args) {
    var commands = new Array(parseInt(args[0]));
    var sections = [];

    var isSection = false;

    var g = 1;
    for (; g <= commands.length; g++) {
        var item = args[g].trim().split(":");

        commands[item[0]] = item[1];
    }

    g++;
    var Sname = "";
    var sec = "";
    while (args[g].indexOf("<") == -1 && isSection === false) {
        isSection = false;
        for (var p = 1; p < args[g].length; p++) {

            if (args[g].substr(p, 7) == "section") {
                isSection = true;
                p += 7;

                while (args[g][p] === " ") {
                    p++;
                }

                while (args[g][p] !== " ") {
                    Sname += args[g][p];
                    p++;
                }
                break;
            }
            break;
        }
        if (isSection) {
            g++;
            sec += args[g];
            g++;
            while (args[g].indexOf("}") === -1) {
                if (args[g + 1].indexOf("}") !== -1) {
                    sec += "    " + args[g];
                } else {
                    sec += "    " + args[g];
                }

                g++;
            }
            sections[Sname] = sec;
            Sname = "";
            sec = "";

        }

        g++;

    }
    //THE BEGINNING
    var result = "";
    var ifResult = "";
    var isIF = false;
    var forComand = "";
    var forResult = "";
    var isForeach = false;
    for (; g < args.length; g++) {
        if (isIF && (args[g].indexOf("}") !== -1)) {
            result += ifResult;
            ifResult = "";
            isIF = false;
            continue;
        }

        if (isForeach === true && (args[g].indexOf("}") !== -1)) {
            var arr = commands[forComand].split(",");
            var word = "";
            for (var v = forResult.indexOf("+") ; forResult[v] !== " "; v++) {
                word += forResult[v];
            }
            for (var b = 0; b < arr.length; b++) {
                result += forResult.replace(word, arr[b]);
            }
            forResult = "";
            forComand = "";
            isForeach = false;
            continue;
        }

        if (args[g].indexOf("@") == -1) {
            if (isIF) {
                ifResult += args[g];
            } else if (isForeach) {
                forResult += args[g];
            } else {
                result += args[g];
            }

        } else {
            var replace = "";
            //var AAA = args[g];
            for (var k = 0; k < args[g].length; k++) {

                if (args[g][k] == "@") {
                    if (args[g].substr(k, 14) == "@renderSection") {
                        k += 14;
                        while (args[g][k] != '"') {
                            k++;
                        }
                        k++;
                        while (args[g][k] != '"') {
                            replace += args[g][k];
                            k++;
                        }
                        // ERROR: MOJE DA IMA POVE4E OT 1 PYT
                        if (isIF) {
                            ifResult += args[g].replace('@renderSection("' + replace + '")', sections[replace]);
                            //ifResult = ifResult.replace("    ", "");

                        } else if (isForeach) {
                            forResult += args[g].replace('@renderSection("' + replace + '")', sections[replace]);
                            //forResult = forResult.replace("    ", "");
                        } else {
                            result += args[g].replace('@renderSection("' + replace + '")', sections[replace]);
                        }
                        break;

                    } else if (args[g].substr(k, 4) == "@if ") {
                        while (args[g][k] !== "(") {
                            k++;
                        }
                        k++;
                        while (args[g][k] !== ")") {
                            replace += args[g][k];
                            k++;
                        }
                        if (commands[replace] == "true") {
                            isIF = true;
                            break;
                        } else {
                            while (args[g].indexOf("}") == -1) {
                                g++;
                            }
                            break;
                        }

                    } else if (args[g].substr(k, 8) == "@foreach") {
                        isForeach = true;
                        k = args[g].indexOf("in ");
                        k += 3;
                        while (args[g][k] !== ")") {
                            forComand += args[g][k];
                            k++;
                        }
                        break;

                    } else if (args[g][k + 1] == "@") {
                        //ERROR: MOJE DA IMA DRUGI KOMANDI
                        if (isIF) {
                            ifResult += args[g].replace("@", "");
                            //ifResult = ifResult.replace("    ", "");
                        } else if (isForeach) {
                            forResult += args[g].replace("@", "");
                            //forResult = forResult.replace("    ", "");
                        } else {
                            result += args[g].replace("@", "");
                        }
                        break;

                    } else {
                        k++;
                        while (args[g][k] !== " " && args[g][k] !== "<" && k < args[g].length) {
                            replace += args[g][k];
                            k++;
                        }
                        // ERROR: MOJE DA IMA POVE4E OT 1 PYT
                        if (isIF) {
                            ifResult += args[g].replace("@" + replace, commands[replace]);
                            //ifResult = ifResult.replace("    ", "");
                        } else if (isForeach) {
                            if (commands[replace] === undefined) {
                                args[g] = args[g].replace("@", "+");
                                g--;
                                break;
                            } else {
                                forResult += args[g].replace("@" + replace, commands[replace]);
                                //forResult = forResult.replace("    ", "");
                            }

                        } else {
                            result += args[g].replace("@" + replace, commands[replace]);
                        }
                        break;
                    }
                }
            }
        }
    }
    return result;
}

function my2() {
    var arr = [
'0',
'15',
'<div>',
'    <p>',
'    @@if (pesho)',
'        @@escaped dude',
'    </p>',
'    <p>',
'    @@renderSection("pesho")',
'    </p>',
'    <p>',
'    @@foreach(var pesho in peshos)',
'        @@escaped in comment',
'    </p>',
'</div>',
    ];

    console.log(Solve(arr));
}