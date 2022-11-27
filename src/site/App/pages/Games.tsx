import React from "react";

export const Games = () => (
  <div className="app-page">
    <h1>Games</h1>
    <div
      className="app-game-card"
      onClick={() => {
        location.href = "games/snake";
      }}
    >
      <h2>Snake</h2>
      <p>Control the snake and try to eat as many apples as possible.</p>
      <p>Game-over when the snake eats itself.</p>
      <p>(Click box to play)</p>
    </div>
  </div>
);
