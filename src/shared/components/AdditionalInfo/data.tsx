import { Urls } from "@/shared/constants/urls";
import { ArrowCard } from "@/shared/icons";
import { JSX } from "react";

interface IAdditonalData {
    id:number
    href? : string 
    title : string
    icon : JSX.Element
}


export const additionalData : IAdditonalData[] = [
    {
        id : 1,
        href : Urls.TICKET_INFO,
        title : "ticket-info",
        icon : <ArrowCard key='TICKET'/>
    },
    {
        id : 2,
        href : Urls.RULES,
        title : "rules",
        icon : <ArrowCard key='RULES'/>
    }

]