interface IPartners {
    id : number
    title : string
    photo : string[]
    text : string
    urlText? : string
}


export const partnersData : IPartners[] = [
    {
        id:1,
        photo : ['/partner1.webp','/partner2.webp','/partner3.webp','/partner1.webp','/partner2.webp','/partner3.webp'],
        text : 'We deeply appreciate the support of our ',
        title:"CRYSTAL HALL proudly hosts",
        urlText : "Partners"
    }
] 