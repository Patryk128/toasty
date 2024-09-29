import { useState, useRef } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [volume, setVolume] = useState(1);
  const [backgroundImage, setBackgroundImage] = useState("");
  const audioRef = useRef(null);

  const soundFiles = [
    "/sound/bum cyk cyk.m4a",
    "/sound/chatki pierdatki.m4a",
    "/sound/dobra wódka.m4a",
    "/sound/hulaj dusza.m4a",
    "/sound/i ta rara.m4a",
    "/sound/jadą wozy.m4a",
    "/sound/jedzie pociąg.m4a",
    "/sound/noga w noge.m4a",
    "/sound/ole ole.m4a",
    "/sound/po maluszku.m4a",
  ];

  const backgroundImages = [
    "/images/background1.jpg",
    "/images/background2.jpg",
  ];

  const playRandomSound = () => {
    if (!isPlaying) {
      const randomIndex = Math.floor(Math.random() * soundFiles.length);
      const audio = new Audio(soundFiles[randomIndex]);

      setIsPlaying(true);

      audio.volume = volume;

      audioRef.current = audio;

      audio.play();
      audio.addEventListener("ended", () => {
        setIsPlaying(false);
        audioRef.current = null;
      });
    }
  };
  const handleVolumeChange = (event) => {
    const newVolume = event.target.value;
    setVolume(newVolume);

    if (audioRef.current) {
      audioRef.current.volume = newVolume;
    }
  };

  const changeBackgroundIfNeeded = (newCount) => {
    if (newCount % 5 === 0) {
      const randomImage =
        backgroundImages[Math.floor(Math.random() * backgroundImages.length)];
      setBackgroundImage(randomImage); // Ustaw losowe tło
    }
  };

  return (
    <div
      style={{
        backgroundImage: `url(${backgroundImage})`, // Ustaw tło jako obrazek
        backgroundSize: "cover",
        backgroundPosition: "center",
        minHeight: "100vh",
        padding: "20px",
      }}
    >
      <h1>Liczba: {count}</h1>
      <div className="card">
        <button
          onClick={() => {
            const newCount = count + 1;
            setCount(newCount);
            playRandomSound(); // Odtwórz losowy dźwięk przy każdym kliknięciu
            changeBackgroundIfNeeded(newCount); // Zmieniaj tło co 5 kliknięć
          }}
          disabled={isPlaying} // Zablokuj przycisk, gdy dźwięk jest odtwarzany
        >
          {isPlaying ? "Odtwarzanie..." : "Wypij"}
        </button>

        {/* Suwak głośności */}
        <div>
          <label htmlFor="volume">Głośność:</label>
          <input
            type="range"
            id="volume"
            name="volume"
            min="0"
            max="1"
            step="0.01" // Dokładność do dwóch miejsc po przecinku
            value={volume}
            onChange={handleVolumeChange}
          />
        </div>

        <p>
          {count === 0
            ? "Zacznij kliknąć, aby wypić!"
            : count > 0 && count < 5
            ? "Jeszcze trochę!"
            : count >= 5 && count < 10
            ? "Dobrze ci idzie!"
            : count >= 10 && count < 15
            ? "Już prawie 15!"
            : count >= 15 && count < 20
            ? "Świetnie, masz już 15!"
            : count >= 20 && count < 25
            ? "Czy dasz radę dobić do 25?"
            : count >= 25
            ? "Wow, osiągnąłeś 25! Super!"
            : ""}
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </div>
  );
}

export default App;
