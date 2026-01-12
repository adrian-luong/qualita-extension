import { Base, DTO } from "./base.interface";

interface PanelFields {
    tileTags: string[]
    tileStatuses: string[]
}

export interface Panel extends Base, PanelFields {}

export interface PanelDTO extends DTO, PanelFields {}