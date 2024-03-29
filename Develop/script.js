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
var eventAlert = document.querySelector('.event-alert');
var currentDayContainer = document.getElementById('currentDay');
var mainContainer = document.querySelector('.container');

//Captures Save Buttons After Page Load
window.onload = function saveButtons() {
    var saveButton = document.querySelector('.saveBtn');
    return saveButton;
}

//Alert interval function
function setAlert() {
    console.log('test');
    eventAlert.innerHTML = 'Event has been saved to local storage';
}

function clearAlert() {
    eventAlert.innerHTML = "";
}


//Capture Current Day
var currentDay = moment().format('dddd') + ', ' + moment().format('MMMM') + ' ' + moment().format('Do');

// Display Current Day
currentDayContainer.append(currentDay);




//Determine Time of Day
function timeOfDay() {
    var workDayHours = [{ hr: 9, state: '' }, { hr: 10, state: '' }, { hr: 11, state: '' }, { hr: 12, state: '' }, { hr: 13, state: '' }, { hr: 14, state: '' }, { hr: 15, state: '' }, { hr: 16, state: '' }, { hr: 17, state: '' }];
    var currentHour = moment().format('H');
    for (var i in workDayHours) {
        //console.log(currentHour)
        if (workDayHours[i].hr < currentHour) {
            workDayHours[i].state = 'past';


        } else if (workDayHours[i].hr == currentHour) {

            workDayHours[i].state = 'present';
        } else {
            workDayHours[i].state = 'future';
        }
    }
    //console.log(workDayHours)
    return workDayHours;

}

//Create Time Block Rows
function createTimeBlockRow() {

    var workHours = timeOfDay();

    for (var i = 0; i < workHours.length; i++) {
        var state = workHours[i].state;

        //Coverts From Military Time
        var hr = moment(workHours[i].hr, 'hh').format('h a');


        //Assigning Element Creation as Variables
        var tbRow = $('<div>').addClass(`${state} row time-block`);
        var tbHour = $('<div>').addClass('hour col-md-1').text(`${hr}`);
        var tbText = $('<textarea>').addClass(`textarea col-md-10`);
        var tbSave = $('<button>').addClass('saveBtn col-md-1').attr('id', `hr-${hr}`);
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
window.onload = function saveButtons() {
    var saveButton = $('.saveBtn');
    saveButton.on('click', function () {
        var timeHr = $(this).siblings(`.hour`).text()
        localStorage.setItem(timeHr, $(this).prev(`textarea`).val())
        setAlert();
        var timesRun = 0;
        var interval = setInterval(function () {
            timesRun += 1;
            if (timesRun === 3) {
                clearInterval(interval);
                clearAlert();
            }
        }, 2000);

    });
}

// Build Time Blocks on Page Load*/
createTimeBlockRow();