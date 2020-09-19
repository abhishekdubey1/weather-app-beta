import React, { useEffect, useState } from "react";
import "./App.css";
import Search from "./Search";
import Card from "./Card";
import ChartComponent from "./ChartComponent";
import Temperature from "./Temperature";
import Weather from "./Weather";
import Time from "./Time";
import Chart from "./assets/Chart";

function App() {
  const [temp, setTemp] = useState("");
  const [city, setCity] = useState("London");
  const [weekdata, setWeekdata] = useState("");
  const [sunRise, setsunRise] = useState("");
  const [sunSet, setsunSet] = useState("");
  const [charData, setCharData] = useState({});
  const currentDate = new Date();
  let ct = currentDate.getHours();
  // useEffect(() => {
  //   navigator.geolocation.getCurrentPosition(success, error);
  // }, []);
  // function success(position) {
  //   fetch(`https://cors-anywhere.herokuapp.com/api.openweathermap.org/data/2.5/onecall?lat=${position.coords.latitude}&lon=${position.coords.longitude}&
  //   exclude=current&appid=ac0a6285171a5e78cc8abcdf306c373e`).then((res) =>
  //     res.json()
  //   );
  // }
  // function error() {
  //   alert("Location not provided");
  // }
  useEffect(() => {
    fetch(
      `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=09d8037af632c119013c3f87b43072ea`
    )
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setTemp(Math.round(data.list[0].main.temp - 273));
        setWeekdata(data);
        // console.log(Math.round(weekdata.list[0].main.temp - 273), "hello");
        setsunRise(data.city.sunrise);
        setsunSet(data.city.sunset);
        setCharData({
          labels: [
            ct,
            ct + 3 > 24 ? ct + 3 - 24 : ct + 3,
            ct + 6 > 24 ? ct + 6 - 24 : ct + 6,
            ct + 9 > 24 ? ct + 9 - 24 : ct + 9,
            ct + 12 > 24 ? ct + 12 - 24 : ct + 12,
            ct + 15 > 24 ? ct + 15 - 24 : ct + 15,
            ct + 18 > 24 ? ct + 18 - 24 : ct + 18,
            ct + 21 > 24 ? ct + 21 - 24 : ct + 21
          ],
          // labels: ["a", "a", "a", "a", "a", "a", "a", "a"],
          datasets: [
            {
              label: "Temperature",
              data: [
                Math.round(weekdata.list[0].main.temp - 273),
                Math.round(weekdata.list[1].main.temp - 273),
                Math.round(weekdata.list[2].main.temp - 273),
                Math.round(weekdata.list[3].main.temp - 273),
                Math.round(weekdata.list[4].main.temp - 273),
                Math.round(weekdata.list[5].main.temp - 273),
                Math.round(weekdata.list[6].main.temp - 273),
                Math.round(weekdata.list[7].main.temp - 273)
              ],
              borderWidth: 1,
              borderColor: "rgb(0, 166, 250)",
              hoverBorderWidth: 3,
              hoverBorderColor: "rgba(0, 166, 250, 0.1)"
            }
          ]
        });
      })
      .catch((err) => {
        // alert("Please the City name you entered");
        console.log(err, "error");
      });
  }, [city]);

  const inputChanged = (inputValue) => {
    setCity(inputValue);
  };
  return (
    <div className="container">
      <Search inputChanged={inputChanged} />

      {/* <div className="section group" style={{ border: "1px solid black" }}> */}
      <div className="wrapper">
        <Card weekdata={weekdata} num={1} />
        <Card weekdata={weekdata} num={2} />
        <Card weekdata={weekdata} num={3} />
        <Card weekdata={weekdata} num={4} />
        <Card weekdata={weekdata} num={5} />
        <Card weekdata={weekdata} num={1} />
        <Card weekdata={weekdata} num={2} />
      </div>

      <Temperature temperature={temp} />
      <div className="chart-container">
        <Chart chardata={charData} />
        <ChartComponent weekdata={weekdata} />
        <Weather weekdata={weekdata} />

        <Time milliseconds={[sunRise, sunSet]} />
      </div>
    </div>
  );
}

export default App;
