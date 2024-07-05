//array access and information
var people = ["geofrey", "ian", "peter", "joan"];
console.log(people.includes("geofrey"));
if (people.includes("geofrey")) {
    console.log("this person exists in our records");

    console.log("he is no.", people.indexOf("geofrey"));
} else {
    console.log("not available in our records");
}