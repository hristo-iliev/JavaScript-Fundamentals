function main() {
    var arr = (document.getElementById("array").value.trim()).split(" ");
    var num = document.getElementById("number").value;

    arr.remove(num);
    document.getElementById("result").innerHTML = arr.join(", ");
}
Array.prototype.remove = function (number) {
    for (var i = 0; i < this.length; i++) {
        if (this[i] === number) {
            this.splice(i, 1);
        }
    }
};
