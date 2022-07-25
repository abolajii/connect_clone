import React from "react";
import { Steps, Header, Hero, Details, Footer } from "./components";

import car1 from "./assets/imgbg.svg";
import car2 from "./assets/imgsm.svg";
import car3 from "./assets/imggsm.svg";

import deal1 from "./assets/dealbg.svg";
import deal2 from "./assets/dealsm.svg";
import deal3 from "./assets/deal.svg";

import estate1 from "./assets/estatebg.svg";
import estate2 from "./assets/estatesm.svg";
import estate3 from "./assets/estate.svg";

import event1 from "./assets/eventbg.svg";
import event2 from "./assets/eventsm.svg";
import event3 from "./assets/event.svg";

import business1 from "./assets/businessbg.svg";
import business2 from "./assets/businesssm.svg";
import business3 from "./assets/business.svg";

const App = () => {
  return (
    <div>
      <Header />
      <Hero />
      <Details title="cars" imgOne={car1} imgTwo={car2} imgThree={car3} />
      <Details
        title="deals"
        imgOne={deal1}
        imgTwo={deal2}
        imgThree={deal3}
        bg="#e5e5e5"
      />
      <Details
        title="real estate"
        imgOne={estate1}
        imgTwo={estate2}
        imgThree={estate3}
      />
      <Details
        title="events"
        imgOne={event1}
        imgTwo={event2}
        bg="#e5e5e5"
        imgThree={event3}
      />
      <Details
        title="businesses"
        imgOne={business1}
        imgTwo={business2}
        imgThree={business3}
      />
      <Steps />
      <Footer />
    </div>
  );
};

export default App;
