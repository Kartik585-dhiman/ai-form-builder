# AI-Powered Form Builder

An AI-powered web application that generates fully functional forms using natural language prompts and a locally hosted open-source Large Language Model (LLM) via Ollama.

---

## Project Overview

AI-Powered Form Builder allows users to describe a form in natural language, and the application automatically generates a functional, styled form with relevant fields, input types, validations, and a live preview.

The application also supports manual form creation through a wizard-style interface.

### Example Prompt

`Create a student registration form`

### Example Generated Fields

- Name (Text)
- Email (Email)
- Student ID (Text)
- Date of Birth (Date)

---

## Features

### AI Form Generation

- Generate forms using natural language prompts
- Powered by a locally hosted open-source LLM via Ollama
- Automatically detects relevant form fields and input types

### Wizard-Based Form Builder

- Dynamic form creation
- Add multiple fields manually
- Configure form details step-by-step

### Supported Input Types

- Text
- Email
- Number
- Date
- File Upload
- Checkbox

### Validation Support

- Required field validation
- Dynamic validation rendering

### Layout Options

- Single Column
- Two Column
- Multi Column
- Dynamic layout rendering based on user selection

### Live Form Preview

- Real-time form preview
- Dynamic UI rendering

### Export Functionality

- Export React code
- Export HTML code
- Copy-to-clipboard support

### UI Features

- Dark / Light Theme Toggle
- Loading Spinner during AI generation
- Toast Notifications
- Clean and responsive UI

---

## Tech Stack

### Frontend

- React.js
- Tailwind CSS
- Vite

### AI Integration

- Ollama
- Llama 3 / Mistral (Local LLM)

---

## Important Note

This project uses a **locally hosted LLM through Ollama**.

AI form generation works only when Ollama is running locally on your machine.

The deployed frontend version supports UI and frontend functionality, while AI generation requires a local Ollama instance.

---

## Installation & Setup

### 1. Clone Repository

```bash
git clone <repository-link>
```

### 2. Navigate to Project Folder

```bash
cd ai-form-builder
```

### 3. Install Dependencies

```bash
npm install
```

### 4. Start Development Server

```bash
npm run dev
```

---

## Ollama Setup

### Install Ollama

Download and install Ollama from:

https://ollama.com/download

### Run LLM Model

For Llama 3:

```bash
ollama run llama3
```

OR for Mistral:

```bash
ollama run mistral
```

Keep Ollama running while using AI generation.

---

## Access the Application

Open in browser:

```txt
http://localhost:5173
```

---

## Project Structure

```txt
src/
│── components/
│   ├── AIPrompt.jsx
│   ├── CodePreview.jsx
│   ├── FormPreview.jsx
│   ├── WizardForm.jsx
│
│── pages/
│   ├── Home.jsx
│
│── services/
│   ├── ollamaApi.js
│
│── utils/
│   ├── generateCode.js
```

---

## Future Improvements

- Advanced validation rules
- Multi-step form generation
- Drag-and-drop form builder
- Database integration
- Cloud-hosted AI support
- Better mobile responsiveness

---

## Author

**Kartik Dhiman**

Built using React, Tailwind CSS, and Ollama.
