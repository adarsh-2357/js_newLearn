/*function randomShit(){
    return Math.random();//random numbers between zero and one 
}
console.log(randomShit());
function some(){
    return Math.floor(Math.random()*20);
}
console.log(some());*/
function randomNum(min,max){
    return Math.floor(Math.random()*(max-min+1))+min;
}
console.log(randomNum(1,9));