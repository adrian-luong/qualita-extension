import { Base, DTO } from "./base.interface";

interface TileFields {
    tags: string[]
    status: string
    value: number
    panelID: number
}

export interface Tile extends Base, TileFields {}

export interface TileDTO extends DTO, TileFields {}