export interface IAuthor {
    name: string
}

export interface IBook {
    name: string
    ISBN: string
    price: number
    author: IAuthor
}

export interface IAlert {
    message : string
    variant : string
}

export interface ISelector {
    label: string
    value: IAuthor
}
