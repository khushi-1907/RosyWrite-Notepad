## 🌸 RosyWrite Notepad
RosyWrite Notepad is a secure, minimal, and distraction-free web-based application for writing and managing your personal notes. Built with privacy in mind, it features authentication, JWT token protection, and a private user dashboard.

## 🔗 Live Demo: 
rosywrite-notepad.onrender.com

## 🛡️ Key Features
1. -✍️ Clean and responsive writing interface
2. -🔐 User authentication with JWT
-🔒 Notes are private to each logged-in user
-📄 Full CRUD (Create, Read, Update, Delete) for personal notes
-🚪 Secure Logout to end session
-💾 Autosave / persistent storage
-📱 Mobile responsive UI

## 🧭 How It Works
Sign up or log in
Access your personal dashboard
Create, edit, or delete your private notes
Securely log out when done
Each user’s notes are stored securely and are never visible to others.

🚀 Tech Stack
Layer	Tech
Frontend	EJS
Backend	Node.js, Express
Auth	JSON Web Tokens (JWT)
Database	MongoDB / Mongoose (or as implemented)
Deployment	Render.com

## 🏗️ Installation (Dev Setup)
# Clone the repository
```bash
git clone https://github.com/khushi-1907/RosyWrite-Notepad.git
cd RosyWrite-Notepad
```
# Install dependencies
```bash
npm install
```
# (Optional) Setup .env file with JWT_SECRET, DB_URI, etc.

# Start the server
```bash
npm start
```
Then open http://localhost:3000 in your browser.

# 🔐 Authentication
RosyWrite includes robust authentication features:
✅ JWT-based login system
✅ Secure sign-up and login forms
✅ Protected routes via middleware
✅ Encrypted token storage in browser
✅ Logout endpoint to invalidate session

Only logged-in users can view or edit their notes.

# 📝 Notes Dashboard
Once logged in, users can:
➕ Create notes
✏️ Edit existing ones
🗑️ Delete notes
📄 View saved notes, all scoped to the user
Your notes are always private, secure, and accessible only to you.

# ✨ Future Plans
🔄 Note versioning and history
🧠 AI-based note tagging and smart categorization
🌓 Light/Dark mode
🔔 Reminder emails or notifications
🤝 Contributing

Pull requests are welcome! To contribute:
Fork the repo
Create your feature branch: git checkout -b feature/awesome
Commit your changes: git commit -m 'Add awesome feature'
Push to the branch: git push origin feature/awesome
Open a PR

# 👩‍💻 Author
Ruchi Kumari
🔗 GitHub: @khushi-1907
📧 Email: 2320369.cse.coe@cgc.edu.in

# 📄 License
Licensed under the MIT License.
