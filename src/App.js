import './stylesheet/App.scss';
import './stylesheet/defalut.scss';
import Footer from './Footer.js';

import { Route, Routes } from 'react-router-dom';
import {useEffect, useRef, useState} from "react";

/**TODO :
 * 1. button 에 active 되어 있을 경우 제거 버튼 클릭 시
 *      1-1. OK ---- 활성화된 버튼의 index 를 확인하고 해당 index 의 button 제어
 *           1-1-1. selectCombo의 값을 확인하고 그 이후의 값들을 모두 false
 *      1-2. OK ---- 선택된 스킬 및 퍼센트 초기화
 *           1-2-1. 선택된 스킬의 selectCombo 값을 확인하고 선택 및 그 이후의 값들을 모두 초기화 처리
 * 2. OK ---- 초기화 버튼 클릭 시 button active remove/select skill remove/onChange figure remove
 * 3. combo 태그 부분 간략화 확인
 * 4. OK ---- 추가 버튼 클릭 시 바로 button active 및 remove btn 활성화
 *      4-1. OK ---- 6칸까지 추가 완료 했을 경우 2~5칸의 combo 제거 못하는 건 확인
 *
 */

const comboSkill = ["downAttack", "assault", "defense", "lanceCharge", "rangedCombatMastery", "magnumshot", "smash", "windMill", "counterAttack","crashShot", "lightningRoad", "lightningbolt", "thunder", "iceSpear", "iceBolt", "fireball", "firebolt", "sandBurst", "waterCannon", "flame", "dashpunch", "screwupper", "pounding", "crossBuster", "shootingRush", "shurikenCharging", "shurikenStorm", "deathMarker", "chainSpinningSlash"];

