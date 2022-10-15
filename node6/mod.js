console.log("This is module");
function average(arr){
    let sum = 0;
    arr.forEach(Element => {
        sum += Element;
    });
    return sum/arr.length;
}
module.exports = {
    avg: average,
    name: "Rahul",
    repo: "GitHub"
}