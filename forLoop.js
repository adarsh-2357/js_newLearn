var evenNum=[0,2,4,6,8,10];
for(var i=0;i<evenNum.length;i++){
    if(i==evenNum.length-1){
        evenNum.pop();
    }
    else{
        evenNum[i]++;
    }
}
console.log(evenNum);