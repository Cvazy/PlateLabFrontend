import { Theme } from "@/app/types";

export interface IInputProps {
  type?:
    | "password"
    | "email"
    | "text"
    | "number"
    | "search"
    | "tel"
    | "url"
    | "date"
    | "datetime-local"
    | "month"
    | "week"
    | "time"
    | "datetime"
    | "color"
    | "range"
    | "file";
  onChange: () => void;
  placeholder: string;
  label: string;
  theme: Theme;
  index?: number;
  vertical: boolean;
}
