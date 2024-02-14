import { SvgIconProps } from "@mui/material/SvgIcon"

export type TMainMenuType = {
    Key: string
    Title: string,
    Url: string,
    Icon: any,
    SubMenu: TSubMenuType[],
    IsExpand: boolean
}

export type TSubMenuType = {
    Key: string
    Title: string,
    Url: string,
    Icon: SvgIconProps  
}

