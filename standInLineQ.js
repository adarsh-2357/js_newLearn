function nextInLine(arr,item){
    arr.push(item);
    return item;
}
var testArr=[1,2,3,4,5,6];
console.log("Before: "+JSON.stringify(testArr));
console.log(nextInLine(testArr,7));
console.log("After : "+JSON.stringify(testArr));//insert ele in the end of the array
//JSON.stringify used to convert the array to print 