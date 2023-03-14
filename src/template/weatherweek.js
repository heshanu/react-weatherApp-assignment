import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import "./template.css";
import week from ".././utils/weatheweek.js";

const Weatherweek = () => {
  const [weekWeather, setWeekWeather] = React.useState(week);

  return (
    <div className="container">
      <div className="row">
        <div className="col-sm">
          <h1>Weekly Weather!</h1>
          {JSON.stringify(weekWeather)}
          {/*weekWeather.list[0].weather.map((m, index) => {
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
                        <Card.Title>{weekWeather.city.country}</Card.Title>
                        <Card.Text>{weekWeather.list[0].main.temp}</Card.Text>
                        <Card.Text>{m.description}</Card.Text>
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
    </div>
  );
};

export default Weatherweek;
