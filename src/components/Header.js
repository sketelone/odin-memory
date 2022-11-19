import React, {useEffect, useState} from "react";

const Header = (props) => {

    const {score, highScore} = props;

    const headerStyle = {
        display: 'grid',
    }

    return (
        <div style={headerStyle}>
            <h1>FORMULA 1 MEMORY GAME</h1>
            <h3>Click on as many drivers as possible, without clicking the same one twice!</h3>
            <p>Score: {score}</p>
            <p>High Score: {highScore}</p>
        </div>
    )

}

export default Header;