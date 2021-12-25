import { Card } from './../app.component';
export interface User {
    "name": string,
    "coins": number,
    "deck": Card[]
}

export interface UserDelete{
    "n": number,
    "deletedCount": number,
    "ok": number
}