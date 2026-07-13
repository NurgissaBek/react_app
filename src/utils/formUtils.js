
export const hasErrors = (errors) => Object.keys(errors).length > 0;

export const createChangeHandler = (setValues) => (event) => {
  const { name, value } = event.target;
  setValues((prev) => ({ ...prev, [name]: value }));
};

export const createClearFieldError = (setErrors) => (fieldName) => {
  setErrors((prev) => {
    if (!prev[fieldName]) return prev;
    const next = { ...prev };
    delete next[fieldName];
    return next;
  });
};

export const createInitialValues = (fieldNames) =>
  fieldNames.reduce((acc, name) => ({ ...acc, [name]: '' }), {});