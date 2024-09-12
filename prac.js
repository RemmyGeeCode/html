const myData = {
    name: "John",
    age: 21,
    cars:[
        {name: "ford", models: ["fiesta", "focus","mustang"]},
        {name:"BMW",models:["320","X3", "X5"]},
        {name:"Tesla", models:["500","panda"]}
    ]
}

myData.cars.forEach(e=>{
    // console.log(e.models);
})
myData.cars.forEach(e=>{
    e.models.forEach(e=>{
        console.log(e);
    })
})