import { useState } from "react";

function FormPreview({
  formName,
  fields,
  layout,
}) {
  const [toast, setToast] =
    useState(false);

  const handleSubmit = (
    e
  ) => {
    e.preventDefault();

    setToast(true);

    setTimeout(() => {
      setToast(false);
    }, 2500);
  };

  return (
    <div className="relative">
      {/* Header */}
      <div className="mb-5 border-b border-slate-700 pb-4">
        <h2 className="text-xl font-semibold text-slate-100">
          {formName ||
            "Generated Form"}
        </h2>

        <p className="text-sm text-slate-400 mt-1">
          Live preview of your
          generated form
        </p>
      </div>

      <form
        onSubmit={handleSubmit}
        className={`grid gap-4 ${
          layout ===
          "two-column"
            ? "grid-cols-2"
            : "grid-cols-1"
        }`}
      >
        {fields.map(
          (field, index) => (
            <div
              key={index}
              className="flex flex-col"
            >
              <label className="mb-2 text-sm font-medium text-slate-300">
                {field.fieldName ||
                  `Field ${
                    index + 1
                  }`}
              </label>

              {/* Text */}
              {field.fieldType ===
                "text" && (
                <input
                  type="text"
                  placeholder={`Enter ${field.fieldName}`}
                  className="bg-[#0F172A] border border-slate-700 px-3 py-2 rounded-md text-sm focus:outline-none focus:ring-1 focus:ring-blue-500"
                  required={
                    field.required
                  }
                />
              )}

              {/* Email */}
              {field.fieldType ===
                "email" && (
                <input
                  type="email"
                  placeholder={`Enter ${field.fieldName}`}
                  className="bg-[#0F172A] border border-slate-700 px-3 py-2 rounded-md text-sm focus:outline-none focus:ring-1 focus:ring-blue-500"
                  required={
                    field.required
                  }
                />
              )}

              {/* Number */}
              {field.fieldType ===
                "number" && (
                <input
                  type="number"
                  placeholder={`Enter ${field.fieldName}`}
                  className="bg-[#0F172A] border border-slate-700 px-3 py-2 rounded-md text-sm focus:outline-none focus:ring-1 focus:ring-blue-500"
                  required={
                    field.required
                  }
                />
              )}

              {/* Date */}
              {field.fieldType ===
                "date" && (
                <input
                  type="date"
                  className="bg-[#0F172A] border border-slate-700 px-3 py-2 rounded-md text-sm focus:outline-none focus:ring-1 focus:ring-blue-500"
                  required={
                    field.required
                  }
                />
              )}

              {/* File */}
              {field.fieldType ===
                "file" && (
                <input
                  type="file"
                  className="text-sm border border-slate-700 rounded-md px-3 py-2 bg-[#0F172A]"
                  required={
                    field.required
                  }
                />
              )}

              {/* Checkbox */}
              {field.fieldType ===
                "checkbox" && (
                <label className="flex items-center gap-2 text-sm">
                  <input
                    type="checkbox"
                    required={
                      field.required
                    }
                  />
                  {
                    field.fieldName
                  }
                </label>
              )}

              {field.required && (
                <span className="text-xs text-slate-500 mt-1">
                  Required
                </span>
              )}
            </div>
          )
        )}

        <div className="col-span-full pt-3">
          <button
            type="submit"
            className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded-md text-sm font-medium transition"
          >
            Submit Form
          </button>
        </div>
      </form>

      {toast && (
        <div className="fixed bottom-6 right-6 bg-green-600 text-white text-sm px-4 py-2 rounded-md shadow-lg z-50">
          Form submitted
          successfully
        </div>
      )}
    </div>
  );
}

export default FormPreview;