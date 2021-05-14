import General  from "./components/General";
import data from "./weather.json"
import Day from "./components/Day"



function App() {
  return (
    <div className="container fluid">
      {data.daily.map((day)=>(
        <General info={day} />
      ))}
      {/* {data.daily.map((day, index)=>(
        <Day tops={day} id={index}/>
      ))} */}
      <div className="lat">
        {data.daily.map((lat) => (
          General info
        ))}
      </div>
    </div>
  );
}

export default App;
