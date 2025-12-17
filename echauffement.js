a = ["foo", "bar"][Math.random() < 0.5 ? 0 : 1]
b = [1, 2][Math.random() < 0.5 ? 0 : 1]
c = [{ path: "/foo" }, { path: "/bar" }][Math.random() < 0.5 ? 0 : 1]

console.log(a)
console.log(b)
console.log(c)

function randomChoice(array) {
    return array[Math.floor(Math.random())];
}

a = randomChoice(["foo", "bar"]);
b = randomChoice([1, 2]);
c = randomChoice([{ path: "/foo" }, { path: "/bar" }]);

console.log(a)
console.log(b)
console.log(c)