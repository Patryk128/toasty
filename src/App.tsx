import { useState, useRef } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(null);

  const soundFiles = [
    "/sound/audi.m4a",
    "/sound/betoniara.m4a",
    "/sound/bum cyk cyk.m4a",
    "/sound/chatki pierdatki.m4a",
    "/sound/dobra wódka.m4a",
    "/sound/emeryt.m4a",
    "/sound/enter.m4a",
    "/sound/hop siup.m4a",
    "/sound/hulaj dusza.m4a",
    "/sound/i ta rara.m4a",
    "/sound/jadą wozy.m4a",
    "/sound/jak powiedział budzik.m4a",
    "/sound/jedzie pociąg.m4a",
    "/sound/kaczki.m4a",
    "/sound/lata tadek.m4a",
    "/sound/na zdrowie.m4a",
    "/sound/no to rym cym.m4a",
    "/sound/noga w noge.m4a",
    "/sound/ojca maybacha.m4a",
    "/sound/ole ole.m4a",
    "/sound/pbg.m4a",
    "/sound/piedro lamento.m4a",
    "/sound/po maluszku.m4a",
    "/sound/po_dziubasku.mp3",
    "/sound/pod te faze.m4a",
    "/sound/polak węgier.m4a",
    "/sound/polej pan.m4a",
    "/sound/rach ciach ciach.m4a",
    "/sound/rym cim cim.m4a",
    "/sound/rym cym cym.m4a",
    "/sound/skacze małpa.m4a",
    "/sound/szanze lize.m4a",
    "/sound/tyrtum 1.m4a",
    "/sound/tyrtum 2.m4a",
    "/sound/ufo.m4a",
    "/sound/umcia umcia.m4a",
    "/sound/w ten kaczu dziób.m4a",
    "/sound/wiwacik.m4a",
    "/sound/wszechświat.m4a",
    "/sound/wyciągaj wagoniki.m4a",
    "/sound/za jagieło.m4a",
    "/sound/zagraj jasiu.m4a",
  ];

  const playRandomSound = () => {
    if (!isPlaying) {
      const randomIndex = Math.floor(Math.random() * soundFiles.length);
      const audio = new Audio(soundFiles[randomIndex]);

      setIsPlaying(true);
      audio.volume = 1;
      audioRef.current = audio;

      audio.play();
      audio.addEventListener("ended", () => {
        setIsPlaying(false);
        audioRef.current = null;
      });
    }
  };

  return (
    <div className="background-image">
      <div className="app-card">
        <h1 className="app-header">Wypite: {count}</h1>
        <div className="app-nav">
          <button
            onClick={() => {
              const newCount = count + 1;
              setCount(newCount);
              playRandomSound();
            }}
            disabled={isPlaying}
          >
            {isPlaying ? "Odtwarzanie..." : "Wypij"}
          </button>

          <p>
            {count === 0
              ? "Jestem, tak jak pan kazałeś"
              : count >= 1 && count < 5
              ? "Ide se pić kurakao, a pan nie"
              : count >= 5 && count < 10
              ? "Gardze panem"
              : count >= 10 && count < 15
              ? "Panie to nie jest takie zwykłe zalewanie mordy tylko kulturalne spożycie"
              : count >= 15 && count < 20
              ? "Coś pan narobił"
              : count >= 20 && count < 25
              ? "Won stąd świniaku jeden"
              : count >= 25 && count < 30
              ? "No i co? Co? Zezwymiotowała się świnia i jeszcze obrus ściągła"
              : count >= 30
              ? "Sam pan jesteś świnia i menda"
              : ""}
          </p>
        </div>
      </div>
    </div>
  );
}

export default App;
