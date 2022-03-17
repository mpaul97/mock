import "./Mock.css";
import PlayerQueue from "./PlayerQueue";
import Team from "./Team";
import Player from "./Players";
import { useEffect, useState } from "react";
import { db } from "../firebase-config";
import { collection, getDocs } from "firebase/firestore";

//Team Info
const teamInfo = [
    {
        name: 'QB',
        num: 1
    },
    {
        name: 'RB',
        num: 2
    },
    {
        name: 'WR',
        num: 2
    },
    {
        name: 'TE',
        num: 1
    },
    {
        name: 'FLEX',
        num: 1
    },
    {
        name: 'K',
        num: 1
    },
    {
        name: 'DST',
        num: 1
    },
    {
        name: 'BEN',
        num: 7
    }
]

function Mock() {
    //Queue info
    const leagueSize = 12;
    const playersSize = 2;
    const queuePosition = 4;

    return (
        <div className="mock-container">
            <div className="header">
                <h1 className="title">Minute Mock</h1>
                <div className="timer-container">
                    <h3 className="timer">0:00</h3>
                </div>
            </div>
            <div className="player-queue">
                <PlayerQueue
                    leagueSize={leagueSize}
                    playersSize={playersSize}
                    queuePosition={queuePosition}
                />
            </div>
            <div className="content-container">
                <div className="team-container">
                    <h2 className="subtitle">Team {queuePosition} </h2>
                    <div className="team-players-container">
                        <Team 
                            teamInfo={teamInfo}
                            leagueSize={leagueSize}
                        />
                    </div>
                </div>
                <div className="player-container">
                    <Player />
                </div>
                <div className="favorites-container">

                </div>
            </div>
        </div>
    );
}

export default Mock;