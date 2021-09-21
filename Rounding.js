var scores = prompt("Please enter a set of numbers").split(",");

function average (array){
    let sum = 0;
    for (i = 0; i < array.length; i++){
    sum += parseInt(array[i]);
    }
    let avg = sum/array.length;
    let newAvg = Math.round(avg);
    console.log(newAvg);
}

average(scores);
