// let temperatureAmplitude = function (tem1, tem2) {
//   let arr = tem1.concat(tem2);
//   let max = arr[0];
//   let min = arr[0];

//   for (let i = 0; i < arr.length; i++) {
//     if (typeof arr[i] !== "number") continue;
//     if (arr[i] > max) {
//       max = arr[i];
//     } else if (arr[i] < min) {
//       min = arr[i];
//     }
//   }
//   tempAmp = max - min;
//   console.log(arr);
//   console.log(max, min, tempAmp);
// };
// let tem1 = [102, 45, 67, 89, 990, 12, 45, -89, 90, 123];
// let tem2 = [23, 56, 100, 78, -67, 23, -120, 67, 90, 100];
// temperatureAmplitude(tem1, tem2);

// EXRCISE

// Given an array of forecasted maximum temperatures, the thermometer displays a
// string with the given temperatures. Example: [17, 21, 23] will print "... 17ºC in 1
// days ... 21ºC in 2 days ... 23ºC in 3 days ..."
// Your tasks:
// 1. Create a function 'printForecast' which takes in an array 'arr' and logs a
// string like the above to the console. Try it with both test datasets.
// 2. Use the problem-solving framework: Understand the problem and break it up
// into sub-problems!
// Test data:
// § Data 1: [17, 21, 23]
// § Data 2: [12, 5, -5, 0, 4]

let printForecast = function (arr) {
  let str = " ";
  for (let i = 0; i < arr.length; i++) {
    str = str + `... ${arr[i]}ºC in ${i + 1} days `;
  }
  console.log(`${str} ...`);
};
printForecast([17, 21, 23]);
printForecast([12, 5, -5, 0, 4]);
