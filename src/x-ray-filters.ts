import R from "ramda";

export default {
  trim: (value: string) => (typeof value === "string" ? value.trim() : value),
  reverse: (value: string) =>
    typeof value === "string" ? value.split("").reverse().join("") : value,
  slice: (value: string, start: number, end: number) =>
    typeof value === "string" ? value.slice(start, end) : value,
  number: (value: string) =>
    typeof value === "string" ? parseFloat(value) : value,
  integer: (value: string) =>
    typeof value === "string" ? parseInt(value, 10) : value,
  object: (value: string) =>
    typeof value === "string" ? JSON.parse(value) : value,
  objectField: (value: object, field: string) =>
    typeof value === "object" ? R.path(field.split(/\./g), value) : value,
  digits: (value: string) =>
    typeof value === "string" ? value.replace(/[^\d]+/g, "") : value
};
