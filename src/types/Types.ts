export interface IAuthor {
    name: string
}

export interface IBook {
    name: string
    ISBN: string
    author: IAuthor
}

export interface IAlert {
    message : string
    variant : string
}