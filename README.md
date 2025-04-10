📘 Student Job Tracker
A full-stack web app built to help students track their job applications effortlessly. Users can sign up, add job details (company, role, application status, etc.), update statuses, and filter their job list—all in a beautiful and responsive UI.

🚀 Live Demo
Frontend: [Vercel Link Here](https://student-job-tracker-virid.vercel.app/)

Backend: [Render API](https://intern-backend-friw.onrender.com)

📸 ![image](https://github.com/user-attachments/assets/f9124960-2dab-40f3-b6c2-0e5f19879fb6)

Signup	Dashboard
⚙️ Tech Stack
Frontend 🖥️
React (with Hooks)
React Router DOM
Axios
Custom CSS Modules
Deployed on Vercel

Backend 🛠️
Node.js
Express.js
MongoDB (MongoDB Atlas)
JWT for Auth
Deployed on Render

🧠 Features

✅ User Authentication
   Signup/Login
JWT Token-based Authentication
✅ Job Application Tracker
    Add job entries with fields: Company, Role, Status, Date, Link
View all applications in a beautiful UI
Filter by status or date
Update job status
Delete applications
✅ Protected Routes

📁 Project Structure
.
├── client
│   ├── public
│   └── src
│       ├── components
│       ├── pages
│       ├── App.js
│       ├── API.js
│       └── index.js
├── server
│   ├── controllers
│   ├── models
│   ├── routes
│   ├── middleware
│   └── server.js
🔐 Environment Variables

Create a .env file in server folders.
Server .env
env
PORT=5000
MONGO_URI=your-mongo-uri
JWT_SECRET=your-secret-key

🧪 Setup & Installation
Clone the repo

git clone https://github.com/your-username/student-job-tracker.git
cd student-job-tracker

Install Backend
cd server
npm install
npm run dev

Install Frontend
cd ../client
npm install
npm start

🛠️ API Endpoints (Sample)
Method	Endpoint	Description
POST	/api/auth/signup	Register new user
POST	/api/auth/login	Login existing user
GET	/api/jobs	Get user-specific jobs
POST	/api/jobs	Add a new job
PUT	/api/jobs/:id	Update job status
DELETE	/api/jobs/:id	Delete job

🧠 Future Improvements
✅ Add search functionality
✅ Export data to CSV
✅ Add notifications
✅ Edit full job details (not just status)
✅ Add light/dark theme switch

👨‍💻 Author
Made with 💖 by Danish Rizwan

