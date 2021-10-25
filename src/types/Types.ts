export interface IAuthor {
    id?: number
    name: string
}

export interface IBook {
    id?: number
    name: string
    ISBN: string
    price: string
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

export interface IRoute {
    path: string;
    exact: boolean;
    component: any;
    protected: boolean;
}
