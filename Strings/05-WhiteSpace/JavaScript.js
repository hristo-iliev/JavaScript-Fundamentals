function main() {
    var text = (document.getElementById("text").value).split(" ");
    console.log(text.join("&nbsp;"));
    document.getElementById("result").innerHTML = "You can see the result in <b>The Console</b>. F12 --> <b>Inspect Element</b>";
}