export interface Base {
    id: number
    name: string
    desc: string | null
    createdTS: Date
    lastEditedTS: Date | null
}

export interface DTO {
    name: string
    desc: string | null
}