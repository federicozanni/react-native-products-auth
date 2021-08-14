export interface LoginData {
  correo: string
  password: string;
}

export interface LoginRes {
  usuario: Usuario;
  token:   string;
}

export interface SingData {
  correo: string
  password: string;
  nombre: string;
}

export interface UpdateData {
  _id: string;
  correo: string
  password: string;
  nombre: string;
}

export interface Usuario {
  rol:    string;
  estado: boolean;
  google: boolean;
  nombre: string;
  correo: string;
  uid:    string;
  img?:    string;
  password: string;
  disponible: boolean;
}
