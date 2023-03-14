import React, { useState, useEffect } from "react";
import fetchData from "./fetchData";
import Weather3days from "../../template/weather3days";
import Weatherweek from "../../template/weatherweek";

import db from "../../utils/weather4days.json";

const Geo = () => {
  const [location, setLocation] = useState("");
  const [latitude, setLatitude] = useState("");
  const [longtitude, setLongtitude] = useState("");

  const [apiData, setApiData] = useState({});
  const [apiData1, setApiData1] = useState({});

  const [getState, setGetState] = useState("colombo");
  const [state, setState] = useState("colombo");

  const [store3days, setStore3days] = useState(db);

  //const url ="https://pro.openweathermap.org/data/2.5/forecast/hourly?lat=latitude&lon=longtitude&appid=process.env.REACT_APP_WEATHER_API_KEY";
  //const apiKey = process.env.REACT_APP_WEATHER_API_KEY;
  const apiKey = "3088d6ae04c9fcf5da6c42d54fe54922";
  const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${state}&appid=${apiKey}`;

  const apiUrl1 = `https://api.openweathermap.org/data/2.5/forecast/hourly?lat=${latitude}&lon=${longtitude}&appid=${apiKey}`;
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(location);
    if (location) {
      setLocation((l) => {
        return [location];
      });
      setLatitude("");
      setLongtitude("");
    } else if (latitude && longtitude) {
      setLatitude(latitude);
      setLongtitude(longtitude);
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

  // useEffect(
  //   async (url) => {
  //     const fetchData=async()=>{
  //       const response = await fetch(url);
  //       const data = await response.json();
  //       setData(data);
  //       console.log(data);
  //       return data;
  //     }

  //     // const fetchData = async () => {
  //     //   // navigator.geolocation.getCurrentPosition(function (position) {
  //     //   //   setLatitude(position.coords.latitude);
  //     //   //   setLongtitude(position.coords.longitude);
  //     //   // });
  //     // await fetch(url)
  //     //   .then((res) => res.json())
  //     //   .then((result) => {
  //     //     setData(result);
  //     //     console.log(result);
  //     //   });
  //     // fetchData(latitude, longtitude).then((data) => {
  //     //   setData(data);
  //     //   console.log(data);
  //     // });
  //   },
  //   [latitude, longtitude]
  // );

  const inputHandler = (event) => {
    setGetState(event.target.value);
  };

  const inputLongitude = (event) => {
    setLongtitude(event.target.value);
  };

  const inputLatitude = (event) => {
    setLatitude(event.target.value);
  };

  const submitHandler = () => {
    setState(getState);
  };

  const submitHandler1 = () => {
    setState(getState);
  };

  const kelvinToFarenheit = (k) => {
    return (k - 273.15).toFixed(2);
  };
  //today weather
  useEffect(() => {
    fetch(apiUrl)
      .then((res) => res.json())
      .then((data) => setApiData(data));
    console.log(JSON.stringify(apiData));
  }, [apiUrl]);

  //3days weather
  useEffect(() => {
    if (longtitude && latitude) {
      fetch(apiUrl1)
        .then((res) => res.json())
        .then((data) => setApiData(data));
      console.log(JSON.stringify(apiData1));
    } else {
    }
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
            <input
              type="text"
              id="location-name"
              className="form-control"
              onChange={inputHandler}
              value={getState}
              placeholder="Enter Location"
            />
            <input
              placeholder="Enter Latitude"
              type="text"
              id="location-name"
              className="form-control"
              onChange={inputLatitude}
              value={latitude}
            />
            <input
              placeholder="Enter Longitude"
              type="text"
              id="location-name"
              className="form-control"
              onChange={inputLongitude}
              value={longtitude}
            />
          </div>
          {getState && (
            <button className="btn btn-primary mt-2" onClick={submitHandler}>
              Search
            </button>
          )}
          {longtitude && latitude && (
            <button className="btn btn-primary mt-2" onClick={submitHandler1}>
              Search
            </button>
          )}
          <button className="btn btn-danger mt-2" onClick={clearValues}>
            Clear
          </button>
        </div>

        <div className="card mt-3 mx-auto" style={{ width: "60vw" }}>
          {apiData.main ? (
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
              <h1>Loading</h1>
              <p>Please Retry!</p>
            </>
          )}
        </div>
      </div>
      <Weather3days store3days={store3days} />
    </div>
    // return (
    //   <>
    //     <article>
    //       <form className="form" onSubmit={handleSubmit}>
    //         <div className="form-control">
    //           <label htmlFor="location">Location:</label>
    //           <input
    //             type="text"
    //             id="location"
    //             name="location"
    //             value={location}
    //             onChange={(e) => setLocation(e.target.value)}
    //           />
    //         </div>
    //         <div className="form-control">
    //           <label htmlFor="lat">Latitude:</label>
    //           <input
    //             type="text"
    //             id="Latitude"
    //             name="Latitude"
    //             value={latitude}
    //             onChange={(e) => setLatitude(e.target.value)}
    //           />
    //         </div>
    //         <div className="form-control">
    //           <label htmlFor="location">longitude:</label>
    //           <input
    //             type="text"
    //             id="longtitude"
    //             name="longtitude"
    //             value={longtitude}
    //             onChange={(e) => setLongtitude(e.target.value)}
    //           />
    //         </div>
    //         <button type="submit">Search Weather</button>
    //       </form>

    //       {/*data.map((index, d) => {
    //         return (
    //           <div key={d} style={projectStyle}>
    //             <h1>{}</h1>
    //           </div>
    //         );
    //       })*/}
    //     </article>
    //     <Weather3days data={apiData} />
    //     <button>Here</button>
    //   </>
    //);
  );
};
export default Geo;
