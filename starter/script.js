// Variable Declaration
var timeBlock = $(".time-block");
var currentDay = $("#currentDay");

// set current Day
var today = dayjs();
var currentToday = today.format('dddd, MMMM D[th]');
currentDay.text(currentToday)




console.log(today.format("h[AM]"))


$(".time-block").css("background-color","red")

console.log(timeBlock)
for (var i=0; i<timeBlock.length; i++) { 
    var eachTimeBlock = timeBlock[i] 
    
};






