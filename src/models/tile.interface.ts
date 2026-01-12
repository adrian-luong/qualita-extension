import { Base, DTO } from "./base.interface";

interface TileFields {
    tileTags: string[]
    tileStatus: string
    tileValue: number
    // panelID: string
}

export interface Tile extends Base, TileFields {}

export interface TileDTO extends DTO, TileFields {}