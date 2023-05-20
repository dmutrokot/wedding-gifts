export interface Product {
  id: number;
  name: string;
  brand: string;
  price: string;
  in_stock_quantity: number;
}

export interface SelectedProduct extends Omit<Product, 'in_stock_quantity'> {
  quantity: number;
}
