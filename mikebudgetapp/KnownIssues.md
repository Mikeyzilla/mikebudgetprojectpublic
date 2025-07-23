Known Issues: 

A) Make sure that the budget submission button only works if the user has entered a value in at least one category entry. 

B) Once the budget is submitted, not only add it to the list of budgets the user has, but lead the user to a page that will display a budget chart that can be exported to pdf. Chart is created using Chart.js. Also, grab important info from the user submission ("You're spending too much / too little here!", "On January 3rd, you spent 300$ on UberEats! Instead..."), things of that nature.

C) In the specific budget entries inside Create-Budget, validate user input before submitting. 

D) Towards the end of the project, separate CSS concerns - Angular supports multi-css files impacting a single HTML file. Test login route to make sure it works in reality. Then re enable security by deleting that security config file.
