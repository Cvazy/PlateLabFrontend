export interface IFooter {
  id: number | string;
  title: string;
  description: string;
}

export interface INetwork {
  id: number | string;
  name: string;
  link: string;
  image_icon_dark: string;
  image_icon_light: string;
}

export interface IRouting {
  id: number | string;
  name: string;
  hoverText: string;
  link: string;
}
