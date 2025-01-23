export interface IHowItsWork {
  id: number | string;
  title: string;
  description: string;
}

export interface IHowItsWorkElementProps extends IHowItsWork {
  numElement: number;
  isActive: boolean;
  isTheFirst: boolean;
  isTheLast: boolean;
  isFAQ: boolean;
}

export interface IContactData {
  name: string;
  email: string;
  phone: string;
  companyName: string;
  message: string;
}
