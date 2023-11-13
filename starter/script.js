// Variable Declaration
var timeBlock = $(".time-block");
var currentDay = $("#currentDay");
//var currentHour = $(".hour")

var currentHour = document.querySelectorAll(".hour")

var eachCurrentHour 



// set current Day
var today = dayjs();
var currentToday = today.format('dddd, MMMM D[th]');
currentDay.text(currentToday);


var presentHour = today.format("h");
var presentHourInt = parseInt(presentHour)
console.log(presentHourInt);


//$(".time-block").css("background-color","red")
//console.log(timeBlock);

for (var i=0; i<timeBlock.length; i++) { 
    var eachTimeBlock = timeBlock[i] 
    for(var k=0; k<currentHour.length; k++){
        var currentHourValue = parseInt(currentHour[k].textContent)
        if (presentHourInt === currentHourValue){
            console.log(currentHour[k].textContent)
            $(eachTimeBlock).css("background-color","red")
            break;
        }
        
    }  
};

//for(var k=0; k<currentHour.length; k++)


// for (let index = 0; index < timeBlock.length; index++) {
//     const eachTimeBlock = timeBlock[index]
//     if (presentHour == 4){
//         $(eachTimeBlock).css("background-color","red")
//     }
    
// }


// for(var k=0; k<currentHour.length; k++){
//     if (currentHour[k].textContent == presentHourInt){
//         console.log(currentHour[k].textContent)
//     }
    
    //console.log( currentHour[k].textContent)
//}   





