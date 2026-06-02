import { useState } from "react";
import WizardForm from "../components/WizardForm";
import FormPreview from "../components/FormPreview";
import CodePreview from "../components/CodePreview";
import AIPrompt from "../components/AIPrompt";

function Home() {
  const [formData, setFormData] =
    useState({
      formName: "",
      purpose: "",
      numberOfFields: "",
      layout: "single-column",
    });

  const [fields, setFields] =
    useState([]);

  const [generated, setGenerated] =
    useState(false);

  const [darkMode, setDarkMode] =
    useState(true);

  return (
    <div
      className={`min-h-screen transition-colors duration-300 ${
        darkMode
          ? "bg-[#0F172A] text-white"
          : "bg-[#F3F4F6] text-slate-800"
      }`}
    >
      {/* Header */}
      <header
        className={`border-b px-8 py-5 ${
          darkMode
            ? "border-slate-800 bg-[#111827]"
            : "border-slate-200 bg-white"
        }`}
      >
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div>
            <h1 className="text-3xl font-semibold">
              AI Form Builder
            </h1>

            <p className="text-sm text-slate-400 mt-1">
              Generate forms using AI
            </p>
          </div>

          <button
            onClick={() =>
              setDarkMode(!darkMode)
            }
            className={`px-4 py-2 rounded-lg border transition duration-200 ${
              darkMode
                ? "bg-slate-800 border-slate-700 hover:bg-slate-700"
                : "bg-white border-slate-300 hover:bg-slate-100"
            }`}
          >
            {darkMode
              ? "☀️"
              : "🌙"}
          </button>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-8 py-8">
        {/* AI Prompt */}
        <div
          className={`rounded-xl border p-6 mb-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg ${
            darkMode
              ? "bg-[#111827] border-slate-800 hover:border-slate-700"
              : "bg-white border-slate-200 hover:border-slate-300"
          }`}
        >
          <AIPrompt
            setFormData={setFormData}
            setFields={setFields}
            setGenerated={setGenerated}
          />
        </div>

        {/* Main Layout */}
        <div className="grid grid-cols-2 gap-6">
          {/* Left */}
          <div
            className={`rounded-xl border p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg ${
              darkMode
                ? "bg-[#111827] border-slate-800 hover:border-slate-700"
                : "bg-white border-slate-200 hover:border-slate-300"
            }`}
          >
            <WizardForm
              formData={formData}
              setFormData={setFormData}
              fields={fields}
              setFields={setFields}
              setGenerated={setGenerated}
            />
          </div>

          {/* Right */}
          <div
            className={`rounded-xl border p-6 overflow-auto max-h-[85vh] transition-all duration-300 hover:-translate-y-1 hover:shadow-lg ${
              darkMode
                ? "bg-[#111827] border-slate-800 hover:border-slate-700"
                : "bg-white border-slate-200 hover:border-slate-300"
            }`}
          >
            {generated ? (
              <>
                <FormPreview
                  formName={
                    formData.formName
                  }
                  fields={fields}
                  layout={
                    formData.layout
                  }
                />

                <CodePreview
                  formName={
                    formData.formName
                  }
                  fields={fields}
                />
              </>
            ) : (
              <div className="h-full flex items-center justify-center text-slate-400">
                Generate a form to see preview
              </div>
            )}
          </div>
        </div>

        {/* Footer */}
        <footer className="mt-10 text-center text-sm text-slate-500">
          Built with React + Ollama •
          Developed by Kartik Dhiman
        </footer>
      </main>
    </div>
  );
}

export default Home;