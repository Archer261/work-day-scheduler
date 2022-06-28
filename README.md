# work-day-scheduler

##Purpose:
AS AN employee with a busy schedule
I WANT to add important events to a daily planner
SO THAT I can manage my time effectively

1. WHEN I open the planner, THEN the current day is displayed at the top of the calendar
    **Solution:** Create JS variable for Current day time and month and add to "currentDay" p tag.

2. WHEN I scroll down, THEN I am presented with time blocks for standard business hours 
    **Solution:** Use JS function to generate a grid of rows on page load. Each row (div) uses Bootstrap to style
