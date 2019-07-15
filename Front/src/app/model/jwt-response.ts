export interface JwtResponse {
    user: {
        UserId: number;
        FirstName: string;
        LastName: string;
        Email: string;
        Username: string;
        Password: string;
        access_token: string;
        expires_in: number;
    }
}
