export const validatorRules = {
  isRequired: (value) => String(value).trim() !== '',
  isEmail: (value) => /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,12}$/.test(String(value).trim()),
  minLength: (value, ruleConfig) => String(value).trim().length >= ruleConfig.value,
  maxLength: (value, ruleConfig) => String(value).trim().length <= ruleConfig.value,
  isNumber: (value) => String(value).trim() !== '' && !isNaN(Number(value)),
  minValue: (value, ruleConfig) => Number(value) >= ruleConfig.value,
  maxValue: (value, ruleConfig) => Number(value) <= ruleConfig.value,
};