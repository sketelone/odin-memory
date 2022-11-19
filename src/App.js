import React, {useEffect, useState, useRef} from "react";
import './App.css';
import Header from "./components/Header";
import Container from "./components/Container";


function App() {

  const [score, setScore] = useState(0);
  const [highScore, setHighScore] = useState(0);
  const [gameOver, setGameOver] = useState(false);
  const [drivers, setDrivers] = useState([
    {name: "Albono", src: require('./assets/albono.jpg'), clicked: false},
    {name: "Alonso", src: require('./assets/alonso.jpg'), clicked: false},
    {name: "Bottas", src: require('./assets/bottas.jpg'), clicked: false},
    {name: "Carlos", src: require('./assets/carlos.jpg'), clicked: false},
    {name: "Charles", src: require('./assets/charles.jpg'), clicked: false},
    {name: "Checo", src: require('./assets/checo.jpg'), clicked: false},
    {name: "Danny", src: require('./assets/danny.jpg'), clicked: false},
    {name: "Gasman", src: require('./assets/gasman.jpg'), clicked: false},
    {name: "George", src: require('./assets/george.jpg'), clicked: false},
    {name: "Lance", src: require('./assets/lance.jpg'), clicked: false},
    {name: "Lando", src: require('./assets/lando.jpg'), clicked: false},
    {name: "Lewis", src: require('./assets/lewis.jpg'), clicked: false},
    {name: "Magnusson", src: require('./assets/magnusson.jpg'), clicked: false},
    {name: "Max", src: require('./assets/max.jpg'), clicked: false},
    {name: "Mick", src: require('./assets/mick.jpg'), clicked: false},
    {name: "Nick", src: require('./assets/nick.jpg'), clicked: false},
    {name: "Ocon", src: require('./assets/ocon.jpg'), clicked: false},
    {name: "Seb", src: require('./assets/seb.jpg'), clicked: false},
    {name: "Yuki", src: require('./assets/yuki.jpg'), clicked: false},
    {name: "Zhou", src: require('./assets/zhou.jpg'), clicked: false},  
  ]);

  useEffect(() => {
    const handleClick = (e) => {
      console.log("change click")
      //handle click
      let nextDrivers = drivers.map(driver => {
        if (e.target.id === driver.name && driver.clicked === false) {
          return {
            ...driver,
            clicked: true,
          };
        } else if (e.target.id === driver.name && driver.clicked === true) {
          setGameOver(true);
          return driver;
        } else {
          return driver;
        };
      });

      let currentIndex = nextDrivers.length, randomIndex;
      while (currentIndex !== 0) {
        randomIndex = Math.floor(Math.random()*currentIndex);
        currentIndex--;

        [nextDrivers[currentIndex], nextDrivers[randomIndex]] = [
          nextDrivers[randomIndex], nextDrivers[currentIndex]];
      }

      setDrivers(nextDrivers);
    }

    // console.log("add listeners")
    drivers.forEach(driver => {
      document.getElementById(driver.name).addEventListener("click", handleClick);
    })

    return () => {
      // console.log("remove listeners")
      drivers.forEach(driver => {
        document.getElementById(driver.name).addEventListener("click", handleClick);
      })
    };
  },[drivers])

  useEffect(()=> {
    const incrementScore = () => {
      console.log("increment score")
      setScore(score + 1);
    }

    for (var i=0; i<drivers.length; i++) {
      if (drivers[i].clicked === true) {
        incrementScore();
      }
    }
  },[drivers])

  useEffect(() => {
    console.log(gameOver)
    //check if game is over
    if(gameOver) {
      newHighScore();
      setScore(0);
      setGameOver(()=>false);
      let nextDrivers = drivers.map(driver => {
        if (driver.clicked === true) {
          return {
            ...driver,
            clicked: false,
          };
        } else {
          return driver;
        };
      });
      setDrivers(nextDrivers);
    }
  },)



  const newHighScore = () => {
    if(score > highScore) {
      console.log("set high score")
      setHighScore(score);
    }
  }

  return (
    <div className="App">
      <Header score={score} highScore={highScore}/>
      <Container drivers = {drivers}/>
    </div>
  );
}

export default App;
