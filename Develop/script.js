/* GIVEN I am using a daily planner to create a schedule
WHEN I open the planner
THEN the current day is displayed at the top of the calendar
WHEN I scroll down
THEN I am presented with time blocks for standard business hours
WHEN I view the time blocks for that day
THEN each time block is color-coded to indicate whether it is in the past, present, or future
WHEN I click into a time block
THEN I can enter an event
WHEN I click the save button for that time block
THEN the text for that event is saved in local storage
WHEN I refresh the page
THEN the saved events persist */


//HTML Variables
var currentDayContainer = document.getElementById('currentDay');
var mainContainer = document.querySelector('.container');



//Capture Current Day
var currentDay = moment().format('dddd') + ', ' + moment().format('MMMM') + ' ' + moment().format('Do');

// Display Current Day
currentDayContainer.append(currentDay);




//Determine Time of Day
function timeOfDay() {

}



//Create Time Block Rows
function createTimeBlockRow() {


    var tbRow = $('<div>').addClass('row time-block');
    var tbHour = $('<div>').addClass('hour col-md-1').text('3');
    var tbText = $('<textarea>').addClass('textarea past col-md-10');
    var tbSave = $('<button>').addClass('saveBtn col-md-1');
    var tbSaveIcon = $('<i>').addClass('material-icons').text('save');


    tbRow.appendTo(mainContainer);
    tbHour.appendTo(tbRow);
    tbText.appendTo(tbRow);
    tbSave.appendTo(tbRow);
    tbSaveIcon.appendTo(tbSave);



}












//Generate Time Blocks
function createTimeBlocks() {
    for (var i = 0; i < 10; i++) {
        createTimeBlockRow();
    }
}

// Build Time Blocks on Page Load
createTimeBlocks();