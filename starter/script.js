// Variable Declaration
var timeBlock = $(".time-block");
var currentDay = $("#currentDay");
var currentHour = $(".hour")




// set current Day
var today = dayjs();
var currentToday = today.format('dddd, MMMM D[th]');

var presentHour = today.hour();

var presentHour2 = today.hour()
console.log(presentHour2)


// console.log(timeBlock[0])







// 1. TODO: add the current date to page when it loads.
currentDay.text(currentToday);
// console.log(typeof(presentHour))
// 2. TODO: using logic, figure out how to add the classes of past, present or future to the time block depending on the time of the day
for (let index = 0; index < timeBlock.length; index++) {
    var elements = $(timeBlock[index]).attr("id");
    var elementsInt = parseInt(elements)
    
    if (elementsInt === presentHour){
        
      $(timeBlock[index]).addClass("present")
    }
    else if (elementsInt > presentHour ){
        $(timeBlock[index]).addClass("future")
    }
    else{
        $(timeBlock[index]).addClass("past")
    }
  
};

// 3. TODO: when the saveBtn is clicked need to save the content of the textarea into localStorage. 

var content = JSON.parse(localStorage.getItem("taskItem")) || [];

$('.saveBtn').on('click', function(e){ 
    var key = $(e.target).parent().attr('id')
    var value = $(e.target).siblings('textarea').val()
    console.log(key + value)

    storeToLocalStorage(value);
    
    for (var i=0; i<content.length; i++){
        if($(e.target).siblings('textarea').val() == content[i]){
            $(e.target).siblings('textarea').val(content[i])
            break;
        }
    }
    
    
    //taskPersists(e);

    console.log(content)
    //$(e.target).siblings('textarea').val("value")
   // $(e.target).siblings('textarea').text(value);
});


function storeToLocalStorage(task){
    if (!content.includes(task)){
    content.push(task)
    localStorage.setItem("taskItem", JSON.stringify(content));
    }
};





// 4. TODO: make sure the data that is stored in localStorage persists on the page. 

// function taskPersists (e){
//     for (var i=0; i<content.length; i++){
//         if($(e.target).siblings('textarea').val() == content[i]){
//             $(e.target).siblings('textarea').val(content[i])
//         }
//     }
// }

function taskPersists() {
    for (var i = 0; i < content.length; i++) {
        var textareaElement = $("textarea").eq(i);
        textareaElement.val(content[i]);
    }
};

$(document).ready(function () {
    taskPersists();
});