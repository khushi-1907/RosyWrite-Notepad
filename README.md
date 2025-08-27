## 🌸 RosyWrite Notepad
RosyWrite Notepad is a secure, minimal, and distraction-free web-based application for writing and managing your personal notes. Built with privacy in mind, it features authentication, JWT token protection, and a private user dashboard.

## 🔗 Live Demo: 
rosywrite-notepad.onrender.com

## 🛡️ Key Features
1. ✍️ Clean and responsive writing interface
2. 🔐 User authentication with JWT
3. 🔒 Notes are private to each logged-in user
4. 📄 Full CRUD (Create, Read, Update, Delete) for personal notes
5. 🚪 Secure Logout to end session
6. 💾 Autosave / persistent storage
7. 📱 Mobile responsive UI

## 🧭 How It Works
1. Sign up or log in
2. Access your personal dashboard
3. Create, edit, or delete your private notes
4. Securely log out when done
5. Each user’s notes are stored securely and are never visible to others.

🚀 Tech Stack
1. Layer: Tech
2. Frontend:	EJS
3. Backend:	Node.js, Express
4. Auth:	JSON Web Tokens (JWT)
5. Database:	MongoDB / Mongoose (or as implemented)
6. Deployment:	Render.com

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
(Optional) Setup .env file with JWT_SECRET, DB_URI, etc.

# Start the server
```bash
npm start
```
Then open http://localhost:3000 in your browser.

# 🔐 Authentication
RosyWrite includes robust authentication features:
1. JWT-based login system
2. Secure sign-up and login forms
3. Protected routes via middleware
4. Encrypted token storage in browser
5. Logout endpoint to invalidate session

Only logged-in users can view or edit their notes.

# 📝 Notes Dashboard
Once logged in, users can:
1. ➕ Create notes
2. ✏️ Edit existing ones
3. 🗑️ Delete notes
4. 📄 View saved notes, all scoped to the user
Your notes are always private, secure, and accessible only to you.

# ✨ Future Plans
1. 🔄 Note versioning and history
2. 🧠 AI-based note tagging and smart categorization
3. 🌓 Light/Dark mode
4. 🔔 Reminder emails or notifications
5. 🤝 Contributing

Pull requests are welcome! To contribute:
1. Fork the repo
2. Create your feature branch: git checkout -b feature/awesome
3. Commit your changes: git commit -m 'Add awesome feature'
4. Push to the branch: git push origin feature/awesome
5. Open a PR

# 👩‍💻 Author
Ruchi Kumari
🔗 GitHub: @khushi-1907
📧 Email: 2320369.cse.coe@cgc.edu.in

# 📄 License
Licensed under the MIT License.
