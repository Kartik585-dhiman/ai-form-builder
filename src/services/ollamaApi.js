export const generateFormFromAI =
  async (prompt) => {
    try {
      const response = await fetch(
        "http://localhost:11434/api/generate",
        {
          method: "POST",
          headers: {
            "Content-Type":
              "application/json",
          },
          body: JSON.stringify({
            model: "llama3",
            prompt: `
You are a form generator AI.

Return ONLY valid JSON.

DO NOT explain anything.
DO NOT add text before or after JSON.

User Request:
${prompt}

Format:
{
  "formName": "Job Application",
  "fields": [
    {
      "fieldName": "Full Name",
      "fieldType": "text",
      "required": true
    },
    {
      "fieldName": "Email",
      "fieldType": "email",
      "required": true
    }
  ]
}
`,
            format: "json",
            stream: false,
          }),
        }
      );

      const data =
        await response.json();

      console.log(
        "AI Response:",
        data.response
      );

      return JSON.parse(
        data.response
      );
    } catch (error) {
      console.error(
        "Ollama Error:",
        error
      );

      alert(
        "AI failed to generate form"
      );

      return null;
    }
  };