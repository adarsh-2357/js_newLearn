function multiplyAll(arr){
    var newArr=[];
    for(var i=0;i<arr.length;i++){
        var product=1;
        for(var j=0;j<arr[i].length;j++){
            product*=arr[i][j];
        }
        newArr.push(product)
    }
    return newArr;
}
var product=multiplyAll([[1,2],[3,4],[5,6,7]])
console.log(JSON.stringify(product));