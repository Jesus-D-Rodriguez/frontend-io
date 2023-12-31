import React from 'react'
import { Link } from 'react-router-dom'
import style from "./pills_front.module.css"
import homeIconInactive from "../Footer/homeimginactive.svg";
import groupIconInactive from "../Footer/groupimginactive.svg";
import caddyIconActive from "../Footer/VectorTab1.svg";
import  useEffect from 'react';

function Pillsfront ()
{

    useEffect(() => {
        document.getElementById("homeicon").src = homeIconInactive;
        document.getElementById("communityicon").src = groupIconInactive;
        document.getElementById("caddyicon").src = caddyIconActive;
    }, []);


    return (
        <div className={style.body}>
            {/* <Headerr/> */}
            <div className={style.top}>
                <Link to="/Caddy"><button className={style.but1}>Caddy Log</button></Link>

                <button className={style.but2}>My Peers</button>
            </div>
            <div className={style.bottom}>
                <div className={style.bottom1}>
                    <Link to="/Caddy"><div className={style.but3}><h4 className={style.addpillss}>Add Pills</h4></div></Link>

                    <div className={style.but4}><h4 className={style.addpillss}>Add Peers</h4></div>
                </div>
            </div>
            {/* <Footerr/> */}
        </div>
    )
}

export default Pillsfront

