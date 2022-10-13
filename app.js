//variables
let year=prompt('Is this a leap year?');

//common year /4
if (year % 4) {
    alert('Common year');

//leap year /100    
} else if (year % 100) {
    alert('Leap year');

//common year /400
} else if (year % 400) {
    alert('Common Year');

//else leap year
} else {
    alert('Leap Year');
}

