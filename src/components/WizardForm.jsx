import { useState } from "react";

function WizardForm({
  formData,
  setFormData,
  fields,
  setFields,
  setGenerated,
}) {
  const [step, setStep] = useState(1);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleFieldChange = (
    index,
    key,
    value
  ) => {
    const updatedFields = [...fields];

    updatedFields[index][key] = value;

    setFields(updatedFields);
  };

  return (
    <div>
      {/* Step 1 */}
      {step === 1 && (
        <div>
          <h2 className="text-2xl font-semibold mb-6">
            Form Details
          </h2>

          <div className="space-y-5">
            <div>
              <label className="block mb-2 text-slate-300">
                Form Name
              </label>

              <input
                type="text"
                name="formName"
                value={formData.formName}
                onChange={handleChange}
                placeholder="Enter form name"
                className="w-full bg-slate-800 border border-slate-700 rounded-xl p-3 outline-none focus:border-cyan-400"
              />
            </div>

            <div>
              <label className="block mb-2 text-slate-300">
                Form Purpose
              </label>

              <input
                type="text"
                name="purpose"
                value={formData.purpose}
                onChange={handleChange}
                placeholder="Example: Job Application"
                className="w-full bg-slate-800 border border-slate-700 rounded-xl p-3 outline-none focus:border-cyan-400"
              />
            </div>

            <div>
              <label className="block mb-2 text-slate-300">
                Number of Fields
              </label>

              <input
                type="number"
                name="numberOfFields"
                value={formData.numberOfFields}
                onChange={handleChange}
                placeholder="Enter number"
                className="w-full bg-slate-800 border border-slate-700 rounded-xl p-3 outline-none focus:border-cyan-400"
              />
            </div>

            <button
              onClick={() => {
                const generatedFields =
                  Array.from(
                    {
                      length: Number(
                        formData.numberOfFields
                      ),
                    },
                    () => ({
                      fieldName: "",
                      fieldType: "text",
                      required: false,
                    })
                  );

                setFields(generatedFields);
                setGenerated(false);
                setStep(2);
              }}
              className="w-full bg-cyan-500 hover:bg-cyan-600 transition-all rounded-xl py-3 font-semibold"
            >
              Next Step
            </button>
          </div>
        </div>
      )}

      {/* Step 2 */}
      {step === 2 && (
        <div>
          <h2 className="text-2xl font-semibold mb-6">
            Configure Fields
          </h2>

          <div className="space-y-5">
            {fields.map((field, index) => (
              <div
                key={index}
                className="bg-slate-800 p-4 rounded-xl"
              >
                <h3 className="mb-4 font-semibold">
                  Field {index + 1}
                </h3>

                <input
                  type="text"
                  placeholder="Field Name"
                  value={field.fieldName}
                  onChange={(e) =>
                    handleFieldChange(
                      index,
                      "fieldName",
                      e.target.value
                    )
                  }
                  className="w-full bg-slate-700 rounded-lg p-3 mb-3"
                />

                <select
                  value={field.fieldType}
                  onChange={(e) =>
                    handleFieldChange(
                      index,
                      "fieldType",
                      e.target.value
                    )
                  }
                  className="w-full bg-slate-700 rounded-lg p-3 mb-3"
                >
                  <option value="text">
                    Text
                  </option>
                  <option value="email">
                    Email
                  </option>
                  <option value="number">
                    Number
                  </option>
                  <option value="date">
                    Date
                  </option>
                  <option value="file">
                    File
                  </option>
                  <option value="checkbox">
                    Checkbox
                  </option>
                </select>

                <label className="flex items-center gap-2 text-slate-300">
                  <input
                    type="checkbox"
                    checked={field.required}
                    onChange={(e) =>
                      handleFieldChange(
                        index,
                        "required",
                        e.target.checked
                      )
                    }
                  />
                  Required Field
                </label>
              </div>
            ))}

            <div className="flex gap-4">
              <button
                onClick={() => setStep(1)}
                className="w-full bg-slate-700 py-3 rounded-xl"
              >
                Back
              </button>

              <button
                onClick={() => setStep(3)}
                className="w-full bg-cyan-500 py-3 rounded-xl"
              >
                Next Step
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Step 3 */}
      {step === 3 && (
        <div>
          <h2 className="text-2xl font-semibold mb-6">
            Select Layout
          </h2>

          <select
            name="layout"
            value={formData.layout}
            onChange={handleChange}
            className="w-full bg-slate-800 rounded-xl p-4 mb-5"
          >
            <option value="single-column">
              Single Column
            </option>

            <option value="two-column">
              Two Column
            </option>

            <option value="multi-step">
              Multi Step
            </option>
          </select>

          <div className="flex gap-4">
            <button
              onClick={() => setStep(2)}
              className="w-full bg-slate-700 py-3 rounded-xl"
            >
              Back
            </button>

            <button
              onClick={() =>
                setGenerated(true)
              }
              className="w-full bg-cyan-500 py-3 rounded-xl"
            >
              Generate Form
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default WizardForm;