function App() {
    const [list, setlist] = useState([
        {isActive:false},
        {isActive:false},
        {isActive:false},
        {isActive:false},
        {isActive:false},
        {isActive:false},
    ]);

    const [skillAll, setSkillAll] = useState([]);
    const [figureAll, setFigureAll] = useState([]);

    const comboBtnRemove = useRef();

    //각 combo 추가 버튼 관련 boolean
    const [isBoolean02, setIsBoolean02] = useState(false);
    const [isBoolean03, setIsBoolean03] = useState(false);
    const [isBoolean04, setIsBoolean04] = useState(false);
    const [isBoolean05, setIsBoolean05] = useState(false);
    const [isBoolean06, setIsBoolean06] = useState(false);

    const [selectCombo, setSelectCombo ] = useState(0);

    //각 combo select state
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

    //각 퍼센트 onChange state
    const [figure01, setFigure01] = useState(0);
    const [figure02, setFigure02] = useState(0);
    const [figure03, setFigure03] = useState(0);
    const [figure04, setFigure04] = useState(0);
    const [figure05, setFigure05] = useState(0);
    const [figure06, setFigure06] = useState(0);

    let currentInit = ((idx)=>{
        setSelectComboIsActive01(false);
        setSelectComboIsActive02(false);
        setSelectComboIsActive03(false);
        setSelectComboIsActive04(false);
        setSelectComboIsActive05(false);
        setSelectComboIsActive06(false);

        switch (idx) {
            case 1: {
                setSelectCombo(1); //combo active idx
                setSelectComboIsActive01(true); //combo add class active
                return;
            }
            case 2: {
                setSelectCombo(2); //combo active idx
                setIsBoolean02(true); //combo add boolean
                setSelectComboIsActive02(true); //combo add class active
                return;
            }
            case 3: {
                setSelectCombo(3); //combo active idx
                setIsBoolean03(true); //combo add boolean
                setSelectComboIsActive03(true); //combo add class active
                return;
            }
            case 4: {
                setSelectCombo(4); //combo active idx
                setIsBoolean04(true); //combo add boolean
                setSelectComboIsActive04(true); //combo add class active
                return;
            }
            case 5: {
                setSelectCombo(5); //combo active idx
                setIsBoolean05(true); //combo add boolean
                setSelectComboIsActive05(true); //combo add class active
                return;
            }
            default :
            case 6: {
                setSelectCombo(6); //combo active idx
                setIsBoolean06(true); //combo add boolean
                setSelectComboIsActive06(true); //combo add class active
                return;
            }
        }
    });

    useEffect(()=>{
        //combo 2번칸부터 실행
        if(selectComboIsActive02 || selectComboIsActive03 || selectComboIsActive04 || selectComboIsActive05 || selectComboIsActive06){
            //combo remove btn on
            comboBtnRemove.current.classList.add("active");
        }else {
            //combo remove btn off
            comboBtnRemove.current.classList.remove("active");
        }
    }, [selectComboIsActive01, selectComboIsActive02, selectComboIsActive03, selectComboIsActive04, selectComboIsActive05, selectComboIsActive06])
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
                                            currentInit(1);
                                        }}>
                                            <img src={`/images/common/skill/${selectSkill01}.jpg`} alt={`${selectSkill01}`}/>
                                        </button>
                                    </div>
                                </div>
                                <div className="combo_each">
                                    <button type="button" className="disabled_wrap" onClick={() => {
                                        if (!isBoolean03 && !isBoolean04 && !isBoolean05 && !isBoolean06) {
                                            //3~6이 모두 false면 true
                                            currentInit(2);
                                        } else {
                                            setIsBoolean02(false);
                                        }
                                    }}>추가
                                    </button>
                                    {
                                        //
                                        isBoolean02 === true ?
                                        <div className="active_wrap">
                                            <button type="button" className={selectComboIsActive02 ? "active" : null } onClick={() => { currentInit(2); }}>
                                                <img src={`/images/common/skill/${selectSkill02}.jpg`} alt={`${selectSkill02}`}/>
                                            </button>
                                            <div className="combo_input">
                                            <input type="text" maxLength="2" onChange={(e)=>{
                                                console.log(e.target.value);
                                                setFigure02(e.target.value);
                                            }}/>
                                            </div>
                                        </div> : null
                                    }
                                </div>
                                <div className="combo_each">
                                    <button type="button" className="disabled_wrap" onClick={() => {
                                        if (isBoolean02 && !isBoolean04 && !isBoolean05 && !isBoolean06) {
                                            //2가 true고, 4~6이 모두 false면 true
                                            currentInit(3);
                                        } else {
                                            setIsBoolean03(false);
                                        }
                                    }}>추가
                                    </button>
                                    {
                                        isBoolean03 === true ?
                                            <div className="active_wrap">
                                                <div className="combo_input">
                                                    <input type="text" maxLength="2" onChange={(e)=>{
                                                        console.log(e.target.value);
                                                        setFigure03(e.target.value);
                                                    }}/>
                                                </div>
                                                <button type="button" className={selectComboIsActive03 ? "active" : null } onClick={() => { currentInit(3); }}>
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
                                            currentInit(4);
                                        } else {
                                            setIsBoolean04(false);
                                        }
                                    }}>추가
                                    </button>
                                    {
                                        isBoolean04 === true &&
                                        <div className="active_wrap">
                                            <button type="button" className={selectComboIsActive04 ? "active" : null }  onClick={()=>{ currentInit(4); }}>
                                                <img src={`/images/common/skill/${selectSkill04}.jpg`}  alt={`${selectSkill04}`}/>
                                            </button>
                                            <div className="combo_input">
                                            <input type="text" maxLength="2" onChange={(e)=>{
                                                console.log(e.target.value);
                                                setFigure04(e.target.value);
                                            }}/>
                                            </div>
                                        </div>
                                    }
                                </div>
                                <div className="combo_each">
                                    <button type="button" className="disabled_wrap" onClick={() => {
                                        if (isBoolean02 && isBoolean03 && isBoolean04 && !isBoolean06) {
                                            //2~4가 true고, 6이 모두 false면 true
                                            currentInit(5);
                                        } else {
                                            setIsBoolean05(false);
                                        }
                                    }}>추가
                                    </button>
                                    {
                                        isBoolean05 === true &&
                                        <div className="active_wrap">
                                            <div className="combo_input">
                                                <input type="text" maxLength="2" onChange={(e)=>{
                                                    console.log(e.target.value);
                                                    setFigure05(e.target.value);
                                                }}/>
                                            </div>
                                            <button type="button" className={selectComboIsActive05 ? "active" : null }  onClick={()=>{ currentInit(5); }}>
                                                <img src={`/images/common/skill/${selectSkill05}.jpg`} alt={`${selectSkill05}`}/>
                                            </button>
                                        </div>
                                    }
                                </div>
                                <div className="combo_each">
                                    <button type="button" className="disabled_wrap" onClick={() => {
                                        if (isBoolean02 && isBoolean03 && isBoolean04 && isBoolean05) {
                                            //2~5가 true고
                                            currentInit(6);
                                        } else {
                                            setIsBoolean06(false);
                                        }
                                    }}>추가
                                    </button>
                                    {
                                        isBoolean06 === true &&
                                        <div className="active_wrap">
                                            <button type="button" className={selectComboIsActive06 ? "active" : null }  onClick={()=>{ currentInit(6); }}>
                                                <img src={`/images/common/skill/${selectSkill06}.jpg`} alt={`${selectSkill06}`}/>
                                            </button>
                                            <div className="combo_input">
                                                <input type="text" maxLength="2" onChange={(e)=>{
                                                    console.log(e.target.value);
                                                    setFigure06(e.target.value);
                                                }}/>
                                            </div>
                                        </div>
                                    }
                                </div>
                                <div className="combo_btn_wrap">
                                    <button type="button" ref={comboBtnRemove} className="combo_remove" onClick={()=>{
                                        console.log(selectCombo);
                                        if(selectCombo === 2){
                                            setIsBoolean02(false);
                                            setIsBoolean03(false);
                                            setIsBoolean04(false);
                                            setIsBoolean05(false);
                                            setIsBoolean06(false);

                                            setSelectSkill02("blank");
                                            setSelectSkill03("blank");
                                            setSelectSkill04("blank");
                                            setSelectSkill05("blank");
                                            setSelectSkill06("blank");
                                            setFigure02(0);
                                            setFigure03(0);
                                            setFigure04(0);
                                            setFigure05(0);
                                            setFigure06(0);
                                        }else if(selectCombo === 3){
                                            setIsBoolean03(false);
                                            setIsBoolean04(false);
                                            setIsBoolean05(false);
                                            setIsBoolean06(false);

                                            setSelectSkill03("blank");
                                            setSelectSkill04("blank");
                                            setSelectSkill05("blank");
                                            setSelectSkill06("blank");
                                            setFigure03(0);
                                            setFigure04(0);
                                            setFigure05(0);
                                            setFigure06(0);
                                        }else if(selectCombo === 4){
                                            setIsBoolean04(false);
                                            setIsBoolean05(false);
                                            setIsBoolean06(false);

                                            setSelectSkill04("blank");
                                            setSelectSkill05("blank");
                                            setSelectSkill06("blank");
                                            setFigure04(0);
                                            setFigure05(0);
                                            setFigure06(0);
                                        }else if(selectCombo === 5){
                                            setIsBoolean05(false);
                                            setIsBoolean06(false);

                                            setSelectSkill05("blank");
                                            setSelectSkill06("blank");
                                            setFigure05(0);
                                            setFigure06(0);
                                        }else if(selectCombo === 6){
                                            setIsBoolean06(false);

                                            setSelectSkill06("blank");
                                            setFigure06(0);
                                        }else {
                                            alert("error");
                                        }

                                    }}>제거</button>
                                </div>
                            </div>
                            <ul className="skill_wrap">
                                {
                                    comboSkill.map(function(arr, idx){
                                        return (
                                            <li key={arr}>
                                                <button type="button" onClick={()=>{
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
                            </ul>
                        </div>
                        <div className="btn_wrap">
                            <button type="button" className="next_step" onClick={()=>{
                                let newSkillAll = [selectSkill01, selectSkill02, selectSkill03, selectSkill04, selectSkill05, selectSkill06]
                                let newFigureAll = [figure01, figure02, figure03, figure04, figure05, figure06]
                                setSkillAll([...newSkillAll]);
                                setFigureAll([...newFigureAll]);
                            }}>완성</button>
                            <button type="button" className="reset_step" onClick={()=>{
                                setIsBoolean02(false);
                                setIsBoolean03(false);
                                setIsBoolean04(false);
                                setIsBoolean05(false);
                                setIsBoolean06(false);

                                setSelectSkill01("blank");
                                setSelectSkill02("blank");
                                setSelectSkill03("blank");
                                setSelectSkill04("blank");
                                setSelectSkill05("blank");
                                setSelectSkill06("blank");

                                setFigure01(0);
                                setFigure02(0);
                                setFigure03(0);
                                setFigure04(0);
                                setFigure05(0);
                                setFigure06(0);
                            }}>초기화</button>
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
