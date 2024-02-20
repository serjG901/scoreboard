import { useEffect, useState } from "react";
import "./App.css";

let startTouch = 0;
let endTouch = 0;

function App() {
    const [score1, setScore1] = useState(0);
    const [score2, setScore2] = useState(0);
    const [party1, setParty1] = useState(0);
    const [party2, setParty2] = useState(0);

    const [heightScore, setHeightScore] = useState(0);
    const [heightParty, setHeightParty] = useState(0);

    useEffect(() => {
        console.log(
            document.getElementsByClassName("score")[0].getBoundingClientRect()
                .height
        );
        setHeightScore(
            document.getElementsByClassName("score")[0].getBoundingClientRect()
                .height
        );
        setHeightParty(
            document.getElementsByClassName("party")[0].getBoundingClientRect()
                .height
        );
    }, []);

    const handleChangeScoreSwipe = (e, player, type) => {
        if (type === "start") {
            startTouch = e.changedTouches[0].clientY;
            endTouch = e.changedTouches[0].clientY;
        } else {
            endTouch = e.changedTouches[0].clientY;
        }

        if (startTouch - endTouch > heightScore * 0.8) {
            if (player === 1) {
                setScore1((state) => state + 1);
            } else {
                setScore2((state) => state + 1);
            }
        }
        if (endTouch - startTouch > heightScore * 0.8) {
            if (player === 1) {
                setScore1((state) => state - 1);
            } else {
                setScore2((state) => state - 1);
            }
        }
    };

    const handleChangePartySwipe = (e, player, type) => {
        if (type === "start") {
            startTouch = e.changedTouches[0].clientY;
            endTouch = e.changedTouches[0].clientY;
        } else {
            endTouch = e.changedTouches[0].clientY;
        }

        if (startTouch - endTouch > heightParty * 0.8) {
            if (player === 1) {
                setParty1((state) => state + 1);
            } else {
                setParty2((state) => state + 1);
            }
        }
        if (endTouch - startTouch > heightParty * 0.8) {
            if (player === 1) {
                setParty1((state) => state - 1);
            } else {
                setParty2((state) => state - 1);
            }
        }
    };

    return (
        <div className='board'>
            <div>SCORE</div>
            <div className='score'>
                <div
                    className='score1'
                    onTouchStart={(e) => handleChangeScoreSwipe(e, 1, "start")}
                    onTouchEnd={(e) => handleChangeScoreSwipe(e, 1, "end")}
                >
                    <div>{score1}</div>
                </div>
                <div
                    className='score2'
                    onTouchStart={(e) => handleChangeScoreSwipe(e, 2, "start")}
                    onTouchEnd={(e) => handleChangeScoreSwipe(e, 2, "end")}
                >
                    <div>{score2}</div>
                </div>
            </div>
            <div>PARTY</div>
            <div className='party'>
                <div
                    className='party1'
                    onTouchStart={(e) => handleChangePartySwipe(e, 1, "start")}
                    onTouchEnd={(e) => handleChangePartySwipe(e, 1, "end")}
                >
                    <div>{party1}</div>
                </div>
                <div
                    className='party2'
                    onTouchStart={(e) => handleChangePartySwipe(e, 2, "start")}
                    onTouchEnd={(e) => handleChangePartySwipe(e, 2, "end")}
                >
                    <div>{party2}</div>
                </div>
            </div>
        </div>
    );
}

export default App;
