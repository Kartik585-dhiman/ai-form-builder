import { useState } from "react";
import {
  generateHTMLCode,
  generateReactCode,
} from "../utils/generateCode";

function CodePreview({
  formName,
  fields,
}) {
  const [toast, setToast] =
    useState("");

  const htmlCode =
    generateHTMLCode(
      formName,
      fields
    );

  const reactCode =
    generateReactCode(
      formName,
      fields
    );

  const copyToClipboard = (
    code,
    type
  ) => {
    navigator.clipboard.writeText(
      code
    );

    setToast(
      `${type} copied successfully!`
    );

    setTimeout(() => {
      setToast("");
    }, 2500);
  };

  return (
    <div className="mt-8 relative">
      <h2 className="text-2xl font-semibold mb-5">
        Export Code
      </h2>

      <div className="flex gap-4 mb-5">
        <button
          onClick={() =>
            copyToClipboard(
              htmlCode,
              "HTML Code"
            )
          }
          className="bg-green-600 hover:bg-green-700 px-5 py-3 rounded-xl transition-all duration-300 shadow-md"
        >
          Copy HTML Code
        </button>

        <button
          onClick={() =>
            copyToClipboard(
              reactCode,
              "React Code"
            )
          }
          className="bg-gradient-to-r from-fuchsia-600 via-purple-600 to-violet-600 hover:scale-[1.02] px-5 py-3 rounded-xl transition-all duration-300 shadow-md"
        >
          Copy React Code
        </button>
      </div>

      <div className="bg-slate-950 rounded-xl p-4 overflow-auto max-h-[300px] border border-slate-800">
        <pre className="text-sm text-slate-300 whitespace-pre-wrap">
          {reactCode}
        </pre>
      </div>

      {/* Toast */}
      {toast && (
        <div className="fixed bottom-6 right-6 bg-slate-900 text-white px-5 py-3 rounded-xl shadow-2xl border border-slate-700 animate-pulse z-50">
          ✅ {toast}
        </div>
      )}
    </div>
  );
}

export default CodePreview;