import { Usuario } from './UsuarioInterface';

export interface AuthState {
  errorMessage: string;
  token: string | null;
  user: Usuario | null;
  status: 'checking' | 'authenticated' | 'not-authenticated';
}