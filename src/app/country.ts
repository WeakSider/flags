import { Flags } from "./flags"
import { Name } from "./name"

export interface Country {
    name:Name
    flags:Flags
    population:number
    region:string
    capital:string
    subregion:string
    languages:any
    currencies:any
    tld:string[]
    car:Car
    borders:string[]
}
interface Car{
    signs:string[]
}
