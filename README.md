# AI-Powered Form Builder

This is an AI-powered form builder built using **React, Tailwind CSS, and Ollama**. The application allows users to generate forms using natural language prompts and also create forms manually using a wizard-based interface.

For example, if a user enters:

`Create a student registration form`

the AI generates a form with fields like:

- Name
- Email
- Student ID
- Date of Birth

The project uses a **locally hosted open-source LLM (Llama 3 / Mistral)** through **Ollama** for AI form generation.

---

## Live Project

**Live Website:**
https://ai-from-builder.netlify.app/

**GitHub Repository:**
https://github.com/Kartik585-dhiman/ai-form-builder.git

---

## Features

### 1. AI Form Generation

- Generate forms using natural language prompts
- Uses locally hosted LLM via Ollama
- Automatically detects suitable fields and input types

### 2. Wizard-Based Form Builder

- Create forms manually step by step
- Add custom fields dynamically
- Configure form details easily

### 3. Supported Field Types

The application currently supports:

- Text
- Email
- Number
- Date
- File Upload
- Checkbox

### 4. Form Validation

- Required field validation
- Dynamic validation rendering

### 5. Layout Options

Users can choose different layouts for forms:

- Single Column
- Two Column
- Multi Column

### 6. Live Preview

- Real-time form preview
- Instantly updates when changes are made

### 7. Export Code

Users can export:

- HTML Code
- React Code

with copy-to-clipboard functionality.

### 8. UI Features

- Dark / Light mode
- Loading spinner during AI generation
- Toast notifications
- Clean responsive UI

---

## Tech Stack

### Frontend

- React.js
- Tailwind CSS
- Vite

### AI Model

- Ollama
- Llama 3
- Mistral

---

## Important Note About AI Generation

This project uses **Ollama locally**, so AI generation works only when Ollama is running on your machine.

The deployed Netlify version supports:

- Manual form generation
- Theme switching
- Live preview
- Export functionality
- Form submission

However, AI form generation requires a local Ollama server.

Run one of these commands before using AI generation locally:

For Mistral:

```bash id="m8vg9r"
ollama run mistral
```

For Llama 3:

```bash id="v0m7u1"
ollama run llama3
```

---

## Installation & Setup

### Clone the repository

```bash id="kwqg8n"
git clone https://github.com/Kartik585-dhiman/ai-form-builder.git
```

### Go to project folder

```bash id="sn7y8w"
cd ai-form-builder
```

### Install dependencies

```bash id="mryq6j"
npm install
```

### Start development server

```bash id="ryv7pi"
npm run dev
```

---

## Ollama Setup

### Step 1: Install Ollama

Download Ollama from:

https://ollama.com/download

### Step 2: Run model

Run any one model:

```bash id="z0bmyh"
ollama run mistral
```

OR

```bash id="eyqob7"
ollama run llama3
```

Make sure Ollama is running while using AI generation.

---

## Local Development URL

Open this in browser:

```txt id="y1r0ig"
http://localhost:5173
```

---

## Project Structure

```txt id="yzjlwm"
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

Some features that can be added in future:

- Multi-step form generation
- Advanced validations
- Drag and drop form builder
- Database integration
- Cloud-hosted AI support
- Better mobile responsiveness

---

## Author

**Kartik Dhiman**

Built using React, Tailwind CSS, and Ollama.
