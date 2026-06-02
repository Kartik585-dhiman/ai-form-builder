export const generateHTMLCode = (
  formName,
  fields
) => {
  return `
<form>
  <h2>${formName}</h2>

${fields
  .map(
    (field) => `
  <div>
    <label>${field.fieldName}</label>

    <input
      type="${field.fieldType}"
      ${
        field.required
          ? "required"
          : ""
      }
      placeholder="${field.fieldName}"
    />
  </div>
`
  )
  .join("")}

  <button type="submit">
    Submit
  </button>
</form>
`;
};

export const generateReactCode = (
  formName,
  fields
) => {
  return `
function GeneratedForm() {
  return (
    <form>
      <h2>${formName}</h2>

${fields
  .map(
    (field) => `
      <div>
        <label>${field.fieldName}</label>

        <input
          type="${field.fieldType}"
          ${
            field.required
              ? "required"
              : ""
          }
          placeholder="${field.fieldName}"
        />
      </div>
`
  )
  .join("")}

      <button type="submit">
        Submit
      </button>
    </form>
  );
}

export default GeneratedForm;
`;
};