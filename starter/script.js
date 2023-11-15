// Variable Declaration
var timeBlock = $(".time-block");
var currentDay = $("#currentDay");
var currentHour = $(".hour")


// if ($(timeBlock).attr("id") == 10){
//     console.log("yes")
// }
// else{
//     console.log("no")
// }

// console.log($(timeBlock.attr("id")))








// set current Day
var today = dayjs();
var currentToday = today.format('dddd, MMMM D[th]');

var presentHour = today.hour();


// console.log(timeBlock[0])

for (let index = 0; index < timeBlock.length; index++) {
    var elements = $(timeBlock[index]).attr("id");
    var elementsInt = parseInt(elements)
    //console.log(elements)
    //console.log(typeof(elementsInt))
    if (elementsInt == presentHour){
       $(timeBlock[index]).addClass("present")
    }
    
};





// 1. TODO: add the current date to page when it loads.
currentDay.text(currentToday);
// console.log(typeof(presentHour))
// 2. TODO: using logic, figure out how to add the classes of past, present or future to the time block depending on the time of the day

// 3. TODO: when the saveBtn is clicked we need to save the content of the textarea into localStorage. 
$('.saveBtn').on('click', function(e){
    // TODO: capture the user input from the textarea
var key = $(e.target).parent().attr('id')
var value = $(e.target).siblings('textarea').val()



console.log(key);
    // store into localStorage
     localStorage.setItem(key, value)
})

// 4. TODO: make sure the data that is stored in localStorage presists on the page. 
