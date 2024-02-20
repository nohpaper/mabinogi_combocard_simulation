import './stylesheet/App.scss';
import './stylesheet/defalut.scss';
import Footer from './Footer.js';

import { Route, Routes } from 'react-router-dom';
import {useEffect, useRef, useState} from "react";
import {logDOM} from "@testing-library/react";

/**TODO :
 * 1. combo 태그 부분 간략화 확인
 *      1-1. remove button click 시 초기화 값 교체
 *
 */

const comboSkill = ["downAttack", "assault", "defense", "lanceCharge", "rangedCombatMastery", "magnumshot", "smash", "windMill", "counterAttack","crashShot", "lightningRoad", "lightningbolt", "thunder", "iceSpear", "iceBolt", "fireball", "firebolt", "sandBurst", "waterCannon", "flame", "dashpunch", "screwupper", "pounding", "crossBuster", "shootingRush", "shurikenCharging", "shurikenStorm", "deathMarker", "chainSpinningSlash"];

function App() {
    const [list, setList] = useState([
        {
            id:0,
            isAddButton:true, //add button true or false
            isActive:false, //
            selectSkill:"blank",
            inputPercent:0,
        },
        {
            id:1,
            isAddButton:false,
            isActive:false,
            selectSkill:"blank",
            inputPercent:0,
        },
        {
            id:2,
            isAddButton:false,
            isActive:false,
            selectSkill:"blank",
            inputPercent:0,
        },
        {
            id:3,
            isAddButton:false,
            isActive:false,
            selectSkill:"blank",
            inputPercent:0,
        },
        {
            id:4,
            isAddButton:false,
            isActive:false,
            selectSkill:"blank",
            inputPercent:0,
        },
        {
            id:5,
            isAddButton:false,
            isActive:false,
            selectSkill:"blank",
            inputPercent:0,
        },
    ]);

    const [skillAll, setSkillAll] = useState([]);
    const [percentAll, setPercentAll] = useState([]);

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
    const [percent01, setPercent01] = useState(0);
    const [percent02, setPercent02] = useState(0);
    const [percent03, setPercent03] = useState(0);
    const [percent04, setPercent04] = useState(0);
    const [percent05, setPercent05] = useState(0);
    const [percent06, setPercent06] = useState(0);

    /*let currentActive = ((idx)=>{
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
    });*/

    let currentActive = ((currentIdx)=>{
        list.map(function(arr, idx, array){
            let listId = list.find(function(x){
                return x.id === idx;
            });

            let copyList = [...list];
            copyList[idx].isActive = false;
            setList(copyList);

            switch(currentIdx){
                case 0: {
                    copyList[0].isActive = true;
                    setList(copyList);

                    setSelectCombo(1); //combo active idx
                    return;
                }
                case 1: {
                    copyList[1].isActive = true;
                    copyList[1].isAddButton = true; //combo add boolean
                    setList(copyList);

                    setSelectCombo(2); //combo active idx
                    return;
                }
                case 2: {
                    copyList[2].isActive = true;
                    copyList[2].isAddButton = true; //combo add boolean
                    setList(copyList);

                    setSelectCombo(3); //combo active idx
                    return;
                }
                case 3: {
                    copyList[3].isActive = true;
                    copyList[3].isAddButton = true; //combo add boolean
                    setList(copyList);

                    setSelectCombo(4); //combo active idx
                    return;
                }
                case 4: {
                    copyList[4].isActive = true;
                    copyList[4].isAddButton = true; //combo add boolean
                    setList(copyList);

                    setSelectCombo(5); //combo active idx
                    return;
                }
                default :
                case 5: {
                    copyList[5].isActive = true;
                    copyList[5].isAddButton = true; //combo add boolean
                    setList(copyList);

                    setSelectCombo(6); //combo active idx
                    return;
                }
            }
        });
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
                                {

                                    list.map(function(arr, idx, array){
                                        let listId = list.find(function(target){
                                            return target.id === idx;
                                        });

                                        //console.log(listId.id, ": ", list[listId.id].isActive);
                                        if(listId.id === 0) {
                                            return (
                                                <div className="combo_each" key={idx}>
                                                    <div className="active_wrap">
                                                        <button type="button" className={ list[listId.id].isActive ? "active" : null }
                                                            onClick={() => { //click event
                                                                if (list[listId.id].isActive && selectCombo === listId.id + 1) { // list[idx].isActive === true
                                                                    let copy = [...list];
                                                                    copy[listId.id].isActive = false;
                                                                    setList(copy);
                                                                }else {
                                                                    currentActive(listId.id); //isActive = true / selectCombo === idx
                                                                }
                                                            }}>
                                                            <img src={`/images/common/skill/${list[listId.id].selectSkill}.jpg`} alt={`${list[listId.id].selectSkill}`}/>
                                                        </button>
                                                    </div>
                                                </div>
                                            )
                                        }else if(listId.id === 1 || listId.id === 3 || listId.id === 5){ // 1 || 3 || 5 일때 노출
                                            return (
                                                <div className="combo_each" key={idx}>
                                                    <button type="button" className="disabled_wrap" onClick={() => {
                                                        if(list[listId.id - 1].isAddButton ){
                                                            // current idx - 1 앞으로 isAddButton 값이 true 일 때,
                                                            currentActive(listId.id);
                                                        }else {
                                                            let copy = [...list];
                                                            copy[listId.id].isAddButton = false;
                                                            setList(copy);
                                                        }
                                                    }}>추가
                                                    </button>
                                                    {
                                                        list[listId.id].isAddButton ?
                                                            <div className="active_wrap">
                                                                <button type="button" className={list[listId.id].isActive ? "active" : null } onClick={() => {
                                                                    if (list[listId.id].isActive && selectCombo === listId.id + 1) { // list[idx].isActive === true
                                                                        let copy = [...list];
                                                                        copy[listId.id].isActive = false;
                                                                        setList(copy);
                                                                    }else {
                                                                        currentActive(listId.id); //isActive = true / selectCombo === idx
                                                                    }
                                                                }}>
                                                                    <img src={`/images/common/skill/${list[listId.id].selectSkill}.jpg`} alt={`${list[listId.id].selectSkill}`}/>
                                                                </button>
                                                                <div className="combo_input">
                                                                    <input type="text" maxLength="2" onChange={(e)=>{
                                                                        let copy = [...list];
                                                                        copy[listId.id].inputPercent = e.target.value;
                                                                        setList(copy);
                                                                    }}/>
                                                                </div>
                                                            </div> : null
                                                    }
                                                </div>
                                            )
                                        }else if(listId.id === 2 || listId.id === 4){ // 2 || 4 일때 노출
                                            return (
                                                <div className="combo_each" key={idx}>
                                                    <button type="button" className="disabled_wrap" onClick={() => {
                                                        if(list[listId.id - 1].isAddButton && !list[listId.id + 1].isAddButton ){
                                                            // current idx - 1 , + 1 즉, 앞 뒤로 isAddButton 값이 각 true, false 일 때,
                                                            currentActive(listId.id);
                                                        }else {
                                                            let copy = [...list];
                                                            copy[listId.id].isAddButton = false;
                                                            setList(copy);
                                                        }
                                                    }}>추가
                                                    </button>
                                                    {
                                                        list[listId.id].isAddButton ?
                                                            <div className="active_wrap">
                                                                <div className="combo_input">
                                                                    <input type="text" maxLength="2" onChange={(e)=>{
                                                                        let copy = [...list];
                                                                        copy[listId.id].inputPercent = e.target.value;
                                                                        setList(copy);
                                                                    }}/>
                                                                </div>
                                                                <button type="button" className={list[listId.id].isActive ? "active" : null } onClick={() => {
                                                                    if (list[listId.id].isActive && selectCombo === listId.id + 1) { // list[idx].isActive === true
                                                                        let copy = [...list];
                                                                        copy[listId.id].isActive = false;
                                                                        setList(copy);
                                                                    }else {
                                                                        currentActive(listId.id); //isActive = true / selectCombo === idx
                                                                    }
                                                                }}>
                                                                    <img src={`/images/common/skill/${list[listId.id].selectSkill}.jpg`} alt={`${list[listId.id].selectSkill}`}/>
                                                                </button>
                                                            </div> : null
                                                    }
                                                </div>
                                            )
                                        }

                                    })
                                }
                                {/*<div className="combo_each">
                                    <div className="active_wrap">
                                        <button type="button" className={selectComboIsActive01 ? "active" : null } onClick={()=>{
                                            currentActive(1);
                                            if(selectComboIsActive01){
                                                setSelectComboIsActive01(false);
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
                                            currentActive(2);
                                        } else {
                                            setIsBoolean02(false);
                                        }
                                    }}>추가
                                    </button>
                                    {
                                        //
                                        isBoolean02 === true ?
                                        <div className="active_wrap">
                                            <button type="button" className={selectComboIsActive02 ? "active" : null } onClick={() => {
                                                currentActive(2);
                                                if(selectComboIsActive02){
                                                    setSelectComboIsActive02(false);
                                                }
                                            }}>
                                                <img src={`/images/common/skill/${selectSkill02}.jpg`} alt={`${selectSkill02}`}/>
                                            </button>
                                            <div className="combo_input">
                                            <input type="text" maxLength="2" onChange={(e)=>{
                                                console.log(e.target.value);
                                                setPercent02(e.target.value);
                                            }}/>
                                            </div>
                                        </div> : null
                                    }
                                </div>
                                <div className="combo_each">
                                    <button type="button" className="disabled_wrap" onClick={() => {
                                        if (isBoolean02 && !isBoolean04 && !isBoolean05 && !isBoolean06) {
                                            //2가 true고, 4~6이 모두 false면 true
                                            currentActive(3);
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
                                                        setPercent03(e.target.value);
                                                    }}/>
                                                </div>
                                                <button type="button" className={selectComboIsActive03 ? "active" : null } onClick={() => {
                                                    currentActive(3);
                                                    if(selectComboIsActive03){
                                                        setSelectComboIsActive03(false);
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
                                            currentActive(4);
                                        } else {
                                            setIsBoolean04(false);
                                        }
                                    }}>추가
                                    </button>
                                    {
                                        isBoolean04 === true &&
                                        <div className="active_wrap">
                                            <button type="button" className={selectComboIsActive04 ? "active" : null }  onClick={()=>{
                                                currentActive(4);
                                                if(selectComboIsActive04){
                                                    setSelectComboIsActive04(false);
                                                }
                                            }}>
                                                <img src={`/images/common/skill/${selectSkill04}.jpg`}  alt={`${selectSkill04}`}/>
                                            </button>
                                            <div className="combo_input">
                                            <input type="text" maxLength="2" onChange={(e)=>{
                                                console.log(e.target.value);
                                                setPercent04(e.target.value);
                                            }}/>
                                            </div>
                                        </div>
                                    }
                                </div>
                                <div className="combo_each">
                                    <button type="button" className="disabled_wrap" onClick={() => {
                                        if (isBoolean02 && isBoolean03 && isBoolean04 && !isBoolean06) {
                                            //2~4가 true고, 6이 모두 false면 true
                                            currentActive(5);
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
                                                    setPercent05(e.target.value);
                                                }}/>
                                            </div>
                                            <button type="button" className={selectComboIsActive05 ? "active" : null }  onClick={()=>{
                                                currentActive(5);
                                                if(selectComboIsActive05){
                                                    setSelectComboIsActive05(false);
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
                                            currentActive(6);
                                        } else {
                                            setIsBoolean06(false);
                                        }
                                    }}>추가
                                    </button>
                                    {
                                        isBoolean06 === true &&
                                        <div className="active_wrap">
                                            <button type="button" className={selectComboIsActive06 ? "active" : null }  onClick={()=>{
                                                currentActive(6);
                                                if(selectComboIsActive06){
                                                    setSelectComboIsActive06(false);
                                                }
                                            }}>
                                                <img src={`/images/common/skill/${selectSkill06}.jpg`} alt={`${selectSkill06}`}/>
                                            </button>
                                            <div className="combo_input">
                                                <input type="text" maxLength="2" onChange={(e)=>{
                                                    console.log(e.target.value);
                                                    setPercent06(e.target.value);
                                                }}/>
                                            </div>
                                        </div>
                                    }
                                </div>*/}
                                <div className="combo_btn_wrap">
                                    <button type="button" ref={comboBtnRemove} className="combo_remove" onClick={()=>{
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
                                            setPercent02(0);
                                            setPercent03(0);
                                            setPercent04(0);
                                            setPercent05(0);
                                            setPercent06(0);
                                        }else if(selectCombo === 3){
                                            setIsBoolean03(false);
                                            setIsBoolean04(false);
                                            setIsBoolean05(false);
                                            setIsBoolean06(false);

                                            setSelectSkill03("blank");
                                            setSelectSkill04("blank");
                                            setSelectSkill05("blank");
                                            setSelectSkill06("blank");
                                            setPercent03(0);
                                            setPercent04(0);
                                            setPercent05(0);
                                            setPercent06(0);
                                        }else if(selectCombo === 4){
                                            setIsBoolean04(false);
                                            setIsBoolean05(false);
                                            setIsBoolean06(false);

                                            setSelectSkill04("blank");
                                            setSelectSkill05("blank");
                                            setSelectSkill06("blank");
                                            setPercent04(0);
                                            setPercent05(0);
                                            setPercent06(0);
                                        }else if(selectCombo === 5){
                                            setIsBoolean05(false);
                                            setIsBoolean06(false);

                                            setSelectSkill05("blank");
                                            setSelectSkill06("blank");
                                            setPercent05(0);
                                            setPercent06(0);
                                        }else if(selectCombo === 6){
                                            setIsBoolean06(false);

                                            setSelectSkill06("blank");
                                            setPercent06(0);
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
                                                    let copy = [...list];

                                                    if(selectCombo === 1 && list[0].isActive){
                                                        copy[0].selectSkill = arr;
                                                    }else if(selectCombo === 2 && list[1].isActive){
                                                        copy[1].selectSkill = arr;
                                                    }else if(selectCombo === 3 && list[2].isActive){
                                                        copy[2].selectSkill = arr;
                                                    }else if(selectCombo === 4 && list[3].isActive){
                                                        copy[3].selectSkill = arr;
                                                    }else if(selectCombo === 5 && list[4].isActive){
                                                        copy[4].selectSkill = arr;
                                                    }else if(selectCombo === 6 && list[5].isActive){
                                                        copy[5].selectSkill = arr;
                                                    }
                                                    setList(copy);

                                                }}><img src={`/images/common/skill/${arr}.jpg`} alt={`${arr}`}/></button>
                                            </li>
                                        )
                                    })
                                }
                            </ul>
                        </div>
                        <div className="btn_wrap">
                            <button type="button" className="next_step" onClick={()=>{
                                let newSkillAll = [list[0].selectSkill, list[1].selectSkill, list[2].selectSkill, list[3].selectSkill, list[4].selectSkill, list[5].selectSkill]
                                let newPercentAll = [list[0].inputPercent, list[1].inputPercent, list[2].inputPercent, list[3].inputPercent, list[4].inputPercent, list[5].inputPercent]
                                setSkillAll([...newSkillAll]);
                                setPercentAll([...newPercentAll]);
                            }}>다음</button>
                            <button type="button" className="reset_step" onClick={()=>{
                                list.map(function(arr, idx){
                                    let copy = [...list];
                                    copy[idx].isAddButton = false;
                                    copy[idx].isActive = false;
                                    copy[idx].selectSkill = "blank";
                                    copy[idx].inputPercent = 0;

                                    copy[0].isAddButton = true; //초기값
                                    setList(copy);
                                    console.log(copy);
                                })
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
