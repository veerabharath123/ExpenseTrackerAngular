export interface AuthUser {
    userName: string;
    token: string;
}
  
export interface AuthPermission extends AuthUser {
    roles: string[];
    permissions: string[];
}