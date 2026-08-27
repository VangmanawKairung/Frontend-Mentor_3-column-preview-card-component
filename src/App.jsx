import "./App.css";
import Card from "./components/Card";
import Footer from "./components/Footer";

import iconLuxuryCar from "./assets/icon-luxury.svg";
import iconSedansCar from "./assets/icon-sedans.svg";
import iconSuvsCar from "./assets/icon-suvs.svg";

const CAR_DATA = [
  {
    id: 1,
    title: "Sedans",
    description:
      "Choose a sedan for its affordability and excellent fuel economy. Ideal for cruising in the city or on your next road trip.",
    icon: iconSedansCar,
    link: "#",
    theme: "orange",
  },
  {
    id: 2,
    title: "SUVs",
    description:
      "Take an SUV for its spacious interior, power, and versatility. Perfect for your next family vacation and off-road adventures.",
    icon: iconSuvsCar,
    link: "#",
    theme: "teal",
  },
  {
    id: 3,
    title: "Luxury",
    description:
      "Cruise in the best car brands without the bloated prices. Enjoy the enhanced comfort of a luxury rental and arrive in style.",
    icon: iconLuxuryCar,
    link: "#",
    theme: "dark-green",
  },
];

function App() {
  return (
    <>
      <main className="cards-grid">
        {CAR_DATA.map((car) => (
          <Card
            key={car.id}
            title={car.title}
            description={car.description}
            icon={car.icon}
            link={car.link}
            theme={car.theme}
          />
        ))}
      </main>
      <Footer />
    </>
  );
}

export default App;
