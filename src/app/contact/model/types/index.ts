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
}

export interface IContactData {
  name: string;
  eMail: string;
  phone: string;
  companyName: string;
  message: string;
}
