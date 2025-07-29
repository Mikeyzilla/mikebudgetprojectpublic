💸 Budget App (In Progress) This app was designed and developed by me as a way to learn a new tech stack from scratch — specifically: OracleDB, Angular, and Spring Boot.

🚀 Motivation Before this project, I had zero experience with all three technologies. I approached the project by combining:

📺 YouTube tutorials — to gain a foundational understanding

🤖 AI assistance - I did have help coming up with some of the syntax for this app using AI, but the idea is my own and when I did use AI, it was for help with the syntax - afterwards, I tested it to make sure it worked, rewrote the code to build muscle memory, and worked to fully understand what was going on.

Through this process of guided learning + experimentation, I can now:

Confidently build backends with Spring Boot

Understand Angular component structure and routing

Work with Oracle DB at a basic but functional level

🛠️ Current Status This is a work in progress. The backend is mostly functional, and the frontend is partially built. I’ve documented known gaps in KnownIssues.md.

⚠️ Important Notes for Running the Project The backend bypasses CORS via Spring Security config. This was necessary for local development due to unresolved CORS errors. If you want to run the app:

Either fix the CORS issue properly (preferred for prod)

Or temporarily use a bypass config (not recommended for prod)

You will need to set up an Oracle DB instance locally. (Oracle DB is required but not included in this repo.)

You will also need to include an application.properties and ojdbc11.jar - I deleted mine from the repo for security reasons.

🧩 Future Enhancements Planned features (see KnownIssues.md):

Frontend login and authentication

Budget-to-PDF export

Fully functional budget submission system

Proper CORS handling between frontend and backend
