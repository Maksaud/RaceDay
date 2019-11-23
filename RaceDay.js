let raceNumber = Math.floor(Math.random() * 1000);

let early = false;
let age = 19;

if (age > 18 && early == true){
    raceNumber += 1000;
}

if (age > 18 && early == true){
    console.log(raceNumber + " will start at 9:30am");
} else if (age > 18 && early != true){
    console.log(raceNumber + " will start at 11:00am");
} else {console.log('please Check registration desk')}

if (age < 18){
    console.log(raceNumber = " will start at 12:30");
}