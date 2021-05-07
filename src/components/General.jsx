import { IoIosSunny } from "react-icons/io"



const General = ({info}) => {

    return (
        <div className="General">
            
            {info.dt === 1619982000 && <h2>Monday</h2>}
            {info.dt === 1620068400 && <h2>Tuesday</h2>}
            {info.dt === 1620154800 && <h2>Wednesday</h2>}
            {info.dt === 1620241200 && <h2>Thursday</h2>}
            {info.dt === 1620327600 && <h2>Friday</h2>}
            {info.dt === 1620414000 && <h2>Saturday</h2>}
            {info.dt === 1620500400 && <h2>Sunday</h2>}
            {info.dt === 1620586800 && <h2>Next Monday</h2>}

            <IoIosSunny style={{ color: "orange", fontSize: "2rem" }} />
            <p> Min- { info.temp.min }°</p>
            <p> Max- { info.temp.max }°</p>
        </div>  
    );
}

export default General;