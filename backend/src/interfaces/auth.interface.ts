export interface TokenPayload {
    sub:  string;
    id: number;
} 

export interface AuthData {
    user: AuthUser;
    token: string;
}
interface AuthUser {
    admin_id: number;
    admin_username: string;
}

export interface UserCredenctials {
    id: number;
    password: string;
}