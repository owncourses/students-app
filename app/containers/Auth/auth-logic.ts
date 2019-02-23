import { AuthFieldsInterface } from "./interfaces";

export function getValueFromFields(
  fields: AuthFieldsInterface = [],
  fieldName: string
): string {
  let value = null;
  fields.forEach(field => {
    if (field.type === fieldName) {
      value = field.value;
    }
  });

  return value;
}
