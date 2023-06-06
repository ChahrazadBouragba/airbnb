import "./App.css";
import Navbar from "./components/Navbar";
import Grid from "./components/grid";
import Card from "./components/Card";

import cardImg1 from "./img/card1.png";
import cardImg2 from "./img/wedding-photography 1.png";
import cardImg3 from "./img/mountain-bike 1.png";

function App() {
  return (
    <div className="airbnb">
      <Navbar />
      <Grid />


    <div className="container--wrapper">
      <Card
        img={cardImg1}
        availability= {0}
        rating={5.0}
        reviewCount={6}
        country="USA"
        title="Life lessons with Katie Zaferes"
        price="136"
      />

      <Card
        img={cardImg2}
        availability= {1}
        rating={5.0}
        reviewCount={30}
        country= "USA"
        title= "Learn wedding photography"
        price= "125"
      />

      <Card
        img={cardImg3}
        // availability= {0}
        rating={4.8}
        reviewCount={2}
        country="USA"
        title="Group Mountain Biking"
        price="50"
      />

  </div>
    </div>

  );
}

export default App;
