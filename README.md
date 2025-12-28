# Portfolio Website

A professional full-stack portfolio website built with React and Node.js/Express.

## 📁 Project Structure

```
Portfolio/
├── backend/                 # Node.js Express API
│   ├── data/
│   │   └── projects.json    # Project data
│   ├── routes/
│   │   ├── contact.js       # POST /api/contact
│   │   └── projects.js      # GET /api/projects
│   ├── package.json
│   └── server.js            # Express server
│
├── frontend/                # React + Vite
│   ├── src/
│   │   ├── components/
│   │   │   ├── Footer.jsx
│   │   │   ├── Layout.jsx
│   │   │   ├── Navbar.jsx
│   │   │   ├── ProjectCard.jsx
│   │   │   └── Toast.jsx
│   │   ├── pages/
│   │   │   ├── About.jsx
│   │   │   ├── Contact.jsx
│   │   │   ├── Home.jsx
│   │   │   ├── NotFound.jsx
│   │   │   ├── Projects.jsx
│   │   │   └── Skills.jsx
│   │   ├── App.jsx
│   │   ├── index.css
│   │   └── main.jsx
│   ├── index.html
│   └── package.json
│
└── README.md
```

## 🚀 Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm

### Running the Backend

```bash
# Navigate to backend folder
cd backend

# Install dependencies
npm install

# Start the server
npm start
```

The API will run on **http://localhost:5000**

### Running the Frontend

```bash
# Navigate to frontend folder
cd frontend

# Install dependencies
npm install

# Start the development server
npm run dev
```

The frontend will run on **http://localhost:5173**

## 🔌 API Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | / | Health check - returns "Portfolio API Running" |
| GET | /api/projects | Returns list of portfolio projects |
| POST | /api/contact | Submit contact form message |

### POST /api/contact Body

```json
{
  "name": "John Doe",
  "email": "john@example.com",
  "message": "Hello, I'd like to discuss a project"
}
```

## ✨ Features

- **Modern UI** - Dark theme with smooth animations
- **Responsive Design** - Mobile-first approach
- **React Router** - Client-side navigation
- **API Integration** - Fetches projects from backend
- **Form Validation** - Client and server-side validation
- **Toast Notifications** - Success/error feedback
- **Project Filtering** - Filter by technology stack
- **SEO Optimized** - Meta tags and Open Graph support

## 🛠️ Technologies

**Frontend:**
- React 18
- React Router 6
- Vite
- CSS3 (Custom Properties)

**Backend:**
- Node.js
- Express
- CORS

## 📝 Customization

1. Update personal info in the page components
2. Modify `backend/data/projects.json` with your projects
3. Update colors in `frontend/src/index.css` CSS variables
4. Replace placeholder content with your own

## 📄 License

MIT License - feel free to use for your own portfolio!
