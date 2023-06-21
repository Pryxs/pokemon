import { hex2rgba } from "../helpers/colorHelper";

const Card = ({ name, image, color }) => (
    <div style={{ backgroundColor: color }} className="card">
        <div style={{ backgroundColor: hex2rgba(color, 1) }} className="image">
            <img width="auto" border={color} height="100" src={image} />
        </div>
        <p>{name}</p>
    </div >
)

export default Card;