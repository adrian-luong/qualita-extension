import { Panel } from "@/models/panel.interface"
import { Tile, TileDTO } from "@/models/tile.interface"

export type ZustandState = {
    panel: Panel
    tiles: Tile[]
}

export type ZustandActions = {
    addTile: (tile: TileDTO) => void
    editTile: (tileID: number, tileData: TileDTO) => void
    changeTileStatus: (tileID: number, newStatus: string) => void
    changeTileValue: (tileID: number, newValue: number) => void
    deleteTile: (tileID: number) => void
}
