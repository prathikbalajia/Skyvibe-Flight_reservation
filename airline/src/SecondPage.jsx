import React from "react";
import FlightOption from "./FlightOption";
import "./SecondPage.css";
const flights = [
  {
    from: "Coimbatore",
    to: "Mumbai",
    date: "26 April 2025",
    time: "6.30am",
    prize: "₹5,957",
    image: "/flight17.png",
    description: "Traveling from Coimbatore to Mumbai isn’t just about distance, it’s about new horizons.!",
    flightClass:"First Class"
  },
  {
    from: "Kochi",
    to: "Bengaluru",
    date: "15 April 2025",
    time: "10.15am",
    prize: "₹8,572",
    image: "/flight12.jpg",
    description: "🌿From coastal breezes to city lights, let the journey from Kochi to Bangalore inspire you.",
    flightClass:"Economy"
  },
  {
    from: "Trichy",
    to: "Chennai",
    date: "20 April 2025",
    time: "1.45pm",
    prize: "₹2,599",
    image: "/flight14.jpg",
    description: "Boarding in Trichy, landing in Chennai—one journey, endless opportunities.",
    flightClass:"Economy"
  },
  {
    from: "Hyderabad",
    to: "Goa",
    date: "10 April 2025",
    time: "8.15am",
    prize: "₹98,467",
    image: "/flight7.jpg",
    description: "Board in the city of pearls, land in the paradise of sands—Goa is just a flight away!",
    flightClass:"Business"
  },
  {
    from: "Chennai",
    to: "Srinagar",
    date: "12 April 2025",
    time: "11.15am",
    prize: "₹20,545",
    image: "/flight11.jpg",
    description: "From the shores of Chennai to the peaks of Srinagar, every mile tells a story.",
    flightClass:"Premium Economy"
  },
  {
    from: "Kolkata",
    to: "Dhaka",
    date: "27 April 2025",
    time: "9.30am",
    prize: "₹20,444",
    image: "/flight13.jpg",
    description: "Crossing borders, embracing cultures—Kolkata to Dhaka, a journey to remember.",
    flightClass:"First Class"
  },
  {
    from: "Aurangabad",
    to: "Pune",
    date: "30 April 2025",
    time: "11.45am",
    prize: "₹13,480",
    image: "/flight15.jpg",
    description: "A seamless journey from Aurangabad to Pune ensures productivity and efficiency—because time is the most valuable asset.",
    flightClass:"Economy"
  },
  {
    from: "Bangalore",
    to: "Delhi",
    date: "16 April 2025",
    time: "7.30am",
    prize: "₹8,699",
    image: "/flight9.jpg",
    description: "Bangalore’s energy, Delhi’s history—travel is the bridge between stories.",
    flightClass:"First Class"
  },
  {
    from: "New Delhi",
    to: "Colombo",
    date: "18 April 2025",
    time: "6.15am",
    prize: "₹10,550",
    image: "/flight16.jpg",
    description: "From Delhi’s bustling streets to Colombo’s serene shores, let the journey redefine your perspective on travel and discovery.",
    flightClass:"Economy"
  },
  {
    from: "Tuticorin",
    to: "Coimbatore",
    date: "19 April 2025",
    time: "9.45am",
    prize: "₹3,295",
    image: "/flight9.jpg",
    description: "From Tuticorin’s coastal charm to Coimbatore’s vibrant cityscape, redefining the way you travelry.",
    flightClass:"Economy"
  },
  {
    from: "Mangalore",
    to: "Hyderabad",
    date: "29 April 2025",
    time: "7.45am",
    prize: "₹4,398",
    image: "/flight28.jpg",
    description: "From Mangalore’s coastal beauty to Hyderabad’s bustling streets, embark on a journey where tradition meets innovation, making every mile memorable.",
    flightClass:"Economy"
  },
  {
    from: "Chennai",
    to: "Goa",
    date: "19 April 2025",
    time: "7.30am",
    prize: "₹20,117",
    image: "/flight12.jpg",
    description: "From Chennai’s dynamic cityscape to Goa’s tranquil shores, experience a seamless journey where urban energy meets coastal allure, creating the perfect getaway.",
    flightClass:"Premium Economy"
  },
  {
    from: "Madurai",
    to: "Chennai",
    date: "15 April 2025",
    time: "8.30am",
    prize: "₹5,567",
    image: "/flight11.jpg",
    description: "🌿 From temple town serenity to metropolitan buzz, let the journey from Madurai to Chennai uplift your spirit.",
    flightClass:"Economy"
  },
  {
    from: "Coimbatore",
    to: "Chennai",
    date: "17 April 2025",
    time: "10.45am",
    prize: "₹3,245",
    image: "/flight34.jpg",
    description: "From the lush greenery of the Western Ghats to the bustling streets of Tamil Nadu’s capital.",
    flightClass:"Economy"
  },
  {
    from: "Bengaluru",
    to: "Mumbai",
    date: "23 April 2025",
    time: "6.45am",
    prize: "₹9,367",
    image: "/flight35.jpg",
    description: "From the tech hub of India to the financial capital of the nation, embark on a seamless journey from Bengaluru to Mumbai.",
    flightClass:"First Class"
  },
];

const SecondPage = () => {
  return (
    <div className="secondpage" style={{ backgroundColor: "aliceblue" }}>
      <div className="flightcontainer">
        {flights.map((flight, index) => (
          <FlightOption key={index} {...flight} />
        ))}
      </div>
    </div>
  );
};

export default SecondPage;
