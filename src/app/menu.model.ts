export interface MenuItem {
  label: string;
  target: string;
  isOpen: boolean;
  children: {
    label: string,
    target: string,
  }[];
}


export type  Menu = MenuItem[];
