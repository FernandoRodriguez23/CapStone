import { IoIosSunny } from "react-icons/io"



const General = ({info}) => {

    return (
        <div className="General">
            <h1>Today</h1>
            {info.dt == 1619982000}
            <IoIosSunny style={{ color: "orange", fontSize: "2rem" }} />
            <p> { info.temp.min }</p>
            <p> { info.temp.max }</p>
        </div>  
    );
}

export default General;