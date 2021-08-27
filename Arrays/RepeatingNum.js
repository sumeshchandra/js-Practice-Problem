let RepeatedNum = new Array();
for (i = 1; i < 100; i++) {
    if (i % 11 == 0)
    RepeatedNum.push(i);
}
console.log("Same two digit numbers are : " + RepeatedNum.toString());