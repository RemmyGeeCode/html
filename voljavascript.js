// objec{key: value}
// const person ={name: "shola"}
// console.log(person.name)


// //Array
// const myArray= [{name:"shola"}, "obi", 29, true, undefined, null, [{age:22}]]
// console.log(Array.isArray(myArray));
// console.log(typeof(myArray));
// const greet = "hello";
// console.log(typeof(greet));
// const number = 20;
// console.log(typeof(number));
// console.log(myArray.length);
// console.log(myArray[1]);

const myData = {
    name: "John",
    age: 21,
    cars:[
        {name: "ford", models: ["fiesta", "focus","mustang"]},
        {name:"BMW",models:["320","X3", "X5"]},
        {name:"Tesla", models:["500","panda"]}
    ]
}
// console.log(myData.name);
// console.log(myData.age);
// console.log(myData.cars);

myData.cars.forEach(e=>{
    // console.log(e.name);
})
myData.cars.forEach(e=>{
    e.models.forEach(e=>{
        // console.log(e);
    })
})
myData.cars.forEach(e=>{
    console.log(e.models[1]);
})