import './stylesheet/App.scss';
import './stylesheet/defalut.scss';
import Footer from './Footer.js';

import { Route, Routes } from 'react-router-dom';
import {useState} from "react";

function App() {

    //let comboSkill = useState(["downAttack", "assault", "defense", "lanceCharge", "rangedCombatMastery", "magnumshot", "smash", "windMill", "counterAttack","crashShot", "lightningRoad", "lightningbolt", "thunder", "iceSpear", "iceBolt", "fireball", "firebolt", "sandBurst", "waterCannon", "flame", "dashpunch", "screwupper", "pounding", "crossBuster", "shootingRush", "shurikenCharging", "shurikenStorm", "deathMarker", "chainSpinningSlash"])
    let comboSkill = ["downAttack", "assault", "defense", "lanceCharge", "rangedCombatMastery", "magnumshot", "smash", "windMill", "counterAttack","crashShot", "lightningRoad", "lightningbolt", "thunder", "iceSpear", "iceBolt", "fireball", "firebolt", "sandBurst", "waterCannon", "flame", "dashpunch", "screwupper", "pounding", "crossBuster", "shootingRush", "shurikenCharging", "shurikenStorm", "deathMarker", "chainSpinningSlash"];

    //각 combo 추가 버튼 관련 boolean
    const [isBoolean02, setIsBoolean02] = useState(false);
    const [isBoolean03, setIsBoolean03] = useState(false);
    const [isBoolean04, setIsBoolean04] = useState(false);
    const [isBoolean05, setIsBoolean05] = useState(false);
    const [isBoolean06, setIsBoolean06] = useState(false);

    const [selectCombo, setSelectCombo ] = useState(0);

    //각 combo
    const [selectComboIsActive01, setSelectComboIsActive01 ] = useState(false);
    const [selectComboIsActive02, setSelectComboIsActive02 ] = useState(false);
    const [selectComboIsActive03, setSelectComboIsActive03 ] = useState(false);
    const [selectComboIsActive04, setSelectComboIsActive04 ] = useState(false);
    const [selectComboIsActive05, setSelectComboIsActive05 ] = useState(false);
    const [selectComboIsActive06, setSelectComboIsActive06 ] = useState(false);


    //각 skill select state
    const [selectSkill01, setSelectSkill01 ] = useState("blank");
    const [selectSkill02, setSelectSkill02 ] = useState("blank");
    const [selectSkill03, setSelectSkill03 ] = useState("blank");
    const [selectSkill04, setSelectSkill04 ] = useState("blank");
    const [selectSkill05, setSelectSkill05 ] = useState("blank");
    const [selectSkill06, setSelectSkill06 ] = useState("blank");


  return (
    <div className="App">

        <div className="wrap">
            <section className="input_step">
                <h1>커스텀마이징할 콤보카드 입력</h1>
                <div className="container">
                    <h5>콤보 카드 입력창</h5>
                    <div className="input_wrap">
                        <ul>
                            <li className="active">일반</li>
                            <li>골든</li>
                            <li>블랙</li>
                        </ul>
                        <div className="input_inner">
                            <div className="combocard_wrap">
                                <div className="combo_each">
                                    <div className="active_wrap">
                                        <button type="button" className={selectComboIsActive01 ? "active" : null } onClick={()=>{
                                            setSelectComboIsActive01(!selectComboIsActive01);
                                            setSelectCombo(1);

                                            if(selectComboIsActive01) {
                                                setSelectComboIsActive02(false);
                                                setSelectComboIsActive03(false);
                                                setSelectComboIsActive04(false);
                                                setSelectComboIsActive05(false);
                                                setSelectComboIsActive06(false);
                                            }
                                        }}>
                                            <img src={`/images/common/skill/${selectSkill01}.jpg`} alt={`${selectSkill01}`}/>
                                        </button>
                                    </div>
                                </div>
                                <div className="combo_each">
                                    <button type="button" className="disabled_wrap" onClick={() => {
                                        if (!isBoolean03 && !isBoolean04 && !isBoolean05 && !isBoolean06) {
                                            //3~6이 모두 false면 true
                                            setIsBoolean02(true);
                                        } else {
                                            setIsBoolean02(false);
                                        }
                                    }}>추가
                                    </button>
                                    {
                                        //
                                        isBoolean02 === true ?
                                        <div className="active_wrap">
                                            <button type="button" className={selectComboIsActive02 ? "active" : null }
                                                    onClick={() => {
                                                        const combeBtnRemove = document.querySelector(".combo_btn_wrap .combo_remove");
                                                        combeBtnRemove.classList.add("active");

                                                        setSelectComboIsActive02(!selectComboIsActive02);
                                                        setSelectCombo(2);

                                                        if(selectComboIsActive02) {
                                                            setSelectComboIsActive01(false);
                                                            setSelectComboIsActive03(false);
                                                            setSelectComboIsActive04(false);
                                                            setSelectComboIsActive05(false);
                                                            setSelectComboIsActive06(false);
                                                        }
                                                    }}>
                                                <img src={`/images/common/skill/${selectSkill02}.jpg`} alt={`${selectSkill02}`}/>
                                            </button>
                                            <div className="combo_input">
                                            <input type="text" maxLength="2"/>
                                            </div>
                                        </div> : null
                                    }
                                </div>
                                <div className="combo_each">
                                    <button type="button" className="disabled_wrap" onClick={() => {
                                        if (isBoolean02 && !isBoolean04 && !isBoolean05 && !isBoolean06) {
                                            //2가 true고, 4~6이 모두 false면 true
                                            setIsBoolean03(true);
                                        } else {
                                            setIsBoolean03(false);
                                        }
                                    }}>추가
                                    </button>
                                    {
                                        isBoolean03 === true ?
                                            <div className="active_wrap">
                                                <div className="combo_input">
                                                    <input type="text" maxLength="2"/>
                                                </div>
                                                <button type="button" className={selectComboIsActive03 ? "active" : null }
                                                        onClick={() => {
                                                            const combeBtnRemove = document.querySelector(".combo_btn_wrap .combo_remove");
                                                            combeBtnRemove.classList.add("active");

                                                            setSelectComboIsActive03(!selectComboIsActive03);
                                                            setSelectCombo(3);

                                                            if(selectComboIsActive03) {
                                                                setSelectComboIsActive01(false);
                                                                setSelectComboIsActive02(false);
                                                                setSelectComboIsActive04(false);
                                                                setSelectComboIsActive05(false);
                                                                setSelectComboIsActive06(false);
                                                            }
                                                        }}>
                                                    <img src={`/images/common/skill/${selectSkill03}.jpg`}
                                                         alt={`${selectSkill03}`}/>
                                                </button>
                                            </div> : null
                                    }
                                </div>
                                <div className="combo_each">
                                <button type="button" className="disabled_wrap" onClick={() => {
                                        if (isBoolean02 && isBoolean03 && !isBoolean05 && !isBoolean06) {
                                            //2~3가 true고, 5~6이 모두 false면 true
                                            setIsBoolean04(true);
                                        } else {
                                            setIsBoolean04(false);
                                        }
                                    }}>추가
                                    </button>
                                    {
                                        isBoolean04 === true &&
                                        <div className="active_wrap">
                                            <button type="button" className={selectComboIsActive04 ? "active" : null }  onClick={()=>{
                                                setSelectComboIsActive04(!selectComboIsActive04);
                                                setSelectCombo(4);

                                                if(selectComboIsActive04) {
                                                    setSelectComboIsActive01(false);
                                                    setSelectComboIsActive02(false);
                                                    setSelectComboIsActive03(false);
                                                    setSelectComboIsActive05(false);
                                                    setSelectComboIsActive06(false);
                                                }
                                            }}>
                                                <img src={`/images/common/skill/${selectSkill04}.jpg`}  alt={`${selectSkill04}`}/>
                                            </button>
                                            <div className="combo_input">
                                            <input type="text" maxLength="2"/>
                                            </div>
                                        </div>
                                    }
                                </div>
                                <div className="combo_each">
                                    <button type="button" className="disabled_wrap" onClick={() => {
                                        if (isBoolean02 && isBoolean03 && isBoolean04 && !isBoolean06) {
                                            //2~4가 true고, 6이 모두 false면 true
                                            setIsBoolean05(true);
                                        } else {
                                            setIsBoolean05(false);
                                        }
                                    }}>추가
                                    </button>
                                    {
                                        isBoolean05 === true &&
                                        <div className="active_wrap">
                                            <div className="combo_input">
                                                <input type="text" maxLength="2"/>
                                            </div>
                                            <button type="button" className={selectComboIsActive05 ? "active" : null }  onClick={()=>{
                                                setSelectComboIsActive05(!selectComboIsActive05);
                                                setSelectCombo(5);

                                                if(selectComboIsActive05) {
                                                    setSelectComboIsActive01(false);
                                                    setSelectComboIsActive02(false);
                                                    setSelectComboIsActive03(false);
                                                    setSelectComboIsActive04(false);
                                                    setSelectComboIsActive06(false);
                                                }
                                            }}>
                                                <img src={`/images/common/skill/${selectSkill05}.jpg`} alt={`${selectSkill05}`}/>
                                            </button>
                                        </div>
                                    }
                                </div>
                                <div className="combo_each">
                                    <button type="button" className="disabled_wrap" onClick={() => {
                                        if (isBoolean02 && isBoolean03 && isBoolean04 && isBoolean05) {
                                            //2~5가 true고
                                            setIsBoolean06(true);
                                        } else {
                                            setIsBoolean06(false);
                                        }
                                    }}>추가
                                    </button>
                                    {
                                        isBoolean06 === true &&
                                        <div className="active_wrap">
                                            <button type="button" className={selectComboIsActive06 ? "active" : null }  onClick={()=>{
                                                setSelectComboIsActive06(!selectComboIsActive06);
                                                setSelectCombo(6);

                                                if(selectComboIsActive06 === true) {
                                                    setSelectComboIsActive01(false);
                                                    setSelectComboIsActive02(false);
                                                    setSelectComboIsActive03(false);
                                                    setSelectComboIsActive04(false);
                                                    setSelectComboIsActive05(false);
                                                }
                                            }}>
                                                <img src={`/images/common/skill/${selectSkill06}.jpg`} alt={`${selectSkill06}`}/>
                                            </button>
                                            <div className="combo_input">
                                                <input type="text" maxLength="2"/>
                                            </div>
                                        </div>
                                    }
                                </div>
                                <div className="combo_btn_wrap">
                                    <button type="button" className="combo_remove" onClick={()=>{
                                        console.log(selectCombo);
                                        setIsBoolean02(false);
                                    }}>제거</button>
                                </div>
                            </div>
                            <ul className="skill_wrap">
                                {
                                    comboSkill.map(function(arr, idx){
                                        return (
                                            <li key={arr}>
                                                <button type="button" onClick={()=>{
                                                    /*switch(selectCombo){
                                                        case 1 : return setSelectSkill01(arr)
                                                        case 2 : return setSelectSkill02(arr)
                                                        case 3 : return setSelectSkill03(arr)
                                                        case 4 : return setSelectSkill04(arr)
                                                        case 5 : return setSelectSkill05(arr)
                                                        case 6 : return setSelectSkill06(arr)
                                                        default : return null
                                                    }*/
                                                    if(selectCombo === 1 && selectComboIsActive01){
                                                        setSelectSkill01(arr);
                                                    }else if(selectCombo === 2 && selectComboIsActive02){
                                                        setSelectSkill02(arr);
                                                    }else if(selectCombo === 3 && selectComboIsActive03){
                                                        setSelectSkill03(arr);
                                                    }else if(selectCombo === 4 && selectComboIsActive04){
                                                        setSelectSkill04(arr);
                                                    }else if(selectCombo === 5 && selectComboIsActive05){
                                                        setSelectSkill05(arr);
                                                    }else if(selectCombo === 6 && selectComboIsActive06){
                                                        setSelectSkill06(arr);
                                                    }

                                                }}><img src={`/images/common/skill/${arr}.jpg`} alt={`${arr}`}/></button>
                                            </li>
                                        )
                                    })
                                }
                                {/*<li><button type="button"><img src="/images/common/skill/downAttack.jpg" alt="downAttack"/></button></li>
                                <li><button type="button"><img src="/images/common/skill/assault.jpg" alt="assault"/></button></li>
                                <li><button type="button"><img src="/images/common/skill/defense.jpg" alt="defense"/></button></li>
                                <li><button type="button"><img src="/images/common/skill/lanceCharge.jpg" alt="lanceCharge"/></button></li>
                                <li><button type="button"><img src="/images/common/skill/rangedCombatMastery.jpg" alt="rangedCombatMastery"/></button></li>
                                <li><button type="button"><img src="/images/common/skill/magnumshot.jpg" alt="magnumshot"/></button></li>
                                <li><button type="button"><img src="/images/common/skill/smash.jpg" alt="smash"/></button></li>
                                <li><button type="button"><img src="/images/common/skill/windMill.jpg" alt="windMill"/></button></li>
                                <li><button type="button"><img src="/images/common/skill/counterAttack.jpg" alt="counterAttack"/></button></li>
                                <li><button type="button"><img src="/images/common/skill/crashShot.jpg" alt="crashShot"/></button></li>
                                <li><button type="button"><img src="/images/common/skill/lightningRoad.jpg" alt="lightningRoad"/></button></li>
                                <li><button type="button"><img src="/images/common/skill/lightningbolt.jpg" alt="lightningbolt"/></button></li>
                                <li><button type="button"><img src="/images/common/skill/thunder.jpg" alt="thunder"/></button></li>
                                <li><button type="button"><img src="/images/common/skill/iceSpear.jpg" alt="iceSpear"/></button></li>
                                <li><button type="button"><img src="/images/common/skill/iceBolt.jpg" alt="iceBolt"/></button></li>
                                <li><button type="button"><img src="/images/common/skill/fireball.jpg" alt="fireball"/></button></li>
                                <li><button type="button"><img src="/images/common/skill/firebolt.jpg" alt="firebolt"/></button></li>
                                <li><button type="button"><img src="/images/common/skill/sandBurst.jpg" alt="sandBurst"/></button></li>
                                <li><button type="button"><img src="/images/common/skill/waterCannon.jpg" alt="waterCannon"/></button></li>
                                <li><button type="button"><img src="/images/common/skill/flame.jpg" alt="flame"/></button></li>
                                <li><button type="button"><img src="/images/common/skill/dashpunch.jpg" alt="dashpunch"/></button></li>
                                <li><button type="button"><img src="/images/common/skill/screwupper.jpg" alt="screwupper"/></button></li>
                                <li><button type="button"><img src="/images/common/skill/pounding.jpg" alt="pounding"/></button></li>
                                <li><button type="button"><img src="/images/common/skill/crossBuster.jpg" alt="crossBuster"/></button></li>
                                <li><button type="button"><img src="/images/common/skill/shootingRush.jpg" alt="shootingRush"/></button></li>
                                <li><button type="button"><img src="/images/common/skill/shurikenCharging.jpg" alt="shurikenCharging"/></button></li>
                                <li><button type="button"><img src="/images/common/skill/shurikenStorm.jpg" alt="shurikenStorm"/></button></li>
                                <li><button type="button"><img src="/images/common/skill/deathMarker.jpg" alt="deathMarker"/></button></li>
                                <li><button type="button"><img src="/images/common/skill/chainSpinningSlash.jpg" alt="chainSpinningSlash"/></button></li>*/}
                            </ul>
                        </div>
                        <div className="btn_wrap">
                            <button type="button" className="next_step">완성</button>
                            <button type="button" className="reset_step">초기화</button>
                        </div>
                    </div>
                </div>
            </section>
        </div>


        {/*<Routes>
        <Route></Route>
      </Routes>*/}


        <Footer/>
    </div>
  );
}


export default App;
