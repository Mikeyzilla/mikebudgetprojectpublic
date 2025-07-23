Known Issues: 

A) In create-budget, the prerequisite form should be a part of the scrollable view - when right now, if you scroll down, the form stays fixed while the budget components are scrolled! Not only that, but when you scroll with the budget components, you cannot see the bottom of the new month's budget. You should be able to scroll all the way down.

B) Once the budget is submitted, not only add it to the list of budgets the user has, but lead the user to a page that will display a budget chart that can be exported to pdf. Chart is created using Chart.js. Also, grab important info from the user submission ("You're spending too much / too little here!", "On January 3rd, you spent 300$ on UberEats! Instead..."), things of that nature.

C) In the prerequisite form field, inside Create-Budget, if you enter in a single letter, it counts as valid. We need some way to make sure the user just doesn't enter in "Volleyball" or "T" for things like location. Also need to make sure income and dependents are converted into ints after the user types them in.

D) The user should also no longer see the prereq field and instead only see the budget component inside create-budget if they have filled out all fields validly. There should be a warning that for this specific budget, once you enter in the information you can't go back and change it, but otherwise it shouldn't show up after the valid info is put in.

D) Towards the end of the project, separate CSS concerns - Angular supports multi-css files impacting a single HTML file. Test login route to make sure it works in reality. Then re enable security by deleting that security config file.