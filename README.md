# work-day-scheduler

##Purpose:
AS AN employee with a busy schedule
I WANT to add important events to a daily planner
SO THAT I can manage my time effectively

1. WHEN I open the planner, THEN the current day is displayed at the top of the calendar
    
    **Solution:** Create JS variable for Current day time and month and add to "currentDay" p tag.

2. WHEN I scroll down, THEN I am presented with time blocks for standard business hours 
   
    **Solution:** Use JS function to generate a grid of rows on page load. Each row (div) uses Bootstrap to style

3. WHEN I view the time blocks for that day, THEN each time block is color-coded to indicate whether it is in the past, present, or future

    **Solution:** Create a function that checks the current hours using moment.js and matches that against a map of hours that will hold the CSS value of either past, present, or future. That value will then return itself within another function that assigns the CSS class value upon element generation.

4. WHEN I click into a time block, THEN I can enter an event

    **Solution:** A textarea element is generated upon page load using a function

5. WHEN I click the save button for that time block, THEN the text for that event is saved in local     storage

    **Solution:** 