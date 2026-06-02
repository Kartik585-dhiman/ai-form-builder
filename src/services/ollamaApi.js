export async function generateFormFromAI(
  prompt
) {
  try {
    const response =
      await fetch(
        "http://localhost:11434/api/generate",
        {
          method: "POST",
          headers: {
            "Content-Type":
              "application/json",
          },
          body: JSON.stringify({
            model: "mistral",
            prompt: `
Generate a JSON form structure.

Prompt:
${prompt}

Return ONLY valid JSON in this format:

{
  "formName": "Form Name",
  "fields": [
    {
      "fieldName": "Name",
      "fieldType": "text",
      "required": true
    }
  ]
}
`,
            stream: false,
          }),
        }
      );

    const data =
      await response.json();

    const text =
      data.response.trim();

    const cleanJSON =
      text.replace(
        /```json|```/g,
        ""
      );

    return JSON.parse(
      cleanJSON
    );
  } catch (error) {
    console.error(
      "Ollama Error:",
      error
    );

    alert(
      "AI generation requires a locally running Ollama server.\n\nRun 'ollama run mistral' or 'ollama run llama3' on your computer and try again."
    );

    return null;
  }
}