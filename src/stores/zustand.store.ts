import { create } from 'zustand'

import { ZustandActions, ZustandState } from './store.types'
import { Tile } from '@/models/tile.interface';

const useZustandStore = create<ZustandState & ZustandActions>((set) => ({
    panel: {
        id: 0,
        name: 'Default Panel',
        desc: 'Created for testing purpose, not an actual project panel',
        tileTags: ['test'],
        tileStatuses: ['To-Do', 'Doing', 'Done'],
        createdTS: new Date(),
        lastEditedTS: null
    },
    tiles: [{
        id: 0,
        name: 'Test task tile',
        desc: 'Created for testing purpose, not an actual task',
        tags: ['test'],
        status: 'To-Do',
        value: 0, 
        panelID: 0,
        createdTS: new Date(),
        lastEditedTS: null
    }],

    addTile: (tile) => set((state) => {
        const now = new Date();
        const madeTile: Tile = {
            ...tile,
            id: state.tiles.length + 1,
            createdTS: now, lastEditedTS: now
        }
        const tileList = [...state.tiles, madeTile]
        return { ...state, tiles: tileList }
    }),

    editTile: (tileID, tileData) => set((state) => {
        const now = new Date();
        const tileIndex = state.tiles.findIndex(tile => tile.id === tileID);
        if (tileIndex > -1) {
            const foundTile = state.tiles[tileIndex]
            const editedTile: Tile = { ...foundTile, ...tileData, lastEditedTS: now }
            state.tiles[tileIndex] = editedTile
            return { ...state, tiles: state.tiles }
        }
        return state
    }),

    changeTileStatus: (tileID, newStatus) => set((state) => {
        const now = new Date();
        const tileIndex = state.tiles.findIndex(tile => tile.id === tileID);
        if (tileIndex > -1) {
            const foundTile = state.tiles[tileIndex]
            const editedTile: Tile = { ...foundTile, status: newStatus, lastEditedTS: now }
            state.tiles[tileIndex] = editedTile
            return { ...state, tiles: state.tiles }
        }
        return state
    }),

    changeTileValue: (tileID, newValue) => set((state) => {
        const now = new Date();
        const tileIndex = state.tiles.findIndex(tile => tile.id === tileID);
        if (tileIndex > -1) {
            const foundTile = state.tiles[tileIndex]
            const editedTile: Tile = { ...foundTile, value: newValue, lastEditedTS: now }
            state.tiles[tileIndex] = editedTile
            return { ...state, tiles: state.tiles }
        }
        return state
    }),

    deleteTile: (tileID) => set((state) => {
        const tileList = state.tiles.filter(tile => tile.id !== tileID)
        return { ...state, tiles: tileList }
    })
}));
export default useZustandStore