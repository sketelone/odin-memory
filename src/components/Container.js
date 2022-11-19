import React, {useEffect, useState} from "react";

const Container = (props) => {

    const {drivers, handler} = props;

    const divStyle = {
        display: 'flex',
        padding: '30px',
        fontSize: '24px',
        flexWrap: 'wrap',
        gap: '20px'

    }

    const cardStyle = {
        display: 'grid',
        padding: '10px',
        fontSize: '24px',
        backgroundColor: 'whitesmoke',
        color: 'black',
        textTransform: 'uppercase',
    }
    
    const imgStyle = {
        height: '300px',
    }

    return(
        <div style={divStyle}>
            {drivers.map((driver) => {               
                return (
                    <div key={driver.name} style={cardStyle} id={driver.name} onClick={handler}>
                        <img src={driver.src} alt={driver.name} style={imgStyle} id={driver.name}/>
                        <h4 id={driver.name}>{driver.name}</h4>
                    </div>
                );
            })}
        </div>
    )

}

export default Container;