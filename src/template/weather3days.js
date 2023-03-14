import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import "./template.css";

const Weather3days = ({ store3days }) => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-sm">
          {/*windSpeed{JSON.stringify(store3days.list[0].wind.speed)}Kmph*/}
          <br />
          {/*countryName{JSON.stringify(store3days.city.country)}*/}
          <br />
          {/*cityName{JSON.stringify(store3days.city.name)}*/}
          {store3days.list[0].weather.map((m, index) => {
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
          })}
        </div>

        <div className="col-sm">
          {/*windSpeed{JSON.stringify(store3days.list[0].wind.speed)}Kmph*/}
          <br />
          {/*countryName{JSON.stringify(store3days.city.country)}*/}
          <br />
          {/*cityName{JSON.stringify(store3days.city.name)}*/}
          {store3days.list[1].weather.map((m, index) => {
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
                        <Card.Text>{store3days.list[1].main.temp}C</Card.Text>
                        <Card.Text>{m.description}</Card.Text>
                        <Card.Text>{store3days.list[1].dt_txt}</Card.Text>
                        <Button variant="primary">Go somewhere</Button>
                      </Card.Body>
                    </Card>
                  </div>
                }
              </div>
            );
          })}
        </div>

        <div className="col-sm">
          {/*windSpeed{JSON.stringify(store3days.list[0].wind.speed)}Kmph*/}
          <br />
          {/*countryName{JSON.stringify(store3days.city.country)}*/}
          <br />
          {/*cityName{JSON.stringify(store3days.city.name)}*/}
          {store3days.list[2].weather.map((m, index) => {
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
                        <Card.Text>{store3days.list[2].main.temp}C</Card.Text>
                        <Card.Text>{m.description}</Card.Text>
                        <Card.Text>{store3days.list[2].dt_txt}</Card.Text>
                        <Button variant="primary">Go somewhere</Button>
                      </Card.Body>
                    </Card>
                  </div>
                }
              </div>
            );
          })}
        </div>
      </div>
      <hr />
    </div>
  );
};

export default Weather3days;
