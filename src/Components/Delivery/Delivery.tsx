import styles from "./Delivery..module.scss";
// import Title from "./Title";

const Delivery = () => {
  return (
    <div className="container">
      {/* <Title type="h2" marginDisabled={false}> */}
      <h2 className={styles.delivery__section_main_header}>
        Доставка и оплата
      </h2>
      {/* </Title> */}

      <div className={styles.delivery__section}>
        <div className={styles.delivery__section_left}>
          <h3 className={styles.delivery__section_left_header}>
            60 минут или пицца бесплатно
          </h3>
          <p className={styles.delivery__section_left_p}>
            Если мы не успеем доставить любые продукты, кроме сувенирной
            продукции и соусов, в течение 60 минут, курьер подарит вам
            сертификат на большую пиццу.
          </p>
        </div>
        <div className={styles.delivery__section_center}>
          <span className={styles.delivery__section_center_money_value}>
            От 45 000 СУМ
          </span>
          <p className={styles.delivery__section_center_p}>
            Минимальная сумма доставки
          </p>
          <p className={styles.delivery__section_center_money_value2nd}>
            1 000 000 СУМ
          </p>
          <p className={styles.delivery__section_center_text}>
            Максимальная сумма при оплате наличными
          </p>
          <p className={styles.delivery__section_center_text}>
            {" "}
            Изображения продуктов могут отличаться от продуктов в заказе.
          </p>
        </div>
        <div className={styles.delivery__section_right}>
          <h3 className={styles.delivery__section_right_header}>
            ЗОНА ДОСТАВКИ ОГРАНИЧЕНА
          </h3>

          <div className={styles.delivery__section_right_map_img_wrapper}>
            <span>Зона доставки</span>
            <a href="#" className={styles.delivery__section_right_map}>
              <img
                className={styles.delivery__section_right_map_img}
                src="https://dodopizza-a.akamaihd.net/site-static/dist/afdce5bbb5d38204b6c6.jpg"
                alt="map img"
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Delivery;

/*

import React, { useState } from 'react';

interface SquareProps {
  value: string | null;
  onClick: () => void;
}

const Square: React.FC<SquareProps> = ({ value, onClick }) => (
  <button className="square" onClick={onClick}>
    {value}
  </button>
);

interface BoardProps {
  squares: Array<string | null>;
  onClick: (i: number) => void;
}

const Board: React.FC<BoardProps> = ({ squares, onClick }) => {
  const renderSquare = (i: number) => (
    <Square value={squares[i]} onClick={() => onClick(i)} />
  );

  return (
    <div>
      <div className="board-row">
        {renderSquare(0)}
        {renderSquare(1)}
        {renderSquare(2)}
      </div>
      <div className="board-row">
        {renderSquare(3)}
        {renderSquare(4)}
        {renderSquare(5)}
      </div>
      <div className="board-row">
        {renderSquare(6)}
        {renderSquare(7)}
        {renderSquare(8)}
      </div>
    </div>
  );
};

const App: React.FC = () => {
  const [squares, setSquares] = useState(Array(9).fill(null));
  const [xIsNext, setXIsNext] = useState(true);

  const handleClick = (i: number) => {
    const newSquares = squares.slice();
    if (newSquares[i] || calculateWinner(newSquares)) {
      return;
    }
    newSquares[i] = xIsNext ? 'X' : 'O';
    setSquares(newSquares);
    setXIsNext(!xIsNext);
  };

  const winner = calculateWinner(squares);
  const status = winner ? `Winner: ${winner}` : `Next player: ${xIsNext ? 'X' : 'O'}`;

  return (
    <div className="game">
      <div className="game-board">
        <Board squares={squares} onClick={handleClick} />
      </div>
      <div className="game-info">
        <div>{status}</div>
      </div>
    </div>
  );
};

const calculateWinner = (squares: Array<string | null>): string | null => {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  for (const [a, b, c] of lines) {
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }

  return null;
};

export default App;


import './App.css';

export default function App() {
  return (
    <main>
      <div className="board-row">
        <div>1</div>
        <div>2</div>
        <div>3</div>
      </div>
      <div className="board-row">
        <div>4</div>
        <div>5</div>
        <div>6</div>
      </div>
      <div className="board-row">
        <div>7</div>
        <div>8</div>
        <div>9</div>
      </div>
    </main>
  );
}
write on the top css code for replit.com

*/
