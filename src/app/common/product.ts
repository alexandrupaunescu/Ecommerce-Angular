export class Product {
    constructor(public sku: string,
                public name: string,
                public descriptiomn: string,
                public unitPrice: number,
                public imageUrl: string,
                public active: boolean,
                public unitsInStock: string,
                public dateCreated: Date,
                public Lastupdate: Date
    ){

    }
}
