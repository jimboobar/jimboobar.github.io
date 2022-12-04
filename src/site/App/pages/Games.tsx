import React from "react";

export const Games = () => (
  <div className="app-page">
    <h1>Games</h1>
    <div>
      <h2>Snake</h2>
      <p>Be the snake, eat the apples, but do not eat yourself!</p>
      <p>
        <a href="/games/snake">Play Snake!</a>
      </p>
    </div>
    <div>
      <h2>Pong 50 CE (in-progress)</h2>
      <p>A 50 year celebration edition of Pong.</p>
      <p>
        Pong is a table tennis themed sports game that was released in November
        29, 1972,{" "}
        <a href="https://en.wikipedia.org/wiki/Pong">
          https://en.wikipedia.org/wiki/Pong
        </a>
        .
      </p>
    </div>
  </div>
);
