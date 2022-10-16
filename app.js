var numbers = [101, 102, 55, 12, 1101];
var winner = numbers[0];
for(var i = 1; i < numbers.length; i++){
    if(numbers[i] > winner){
        winner = numbers[i];
    }
}
console.log(winner);
