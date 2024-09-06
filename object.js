var testObj={
    "hatColor":"brown",
    "shoeBrand":"nike",
    "shirt":"jersey",
};

function checkObj(checkProp){
    if (testObj.hasOwnProperty(checkProp)) return testObj[checkProp];
    else return "Not Found";

}
console.log(checkObj("sh"));