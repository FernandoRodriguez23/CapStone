
const Day = ({tops, index}) => {
    return (
        <div className="day">
            <h1> {index} </h1>
            <p>{tops.temp.min}</p>
            <p>{tops.temp.max}</p>
            <p></p>
        </div>
    )
}

export default Day
