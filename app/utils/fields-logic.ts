import { AuthFieldsInterface } from "../containers/Auth/interfaces";

export function getValueFromFields(
  fields: AuthFieldsInterface = [],
  fieldName: string
): string {
  const filteredField = fields.find(field => field.type === fieldName);

  if (!filteredField) {
    return "";
  }

  return filteredField.value;
}

export function updateFields(
  fieldName: string,
  value: string,
  fields: AuthFieldsInterface
): AuthFieldsInterface {
  return fields.map(field => {
    if (field.type === fieldName) {
      field.value = value;
      return field;
    }
    return field;
  });
}
