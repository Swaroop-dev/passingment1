import { useState } from "react";
import "./App.css";
import { search} from "./Components/apiCalls";
import CityComponent from "./Components/City";
import logo from "./material-icon-2155442_960_720.png";
import Autocomplete from "./Autocomplete"
import {citylist} from "./Components/Citylist";

const App = () => {
  const [data, setData] = useState([]);
  const [list, setlist] = useState([]);

  const handleChange = (e) => {
    setData(e.target.value);
  };
  const handleSubmit = (dat) => {
    search(dat).then((d) => setlist(d));
  };


  return (
    <div className="Imgtag">
      <h1 style={{ textAlign: "center" }}>Search for the place</h1>
      <div className="wrap">
        <div className="search">
          <input
            type="text"
            value={data}
            onChange={(e) => handleChange(e)}
            className="searchTerm"
            placeholder="Which place are you looking for?"
          />
          <Autocomplete
            suggestions={citylist}
          />
          <button onClick={() => handleSubmit(data)} className="searchButton">
            <img src={logo} className="Image"></img>
          </button>
        </div>
        <div>
          {list !== undefined &&
            list.map((l, index) => (
              <CityComponent name={l.title} key1={index} id={l.woeid} />
            ))}
        </div>
      </div>
    </div>
  );
};

export default App;
