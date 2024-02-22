import './stylesheet/Input.scss';
import Input from './Input';
import Custom from './Custom';
import Footer from './Footer.js';

import React, {useEffect, useState} from "react";
import {Route, Routes} from "react-router-dom";

const BLANK_VALUE = "blank";
const comboSkill = ["downAttack", "assault", "defense", "lanceCharge", "rangedCombatMastery", "magnumshot", "smash", "windMill", "counterAttack","crashShot", "lightningRoad", "lightningbolt", "thunder", "iceSpear", "iceBolt", "fireball", "firebolt", "sandBurst", "waterCannon", "flame", "dashpunch", "screwupper", "pounding", "crossBuster", "shootingRush", "shurikenCharging", "shurikenStorm", "deathMarker", "chainSpinningSlash"];

function App() {
    const [list, setList] = useState([
        {
            id:0,
            isAddButton:true, //add button true or false
            isActive:false, //
            selectSkill:BLANK_VALUE,
            inputPercent:0,
        },
        {
            id:1,
            isAddButton:false,
            isActive:false,
            selectSkill:BLANK_VALUE,
            inputPercent:0,
        },
        {
            id:2,
            isAddButton:false,
            isActive:false,
            selectSkill:BLANK_VALUE,
            inputPercent:0,
        },
        {
            id:3,
            isAddButton:false,
            isActive:false,
            selectSkill:BLANK_VALUE,
            inputPercent:0,
        },
        {
            id:4,
            isAddButton:false,
            isActive:false,
            selectSkill:BLANK_VALUE,
            inputPercent:0,
        },
        {
            id:5,
            isAddButton:false,
            isActive:false,
            selectSkill:BLANK_VALUE,
            inputPercent:0,
        },
    ]);
    const [skillAll, setSkillAll] = useState([]);
    const [percentAll, setPercentAll] = useState([]);
    const [selectCombo, setSelectCombo ] = useState(0);
    console.log("App: ", list);
  return (
    <div className="App">
        <Routes>
            <Route path="/" element={<Input blank={BLANK_VALUE} skill={comboSkill} list={list} setList={setList} setSkillAll={setSkillAll} setPercentAll={setPercentAll}/>}/>
            <Route path="/custom" element={<Custom blank={BLANK_VALUE} skill={comboSkill} list={list} skillAll={skillAll} percentAll={percentAll}/>} />
        </Routes>
        <Footer/>
    </div>
  );
}



export default App;
