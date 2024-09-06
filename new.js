function abTest(a,b){
    if(a<0||b<0) return undefined;
    return Math.round(Math.sqrt(a)+Math.sqrt(b));
}
console.log(abTest(4,9));
