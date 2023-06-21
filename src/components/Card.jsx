const Card = ({name, image, color}) => {
    return (
        <>
            <div style={{ backgroundColor: color }} className="card">
                <img width="auto" border={color} height="100" src={image}/>
                <p>{name}</p>
            </div>
        </>
)}

export default Card;