import { Icon } from "leaflet"
import red from '../assets/blackIcon.png'
import black from '../assets/redIcon.png'
export const blackIcon = new Icon({
    iconUrl: red,
    iconSize: [32, 32]
})

export const redIcon = new Icon({
    iconUrl: black,
    iconSize: [32, 32]
})