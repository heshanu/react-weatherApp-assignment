import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import "./template.css";

const Weather3days = ({ apiData1 }) => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-sm">
          {JSON.stringify(apiData1)}
          {/*apiData1.list[0].weather.map((m, index) => {
            return (
              <div key={index}>
                {
                  <div>
                    <Card style={{ width: "18rem" }}>
                      <Card.Img
                        alt="weather status icon"
                        className="weather-icon"
                        variant="top"
                        src={`http://openweathermap.org/img/w/${m.icon}.png`}
                      />
                      <Card.Body>
                        <Card.Title>{store3days.city.country}</Card.Title>
                        <Card.Text>{store3days.list[0].main.temp}C</Card.Text>
                        <Card.Text>{m.description}</Card.Text>
                        <Card.Text>{store3days.list[0].dt_txt}</Card.Text>

                        <Button variant="primary">Go somewhere</Button>
                      </Card.Body>
                    </Card>
                  </div>
                }
              </div>
            );
          })*/}
        </div>
      </div>
      <hr />
    </div>
  );
};

export default Weather3days;
