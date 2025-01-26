export interface IButton {
  text: string;
  onClick?: () => void;
  bgColor: string;
  textColor: string;
  starColor: string;
  starReverse: boolean;
  paddings: string;
  fontSize: string;
  borderRadius: string;
  height: string;
  disabled: boolean;
  type?: "submit" | "reset" | "button" | undefined;
  hoverEffect?: string;
}
