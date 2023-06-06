import "./App.css";
import Navbar from "./components/Navbar";
import Grid from "./components/grid";
import Card from "./components/Card";

import cardImg1 from "./img/experience1.jpg";
import cardImg2 from "./img/experience2.jpg";
import cardImg4 from "./img/experience4.jpg";
import cardImg5 from "./img/experience5.jpg";
import cardImg6 from "./img/experience6.jpg";

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
        img={cardImg6}
        // availability= {0}
        rating={4.8}
        reviewCount={0}
        country="USA"
        title="Group Mountain Biking"
        price="50"
      />

      <Card
        img={cardImg4}
        availability= {0}
        rating={5.0}
        reviewCount={6}
        country="USA"
        title="Life lessons with Katie Zaferes"
        price="136"
      />

      <Card
        img={cardImg5}
        availability= {0}
        rating={5.0}
        reviewCount={30}
        country= "USA"
        title= "Learn wedding photography"
        price= "125"
      />


  </div>
    </div>

  );
}

export default App;
