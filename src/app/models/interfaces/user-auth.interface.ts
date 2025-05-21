export interface AuthUser {
    username: string;
    token: string;
}
  
export interface AuthPermission extends AuthUser {
    roles: string[];
    permissions: string[];
}