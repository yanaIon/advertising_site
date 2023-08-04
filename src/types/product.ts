type Seller = {
    "fullname": string,
    "rating": number
};

type Address = {
    "city": string,
    "street": string,
    "building": string
}

type Filters = {
    type?: string;
    area?: number;
    "rooms-count"?: number;
    "production-year"?: number;
    transmission?: string;
    "body-type"?: string;
    "ram-value"?: number;
    "screen-size"?: number;
    "cpu-type"?: string;
    "matrix-resolution"?: string;
    supporting?: string;
}

export type Product = {
    "id": number,
    "name": string,
    "price": number,
    "coordinates": number[],
    "seller": Seller,
    "description": string,
    "address": Address,
    "publish-date": string,
    "category": string,
    "photos": string[],
    "filters": Filters,
};