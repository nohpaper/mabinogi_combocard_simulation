import './stylesheet/App.scss';
import './stylesheet/defalut.scss';
import Footer from './Footer.js';

import { Route, Routes } from 'react-router-dom';
import {useState} from "react";

function App() {
    const [isBoolean02, setIsBoolean02] = useState(false);
    const [isBoolean03, setIsBoolean03] = useState(false);
    const [isBoolean04, setIsBoolean04] = useState(false);
    const [isBoolean05, setIsBoolean05] = useState(false);
    const [isBoolean06, setIsBoolean06] = useState(false);


    //let comboSkill = useState(["downAttack", "assault", "defense", "lanceCharge", "rangedCombatMastery", "magnumshot", "smash", "windMill", "counterAttack","crashShot", "lightningRoad", "lightningbolt", "thunder", "iceSpear", "iceBolt", "fireball", "firebolt", "sandBurst", "waterCannon", "flame", "dashpunch", "screwupper", "pounding", "crossBuster", "shootingRush", "shurikenCharging", "shurikenStorm", "deathMarker", "chainSpinningSlash"])
    let comboSkill = ["downAttack", "assault", "defense", "lanceCharge", "rangedCombatMastery", "magnumshot", "smash", "windMill", "counterAttack","crashShot", "lightningRoad", "lightningbolt", "thunder", "iceSpear", "iceBolt", "fireball", "firebolt", "sandBurst", "waterCannon", "flame", "dashpunch", "screwupper", "pounding", "crossBuster", "shootingRush", "shurikenCharging", "shurikenStorm", "deathMarker", "chainSpinningSlash"];
    const [selectCombo, setSelectCombo ] = useState(0);
    const [selectSkill, setSelectSkill ] = useState("blank");


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
                                        <button type="button"></button>
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
                                            <button type="button" data-combo="2" data-skill="downAttack"
                                                    onClick={() => {
                                                        const combeBtnRemove = document.querySelector(".combo_btn_wrap .combo_remove");

                                                        setSelectCombo(2);

                                                        combeBtnRemove.classList.add("active");


                                                        console.log(selectCombo);
                                                    }}>
                                                <img src={`/images/common/skill/${selectSkill}.jpg`} alt={`${selectSkill}`}/>
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
                                        isBoolean03 === true &&
                                        <div className="active_wrap">
                                            <div className="combo_input">
                                                <input type="text" maxLength="2"/>
                                            </div>
                                            <button type="button"></button>
                                        </div>
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
                                            <button type="button"></button>
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
                                            <button type="button"></button>
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
                                            <button type="button"></button>
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
                                                    setSelectSkill(arr);
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
