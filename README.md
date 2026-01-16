# Next Revolution Tech (NRT) Portfolio - Project Status

This document outlines the current state of the NRT Portfolio application, detailing which features are dynamic (database-driven) and which are currently static (hardcoded).

## 🟢 Dynamic Features (Working & Managed via Admin)
These features are fully connected to the Backend (Node.js/Express) and Database (PostgreSQL). You can manage them independently through the **Admin Dashboard**.

### 1. Projects (Case Studies)
-   **Public Page**: `/case-studies` (Fetches from DB).
-   **Admin**: View, Add, Delete Projects.
-   **Data**: Title, Industry, Image, Challenge, Solution, Key Results.

### 2. Services
-   **Public Page**: `/services` & Home Page (Fetches from DB).
-   **Admin**: View, Add, Delete Services.
-   **Data**: Title, Description, Icon (mapped dynamically), Features list, Cover Image.

### 3. Testimonials
-   **Public Page**: Home Page (Fetches from DB).
-   **Admin**: View, Add, Delete Testimonials.
-   **Data**: Author Name, Role, Company, Quote, Rating, Client Image.

### 4. Contact Form
-   **Public Page**: `/contact`.
-   **Functionality**: Submitting the form sends data to the Backend API (`/api/contact`).
-   **Status**: Backend logic processes the request (stored/emailed based on config).

### 5. Media Uploads
-   **Functionality**: Images for Projects, Services, and Testimonials are uploaded via the Admin Panel and served dynamically.

### 6. Authentication
-   **Admin**: Secure Login (`/admin/login`) with JWT Authentication.
-   **Security**: Admin routes (Dashboard, Managers) are protected.

---

## 🟡 Static Features (Hardcoded Content)
These sections are currently written directly in the code (React components). To change them, a developer must modify the `.tsx` files.

### 1. Home Page
-   **Hero Section**: Main headline ("Engineering Scalable Digital Solutions...").
-   **Stats**: Numbers like "200+ Projects", "98% Satisfaction".
-   **Why Choose Us**: The list of reasons (Excellence, Integrity, etc.).
-   **Video Hero**: The background video component.

### 2. About Us Page (`/about`)
-   **Mission & Vision**: Text is hardcoded.
-   **Our Journey (Timeline)**: The roadmap/history list.
-   **Core Values**: List of values (Excellence, Integrity, etc.).
-   **Global Presence**: Stats about offices and countries.

### 3. Contact Page (`/contact`)
-   **Office Locations**: Addresses for North America, Europe, etc.
-   **FAQs**: The "Frequently Asked Questions" list.
-   **Contact Info**: Phone numbers and email addresses displayed in the sidebar.

### 4. Services Page (`/services`)
-   **Tech Stack**: The grid of technologies (React, Node.js, AWS, etc.).

### 5. Footer
-   **Links**: Navigation links.
-   **Social Media**: Links to LinkedIn, Twitter, GitHub.
-   **Copyright**: Year and company name text.

---

## 🛠 Tech Stack
-   **Frontend**: React, TypeScript, Tailwind CSS, Vite.
-   **Backend**: Node.js, Express.js.
-   **Database**: PostgreSQL (Neon).
-   **Authentication**: JSON Web Tokens (JWT).

## 🚀 How to Run
1.  **Backend**: `cd "NRT BACKEND" && npm start` (Runs on port 5000).
2.  **Frontend**: `cd "NRT FRONTEND" && npm run dev` (Runs on port 5173).
