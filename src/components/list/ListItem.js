import {getSpecialStyle} from "./helpers";
import './style.css'

export const ListItem = ({item}) => (
    <div className={`item${getSpecialStyle(item)}`}>
        {item}
    </div>
)
