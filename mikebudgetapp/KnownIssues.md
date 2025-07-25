Known Issues: 

A) My steps are: On the frontend, when we call createBudgetForUser() inside of budget component, save that budget id using a budget service session (similar to user service session). After it's saved, inject the new budget session service inside export budget, and call getBudgetByItsId() on the backend, to then extract column and entry information from it. From there, calculate the optimal budget allocation for each category total based on the user's salary, compare that to the actual budget allocation, then return the % difference off from the actual that the user was. You can use thresholds to indicate if the percent off from ideal is within a good or bad range. Do that for all months combined. At the bottom of that section, display a venn diagram that can be exported to pdf. Chart is created using Chart.js.

B) Separate CSS concerns - Angular supports multi-css files impacting a single HTML file. Test login and submit budget route to make sure it works in reality. Then re enable security by deleting that security config file.

C) If I have the time, add in ViewBudget implementation.

D) Since we can track logged in status using user session service, inject it into the nav bar, and hide sign up & log in buttons if the user is already logged in. 

E) See if there's a way to, where if the user is not logged in and both buttons are visible, change the CSS of the Nav Bar Slogan.
