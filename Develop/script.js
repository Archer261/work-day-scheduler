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
    var workDayHours = [{ hr: 9, state: '' }, { hr: 10, state: '' }, { hr: 11, state: '' }, { hr: 12, state: '' }, { hr: 13, state: '' }, { hr: 14, state: '' }, { hr: 15, state: '' }, { hr: 16, state: '' }, { hr: 17, state: '' }];
    var currentHour = moment().format('H');
    for (var i in workDayHours) {
        if (workDayHours[i].hr < currentHour) {
            workDayHours[i].state = 'past'

        } else if (workDayHours[i].hr = currentHour) {
            workDayHours[i].state = 'present'
        } else {
            workDayHours[i].state = 'future'
        }
    }
    return workDayHours;
}


//Create Time Block Rows
function createTimeBlockRow() {

    var workHours = timeOfDay();


    //console.log(workHours);

    for (var i = 0; i < workHours.length; i++) {
        var state = workHours[i].state;

        //Coverts From Military Time
        var hr = moment(workHours[i].hr, 'hh').format('h a');


        //Assigning Element Creation as Variables
        var tbRow = $('<div>').addClass(`row time-block ${state}`);
        var tbHour = $('<div>').addClass('hour col-md-1').text(`${hr}`);
        var tbText = $('<textarea>').addClass(`textarea col-md-10`);
        var tbSave = $('<button>').addClass('saveBtn col-md-1');
        var tbSaveIcon = $('<i>').addClass('material-icons').text('save');

        // Creating the HTML DOM Vertical
        tbRow.appendTo(mainContainer);
        tbHour.appendTo(tbRow);
        tbText.appendTo(tbRow);
        tbSave.appendTo(tbRow);
        tbSaveIcon.appendTo(tbSave);


    }

}

// Add Time Block Input Values to Local Storage
/*$('.saveBtn').on('click', function (event) {
    $(this).siblings()
})

// Build Time Blocks on Page Load*/
createTimeBlockRow();