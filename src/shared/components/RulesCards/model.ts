import { UrlObject } from "url";

export interface IRulesCards {
    borderColor : string;
    image : string
    text :string
    href : UrlObject | string
    staticImage?: boolean;
    isStatic? : boolean
    isEven? : boolean
}