import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

const Weather3days = ({ store3days }) => {
  return (
    <div className="c">
      <>
        <div>
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
                        <Card.Text>{store3days.list[0].main.temp}</Card.Text>
                        <Card.Text>{m.description}</Card.Text>
                        <Button variant="primary">Go somewhere</Button>
                      </Card.Body>
                    </Card>
                  </div>
                }
              </div>
            );
          })}
        </div>
        <div>
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
                        <Card.Text>{store3days.list[1].main.temp}</Card.Text>
                        <Card.Text>{m.description}</Card.Text>
                        <Button variant="primary">Go somewhere</Button>
                      </Card.Body>
                    </Card>
                  </div>
                }
              </div>
            );
          })}
        </div>

        <div>
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
                        <Card.Text>{store3days.list[2].main.temp}</Card.Text>
                        <Card.Text>{m.description}</Card.Text>
                        <Button variant="primary">Go somewhere</Button>
                      </Card.Body>
                    </Card>
                  </div>
                }
              </div>
            );
          })}
        </div>
        {/*store3days.list.weather.map((m, index) => {
          return (
            <>
              {m.main}
              {m.description}
            </>
          );
        })*/}
      </>
    </div>
  );
};

export default Weather3days;
