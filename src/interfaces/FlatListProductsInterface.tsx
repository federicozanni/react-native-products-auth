import { Producto } from './ProductoInterface';
import { ProductsNavigation } from './NavigationInterface';

export interface FlatListProductsInterface {
  data: Producto[],
  navigation: ProductsNavigation,
}