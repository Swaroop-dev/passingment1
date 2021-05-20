import { useState } from "react";
import "./App.css";
import { search } from "./Components/apiCalls";
import CityComponent from "./Components/City";

import Autocomplete from "./Autocomplete";
import { citylist } from "./Components/Citylist";

const App = () => {
  const [data, setData] = useState([]);
  const [list, setlist] = useState([]);

  const handleChange = (e) => {
    setData(e.target.value);
  };
  const handleSubmit = (dat) => {
    console.log(dat);
    search(dat).then((d) => setlist(d));
  };

  return (
    <div className="Imgtag">
      <h1 style={{ textAlign: "center" }}>Search for the place</h1>
      <div className="wrap">
        
        <Autocomplete suggestions={citylist} clickHandle={handleSubmit} />
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
