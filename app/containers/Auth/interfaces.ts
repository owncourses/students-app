interface AuthFields {
  type: string;
  label: string;
  value: string;
  disabled: boolean;
  error: string;
}

export interface AuthFieldsInterface extends Array<AuthFields> {}
