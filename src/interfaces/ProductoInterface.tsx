export interface Productos {
  total:     number;
  productos: Producto[];
}

export interface Producto {
  precio:      number;
  _id:         string;
  nombre:      string;
  categoria:   Categoria;
  descripcion: string;
  disponible:  boolean;
  usuario:     Categoria;
  img?: string;
}

export interface Categoria {
  _id:    string;
  nombre: string;
}


export interface CategoriaResponse {
  total: number;
  categorias: Categoria[];
}

export interface Categoria {
  _id:    string;
  nombre: string;
  usuario?: CreatedBy;
}

export interface CreatedBy {
  _id: string;
  nombre: string;
}

export interface ProductsState {
  errorMessage: string;
  products:Productos | null;
}
