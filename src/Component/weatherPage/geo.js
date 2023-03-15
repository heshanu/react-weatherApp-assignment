import React, { useState, useEffect } from "react";
import fetchData from "./fetchData";
import Weather3days from "../../template/weather3days";
import Weatherweek from "../../template/weatherweek";

import db from "../../utils/weather4days.json";

const Geo = () => {
  const [location, setLocation] = useState("");
  const [latitude, setLatitude] = useState("6.1395");
  const [longtitude, setLongtitude] = useState("80.1063");
  const [sLocation, setSLocation] = useState(true);
  const [showLocation, setShowLocation] = useState(true);

  const [apiData, setApiData] = useState({});
  const [apiData1, setApiData1] = useState([]);
  const [apiData2, setApiData2] = useState([]);

  const [getState, setGetState] = useState("colombo");
  const [state, setState] = useState("colombo");

  const [getState1, setGetState1] = useState("");
  const [state1, setState1] = useState("");

  const [store3days, setStore3days] = useState(db);

  //const url ="https://pro.openweathermap.org/data/2.5/forecast/hourly?lat=latitude&lon=longtitude&appid=process.env.REACT_APP_WEATHER_API_KEY";
  //const apiKey = process.env.REACT_APP_WEATHER_API_KEY;
  const apiKey = "3088d6ae04c9fcf5da6c42d54fe54922";
  const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${state}&appid=${apiKey}`;

  const apiUrl1 = `http://api.weatherapi.com/v1/forecast.json?q=${latitude},${longtitude}&key=61701315568d4faaa22163510231303&days=0`;
  const handleSubmit = (e) => {
    e.preventDefault();
    if (location) {
      setLocation((l) => {
        return [location];
      });
      //setLatitude("");
      // setLongtitude("");
    } else if (latitude && longtitude) {
      //setLatitude(latitude);
      // setLongtitude(longtitude);
      console.log(latitude, longtitude);
    } else {
      alert("Please enter the location");
    }
  };

  const clearValues = () => {
    setLatitude("");
    setLongtitude("");
    setGetState("");
  };
  var projectStyle = {
    width: 300,
    height: 300,
    border: 10,
    backgroundColor: "blue",
  };

  const resetValues = () => {
    setShowLocation(true);
    setSLocation(true);
  };

  const inputHandler = (event) => {
    setGetState(event.target.value);
    setShowLocation(false);
  };

  const inputLongitude = (event) => {
    setLongtitude(event.target.value);
    setSLocation(false);
  };

  const inputLatitude = (event) => {
    setLatitude(event.target.value);
    setSLocation(false);
  };

  const submitHandler = () => {
    setState(getState);
    setState1(getState1);
    setLatitude(latitude);
    setLongtitude(longtitude);
    setApiData2(apiData1.json());
  };

  const kelvinToFarenheit = (k) => {
    return (k - 273.15).toFixed(2);
  };
  //today weather
  useEffect(() => {
    fetch(apiUrl)
      .then((res) => res.json())
      .then((data) => setApiData(data));
    //console.log(JSON.stringify(apiData));
  }, [apiUrl]);

  //3days weather
  useEffect(() => {
    fetch(apiUrl1)
      .then((res) => res.json())
      .then((data) => setApiData1(data));
    //console.log(apiData1);
  }, [apiUrl1]);

  return (
    <div className="App">
      <header className="d-flex justify-content-center align-items-center">
        <h2>React Weather App</h2>
      </header>
      <div className="container">
        <div className="mt-3 d-flex flex-column justify-content-center align-items-center">
          <div className="col-auto">
            <label className="col-form-label">Enter Location :</label>
          </div>
          <div className="col-auto">
            {sLocation && (
              <input
                type="text"
                id="location-name"
                className="form-control"
                onChange={inputHandler}
                value={getState}
                placeholder="Enter Location"
              />
            )}

            {showLocation && (
              <input
                placeholder="Enter Latitude"
                type="text"
                id="location-name"
                className="form-control"
                onChange={inputLatitude}
                value={latitude}
              />
            )}

            {showLocation && (
              <input
                placeholder="Enter Longitude"
                type="text"
                id="location-name"
                className="form-control"
                onChange={inputLongitude}
                value={longtitude}
              />
            )}
          </div>
          {
            <button className="btn btn-primary mt-2" onClick={submitHandler}>
              Search
            </button>
          }

          <button className="btn btn-danger mt-2" onClick={clearValues}>
            Clear
          </button>

          <button className="btn btn-info mt-2" onClick={resetValues}>
            ReSet
          </button>
        </div>

        <div className="card mt-3 mx-auto" style={{ width: "60vw" }}>
          {/*console.log(apiData.forecast.forecastday[0].date)*/}
          {sLocation &&
            (apiData.main ? (
              <div className="card-body text-center">
                <img
                  src={`http://openweathermap.org/img/w/${apiData.weather[0].icon}.png`}
                  alt="weather status icon"
                  className="weather-icon"
                />

                <p className="h2">
                  {kelvinToFarenheit(apiData.main.temp)}&deg; C
                </p>

                <p className="h5">
                  <i className="fas fa-map-marker-alt"></i>{" "}
                  <strong>{apiData.name}</strong>
                </p>

                <div className="row mt-4">
                  <div className="col-md-6">
                    <p>
                      <i className="fas fa-temperature-low "></i>{" "}
                      <strong>
                        {kelvinToFarenheit(apiData.main.temp_min)}&deg; C
                      </strong>
                    </p>
                    <p>
                      <i className="fas fa-temperature-high"></i>{" "}
                      <strong>
                        {kelvinToFarenheit(apiData.main.temp_max)}&deg; C
                      </strong>
                    </p>
                  </div>
                  <div className="col-md-6">
                    <p>
                      {" "}
                      <strong>{apiData.weather[0].main}</strong>
                    </p>
                    <p>
                      <strong>
                        {" "}
                        {/*countries.getName(apiData.sys.country, "en", {
                        select: "official",
                      })*/}
                      </strong>
                    </p>
                  </div>
                </div>
              </div>
            ) : (
              <>
                <h1>Loading locations</h1>
                <p>Please Retry!</p>
              </>
            ))}
        </div>
        <div className="card mt-3 mx-auto" style={{ width: "60vw" }}>
          <h2>Coordinate Weather</h2>
          {//console.log(apiData2.forecast.forecastday[0].date)
          //JSON.stringify(apiData2.current)
          (apiData2.current.condition.text).json()
          //setApiData2(JSON.parse(apiData1))
          // console.log()
          }
          {/*apiData1.main ? (
            <div className="card-body text-center">
              <img
                src={`http://openweathermap.org/img/w/${apiData.weather[0].icon}.png`}
                alt="weather status icon"
                className="weather-icon"
              />

              <p className="h2">
                {kelvinToFarenheit(apiData.main.temp)}&deg; C
              </p>

              <p className="h5">
                <i className="fas fa-map-marker-alt"></i>{" "}
                <strong>{apiData.name}</strong>
              </p>

              <div className="row mt-4">
                <div className="col-md-6">
                  <p>
                    <i className="fas fa-temperature-low "></i>{" "}
                    <strong>
                      {kelvinToFarenheit(apiData.main.temp_min)}&deg; C
                    </strong>
                  </p>
                  <p>
                    <i className="fas fa-temperature-high"></i>{" "}
                    <strong>
                      {kelvinToFarenheit(apiData.main.temp_max)}&deg; C
                    </strong>
                  </p>
                </div>
                <div className="col-md-6">
                  <p>
                    {" "}
                    <strong>{apiData.weather[0].main}</strong>
                  </p>
                  <p>
                    <strong>
                      {" "}
                      
                    </strong>
                  </p>
                </div>
              </div>
            </div>
          ) : (
            <>
              <h1>Loading locations</h1>
              <p>Please Retry!!!!</p>
            </>
          )*/}
        </div>
      </div>
      {/*<Weather3days apiData1={apiData1}/>*/}
    </div>
  );
};
export default Geo;
