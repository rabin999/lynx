export default interface CookieConfigInterface {
    domain: string;
    path: string;
    maxAge: number;
    expires: Date;
    httpOnly: boolean;
    secure: boolean;
    sameSite: boolean;
}