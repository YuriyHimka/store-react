export interface IBgColor {
    color: string
}

export interface IFilter {
    label: string
    className: string
}

export interface IProducts {
    id: number
    name: string
    price: number
    image: string
    term: number
    color: string
    favorite: boolean
    quantity: number
}