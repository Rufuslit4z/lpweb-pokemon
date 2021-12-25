import { Card } from "./card";

export interface User {
    "name": string,
    "coins": number,
    "deck": Card[]
}