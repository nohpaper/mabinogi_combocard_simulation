import './stylesheet/Input.scss';
import Input from './Input';
import Custom from './Custom';
import Footer from './Footer.js';

import React, {useState} from "react";
import {Route, Routes} from "react-router-dom";

const BLANK_VALUE = "blank";
const comboSkill = ["downAttack", "assault", "defense", "lanceCharge", "rangedCombatMastery", "magnumshot", "smash", "windMill", "counterAttack","crashShot", "lightningRoad", "lightningbolt", "thunder", "iceSpear", "iceBolt", "fireball", "firebolt", "sandBurst", "waterCannon", "flame", "dashpunch", "screwupper", "pounding", "crossBuster", "shootingRush", "shurikenCharging", "shurikenStorm", "deathMarker", "chainSpinningSlash"];


function App() {
    const [list, setList] = useState([
        {
            id:0,
            isAddButton:false, //add button true or false
            isActive:false, //button active true or false
            selectSkill:BLANK_VALUE, //select skill input
            inputPercent:0, //select percent input
            usingPercent:0, //inputPerent interval calc
        },
        {
            id:1,
            isAddButton:false,
            isActive:false,
            selectSkill:BLANK_VALUE,
            inputPercent:0,
            usingPercent:0,
        },
        {
            id:2,
            isAddButton:false,
            isActive:false,
            selectSkill:BLANK_VALUE,
            inputPercent:0,
            usingPercent:0,
        },
        {
            id:3,
            isAddButton:false,
            isActive:false,
            selectSkill:BLANK_VALUE,
            inputPercent:0,
            usingPercent:0,
        },
        {
            id:4,
            isAddButton:false,
            isActive:false,
            selectSkill:BLANK_VALUE,
            inputPercent:0,
            usingPercent:0,
        },
        {
            id:5,
            isAddButton:false,
            isActive:false,
            selectSkill:BLANK_VALUE,
            inputPercent:0,
            usingPercent:0,
        },
    ]);
    const [skillAll, setSkillAll] = useState([]); //list selectSkill 를 input.js 에서 담아 custom.js 에서 변경하며 사용
    const [percentAll, setPercentAll] = useState([]); //list inputPercent 를 input.js 에서 담아 custom.js 에서 변경하며 사용

  return (
    <div className="App">
        <Routes>
            <Route path="/" element={<Input blank={BLANK_VALUE} skill={comboSkill} list={list} setList={setList} percentAll={percentAll} setSkillAll={setSkillAll} setPercentAll={setPercentAll}/>}/>
            <Route path="/custom" element={<Custom blank={BLANK_VALUE} skill={comboSkill} list={list} setList={setList} skillAll={skillAll} setSkillAll={setSkillAll} percentAll={percentAll} setPercentAll={setPercentAll}/>} />
        </Routes>
        <Footer/>
    </div>
  );
}



export default App;
