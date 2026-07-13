import { validatorRules } from './validatorRules.js';

export function validateForm(values, validatorConfig) {
  const errors = {};

  for (const fieldName of Object.keys(validatorConfig)) {
    const fieldRules = validatorConfig[fieldName];
    const value = values[fieldName] ?? '';

    for (const ruleName of Object.keys(fieldRules)) {
      const ruleConfig = fieldRules[ruleName];
      const rule = validatorRules[ruleName];

      if (!rule) {
        console.warn(`validateForm: неизвестное правило "${ruleName}" у поля "${fieldName}"`);
        continue;
      }

      if (ruleName !== 'isRequired' && String(value).trim() === '') {
        continue;
      }

      if (!rule(value, ruleConfig)) {
        errors[fieldName] = ruleConfig.message;
        break;
      }
    }
  }

  return errors;
}