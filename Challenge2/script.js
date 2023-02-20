const massMark = 78;
const heightMark = 1.69;
const massJohn = 92;
const heightJohn = 1.95;
const markBmi = massMark / (heightMark ** 2);
const johnBmi = massJohn / (heightJohn ** 2);
console.log("BMI for Mark = ", markBmi, " ", "BMI for John = ", johnBmi);
if (markBmi > johnBmi) {
    console.log(`Mark's BMI is higher than John's!`)
} else {
    console.log(`John's BMI is higher than Mark's!`)
}
