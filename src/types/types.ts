export interface IItem {
  name: string;
  id: string;
  price: string;
  selected: boolean;
  category?: string;
  imgLink: string;
  more: boolean;
  info: string;
}