export interface Category {
  id: number;
  name: string;
}
export interface Product
{
  cat_id: number;
  name: string;
  uni_id: number;
  description: string;
  url: string;
  price : number;

}
