# 🏃 AI Fitness & Personal Healthcare Assistant

An intelligent and interactive fitness & personal healthcare web application designed to help users manage their daily fitness routine, nutrition, workouts, health reminders, running sessions, and overall progress from a single modern dashboard.

The application combines a responsive React frontend with a Spring Boot and MySQL backend and includes an AI-inspired personal fitness coach with voice interaction.

---

## ✨ Key Features

### 🤖 AI Personal Fitness Coach
- Interactive AI-style personal fitness assistant
- Voice-based interaction
- Text-to-speech responses
- Personalized guidance based on user profile
- Human-like fitness reminder experience

### 👤 Personal Health Profile
Users can maintain fitness-related information such as:
- Name
- Age
- Gender
- Height
- Current weight
- Target weight
- Fitness goal
- Diet preference
- Workout time
- Daily water goal
- Step goal
- Sleep goal

Profile data is stored using a Spring Boot REST API and MySQL.

### 🥗 Personalized Diet Planner
- Diet plans based on fitness goals
- Vegetarian/non-vegetarian preferences
- Daily calorie target
- Protein and carbohydrate tracking
- Breakfast, lunch, snacks, and dinner recommendations
- Regenerate diet plan functionality

### 🏋️ Workout Planner
- Structured workout routines
- Exercise tracking
- Workout timer
- Rest timer
- Workout session controls
- Fitness-focused interface

### 🏃 Running Mode
- Dedicated running dashboard
- Running timer
- Start / Pause / Resume controls
- Activity-focused interface
- Music support during running sessions

### 🎵 Fitness Music Player
- Built-in workout music interface
- Play / Pause
- Previous / Next track
- Seek control
- Volume control
- Animated music player
- Workout playlist

### ⏰ Smart Reminders
Users can create reminders for:
- Water
- Meals
- Workout
- Walking
- Sleep
- Medicine

Includes:
- Add reminder
- Enable / disable reminder
- Delete reminder
- Voice reminder preview
- Local persistence

### 📊 Progress Analytics
- Weight progress tracking
- Target weight visualization
- Weekly steps chart
- Calories burned
- Workout completion
- Active minutes
- Nutrition score
- Hydration score
- Sleep score
- AI-style progress insights

### 📄 Health Report Module
- PDF/image health report upload interface
- Report preview
- Upload history
- Health information safety notice
- Designed for future AI-assisted report explanation

> The health report feature is intended for informational assistance and does not provide medical diagnosis.

### 📱 Responsive Luxury Dashboard
- Premium dark UI
- Glassmorphism-inspired cards
- Animated components
- Responsive sidebar
- Mobile/tablet support
- Dynamic greeting and date
- Interactive charts and fitness statistics

---

## 🛠️ Tech Stack

### Frontend

- React.js
- Vite
- JavaScript
- Tailwind CSS
- Lucide React
- Recharts
- Web Speech API
- LocalStorage

### Backend

- Java
- Spring Boot
- Spring Web
- Spring Data JPA
- REST APIs
- Lombok

### Database

- MySQL

### Development Tools

- Visual Studio Code
- IntelliJ IDEA
- MySQL Workbench
- Postman
- Git
- GitHub

---

## 🏗️ Project Architecture

```text
AI-Fitness-Personal-Healthcare
│
├── frontend
│   │
│   ├── src
│   ├── public
│   ├── package.json
│   └── vite.config.js
│
├── backend
│   │
│   ├── src/main/java
│   ├── src/main/resources
│   └── pom.xml
│
├── .gitignore
└── README.md
```

Basic application flow:

```text
User
 ↓
React + Vite Frontend
 ↓
REST API
 ↓
Spring Boot Backend
 ↓
Spring Data JPA
 ↓
MySQL Database
```

---

## 🚀 Running the Project Locally

### Prerequisites

Install:

- Java 21
- Node.js
- MySQL
- Maven / Maven Wrapper
- Git

### 1. Clone Repository

```bash
git clone https://github.com/sm2919942-ctrl/ai-fitness-personal-healthcare.git
```

Move into the project:

```bash
cd ai-fitness-personal-healthcare
```

### 2. Configure MySQL

Create the database:

```sql
CREATE DATABASE ai_fitness_healthcare;
```

Configure your local Spring Boot `application.properties`:

```properties
spring.datasource.url=jdbc:mysql://localhost:3306/ai_fitness_healthcare
spring.datasource.username=root
spring.datasource.password=YOUR_MYSQL_PASSWORD

spring.jpa.hibernate.ddl-auto=update
spring.jpa.show-sql=true

server.port=8080
```

> Never commit database passwords or other credentials to GitHub.

### 3. Run Backend

Open the `backend` project in IntelliJ IDEA and run the Spring Boot application.

Backend:

```text
http://localhost:8080
```

### 4. Run Frontend

Open terminal inside:

```text
frontend
```

Install dependencies:

```bash
npm install
```

Start development server:

```bash
npm run dev
```

Frontend will normally run at:

```text
http://localhost:5173
```

---

## 🔐 Security

Sensitive configuration files and generated directories are excluded using `.gitignore`.

Credentials such as database passwords should never be committed to the repository.

---

## 🔮 Future Enhancements

- LLM-powered fitness assistant
- Advanced health-report interpretation
- OCR/vision support for scanned reports
- Authentication and user accounts
- Cloud database integration
- Real wearable/step-counter integration
- Push notifications
- Personalized workout generation
- Cloud deployment of Spring Boot backend

---

## ⚠️ Health Disclaimer

This project is built for educational and fitness-assistance purposes.

Health-related information displayed by the application should not be considered medical diagnosis or professional medical advice. Users should consult qualified healthcare professionals for medical concerns.

---

## 👨‍💻 Developer

Developed as a full-stack portfolio project demonstrating:

**React • Java • Spring Boot • REST APIs • MySQL • Responsive UI • AI-inspired Features**

---

## ⭐ Support

If you find this project useful, consider giving the repository a star.