import { useState } from "react";
import { generateFormFromAI } from "../services/ollamaApi";

function AIPrompt({
  setFormData,
  setFields,
  setGenerated,
}) {
  const [prompt, setPrompt] =
    useState("");

  const [loading, setLoading] =
    useState(false);

  const handleGenerate =
    async () => {
      if (!prompt.trim()) return;

      setLoading(true);

      const aiResponse =
        await generateFormFromAI(
          prompt
        );

      if (aiResponse) {
        setFormData((prev) => ({
          ...prev,
          formName:
            aiResponse.formName ||
            "AI Generated Form",
          numberOfFields:
            aiResponse.fields
              ?.length || 0,
        }));

        setFields(
          aiResponse.fields || []
        );

        setGenerated(true);
      }

      setLoading(false);
    };

  return (
    <div>
      <div className="mb-5">
        <h2 className="text-xl font-semibold">
          AI Form Generator
        </h2>

        <p className="text-sm text-slate-400 mt-1">
          Describe the form you want
          to create.
        </p>
      </div>

      <textarea
        value={prompt}
        onChange={(e) =>
          setPrompt(
            e.target.value
          )
        }
        placeholder="Example: Create a student registration form"
        className="w-full min-h-[120px] rounded-lg border border-slate-700 bg-slate-900 p-4 outline-none focus:border-blue-500 resize-none transition"
      />

      {/* Example prompts */}
      <div className="mt-3 text-sm text-slate-400">
        <p className="font-medium mb-2">
          Example prompts:
        </p>

        <ul className="space-y-1">
          <li>
            • Create a student
            registration form
          </li>

          <li>
            • Create a job
            application form
          </li>

          <li>
            • Create a hospital
            patient form
          </li>
        </ul>
      </div>

      <button
        onClick={handleGenerate}
        disabled={loading}
        className="mt-5 w-full bg-blue-600 hover:bg-blue-700 disabled:opacity-70 py-3 rounded-lg font-medium transition flex justify-center items-center gap-3"
      >
        {loading ? (
          <>
            <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>

            <span>
              Generating form...
            </span>
          </>
        ) : (
          "Generate Form"
        )}
      </button>
    </div>
  );
}

export default AIPrompt;