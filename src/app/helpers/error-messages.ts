import {ErrorMessage} from "ng-bootstrap-form-validation";
 
export const CUSTOM_ERRORS: ErrorMessage[] = [
  {
    error: "required",
    format: requiredFormat
  }, {
    error: "email",
    format: emailFormat
  }
];
 
export function requiredFormat(label: string, error: any): string {
  return `${label} é obrigatório.`;
}
 
export function emailFormat(label: string, error: any): string {
  return `${label} doesn't look like a valid email address.`;
}