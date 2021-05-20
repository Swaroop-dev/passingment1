import React from "react";
import "./City.css";
import { Link } from "react-router-dom";

const CityComponent = ({ name, details, key1, id }) => {
  return (
    <div className="Card">
      <div className="CardComponent">
        <h3>{name}</h3>

        <button className="Button">
          <Link
            to={`/detail/${id}`}
            style={{ textDecoration: "none", color: "white" }}
          >
            details{" "}
          </Link>
        </button>
      </div>
    </div>
  );
};

export default CityComponent;
