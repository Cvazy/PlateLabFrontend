import { Theme } from "@/app/types";
import { ChangeEvent } from "react";

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
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  onBlur?: (e: ChangeEvent<HTMLInputElement>) => void;
  placeholder: string;
  label: string;
  theme: Theme;
  index?: number;
  vertical: boolean;
  isError?: boolean;
}
