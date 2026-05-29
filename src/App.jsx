import { useState } from "react";
import "./App.css";

function App() {
  const [rating, setRating] = useState(0);

  return (
    <div
      style={{
        textAlign: "center",
        marginTop: "50px",
        fontFamily: "Arial, sans-serif",
      }}
    >
      <h1>Star Rating App</h1>

      <div>
        {[1, 2, 3, 4, 5].map((star) => (
          <span
            key={star}
            onClick={() => setRating(star)}
            style={{
              fontSize: "50px",
              cursor: "pointer",
              color: star <= rating ? "gold" : "grey",
            }}
          >
            ★
          </span>
        ))}
      </div>

      <p>Your rating: {rating} stars</p>
    </div>
  );
}

export default App;