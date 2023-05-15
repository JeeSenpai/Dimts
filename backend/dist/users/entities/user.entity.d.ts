import { UserDetails } from "./user_detail.entity";
export declare class User {
    id: number;
    email: string;
    password: string;
    isValidated: boolean;
    otpVerified: boolean;
    userDetails: UserDetails;
    status: boolean;
    datecreated: Date;
    dateupdated: Date;
}
