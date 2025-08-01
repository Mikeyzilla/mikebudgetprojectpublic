💸 Budget App (In Progress)
This app was designed and developed by me as a way to learn a new tech stack from scratch — specifically: OracleDB, Angular, and Spring Boot.

🚀 Motivation
Before this project, I had zero experience with all three technologies. I approached the project by combining:

📺 YouTube tutorials — to gain a foundational understanding

🤖 AI assistance (like ChatGPT) — to clarify concepts and debug edge cases

Through this process of guided learning + experimentation, I can now:

Confidently build backends with Spring Boot

Understand Angular component structure and routing

Work with Oracle DB at a basic but functional level

🛠️ Current Status
This is a work in progress. The backend is built, but none of the routes that are used on the frontend are tested besides sign up. I’ve documented known issues in KnownIssues.md.

⚠️ Important Notes for Running the Project
The backend bypasses CORS via Spring Security config. This was necessary for local development due to unresolved CORS errors. If you want to run the app:

Either fix the CORS issue properly (preferred for prod)

Or temporarily use a bypass config (not recommended for prod)

You will need to set up an Oracle DB instance locally. (Oracle DB is required but not included in this repo.)

You will also need to include an application.properties - I deleted mine from the repo for security reasons.

🧩 Future Enhancements
Planned features (see KnownIssues.md):

Budget-to-PDF export

Fully functional budget submission system

Proper CORS handling between frontend and backend