// const cars = ["Saab", "Volvo", "BMW"];
// document.getElementById("demo").innerHTML = cars;
// const fruits = ["Apple", "Banana", "Mango"];
// console.log(fruits);
// document.getElementById("demo2").innerHTML = fruits;
// console.log(fruits.toString());

//............No we are going to work on nested arrays

// let arr = [
//   {
//     nameOfstudents: ["haseeb", "hamza", "aqib", "Ali"],
//     depOfstudents: ["cs", "IT", "medical"],
//     marks: ["4.5", "4", "3"],
//   },
// ];

// for (let i = 0; i < arr.length; i++) {
//   console.log(arr[i].depOfstudents);
// }

//....2nd
// let arr2 = [
//   {
//     nameOfstudents: ["haseeb", "hamza", "aqib", "Ali"],
//     depOfstudents: ["cs", "IT", "medical"],
//     marks: ["4.5", "4", "3"],
//   },
//   {
//     headOFcs: " Mehmood",
//     headOFit: " akram",
//     headOFmedical: " ryaz",
//   },
// ];

// for (let i = 0; i < arr2.length; i++) {
//   if (arr2[i].nameOfstudents) {
//     // check karo ke property exist karti hai ya nahi
//     for (let j = 0; j < arr2[i].nameOfstudents.length; j++) {
//       console.log(arr2[i].nameOfstudents[j]);
//     }
//   }
// }

//.................getting data of of object component using map method
// arr2.map((obj) => {
//   if (obj.depOfstudents) {
//     obj.depOfstudents.map((name) => {
//       console.log(name);
//     });
//   }
// });

// arr2.map((item) => console.log(item));

/////////////////// 26 feb work on array and object again for better understanding
let users = [
  {
    names: [
      {
        namez: "zong",
        id: "2",
      },
    ],
    nameOfstudents: ["haseeb", "hamza", "aqib", "Ali"],
    depOfstudents: ["cs", "IT", "medical"],
    marks: ["4.5", "4", "3"],
  },
  {
    headOFcs: " Mehmood",
    headOFit: " akram",
    headOFmedical: " ryaz",
  },
];
// Note : jb bhi hum nay kisi array mai say data lena ha to hum loop ka use kray gay or agr array k andr
// array majood ho tab bi loop k andr loop lgaiy k inner Element ko get krnay k lyay

for (let i = 0; i <= users.length; i++) {
  console.log(users[i].names);
}
