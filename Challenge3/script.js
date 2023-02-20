// There are two gymnastics teams, Dolphins and Koalas. They compete against each 
// other 3 times. The winner with the highest average score wins a trophy.
// Your tasks:
// 1. Calculate the average score for each team, using the test data below
// 2. Compare the team's average scores to determine the winner of the competition,
// and print it to the console. Don't forget that there can be a draw, so test for that
// as well (draw means they have the same average score)
// 3. Bonus 1: Include a requirement for a minimum score of 100. With this rule, a
// team only wins if it has a higher score than the other team, and the same time a
// score of at least 100 points. Hint: Use a logical operator to test for minimum
// score, as well as multiple else-if blocks �
// 4. Bonus 2: Minimum score also applies to a draw! So a draw only happens when
// both teams have the same score and both have a score greater or equal 100
// points. Otherwise, no team wins the trophy
// Test data:
// Data 1: Dolphins score 96, 108 and 89. Koalas score 88, 91 and 110
// Data Bonus 1: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 123
// Data Bonus 2: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 106
const dolphinsTime1 = Number(prompt(`Enter the first half result for Dophins`));
const dolphinsTime2 = Number(prompt(`Enter the second half result for Dophins`));
const dolphinsTime3 = Number(prompt(`Enter the third half result for Dophins`));
const koalasTime1 = Number(prompt(`Enter the first half result for Koalas`));
const koalasTime2 = Number(prompt(`Enter the srcond half result for Koalas`));
const koalasTime3 = Number(prompt(`Enter the third half result for Koalas`));
const scoreDophins = dolphinsTime1 + dolphinsTime2 + dolphinsTime3;
const averageDophins = scoreDophins / 3;
const scoreKoalas = koalasTime1 + koalasTime2 + koalasTime3;
const averageKoalas = scoreKoalas / 3;
const equivalent = (averageDophins === averageKoalas);
console.log(`The score of the teams is equal: ${equivalent}`);
if (averageDophins > averageKoalas && scoreDophins >= 100) {
    console.log(`Dolphins team won`)
}
else if (averageDophins < averageKoalas && scoreKoalas >= 100) {
    console.log(`Koalas team won`)
}

else if (equivalent && scoreDophins >= 100) {
    console.log(`A draw`)
}
else alert(`no one won because the score of each teams is less then 100`);