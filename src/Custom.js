import './stylesheet/Custom.scss';
import React, {useEffect, useState} from "react";

/**
 * 1. input.js 에서 percentAll 구간별로 계산해서 list usingPercent 에 넣고 Custom.js 넘어오면 첫 값이 NaN으로 뜨는 이유 확인
 *      -> 현재는 해당 부분을 Custom.js 에서 계산해서 넣는 방식으로 변경
 * 2. custom.js 에서 화면에 노출되는 select skill 부분은 input.js 에서는 list.selectSkill 를 사용하고 있는데, custom 에서도 동일하게 사용하는 것이 맞을까?
 *      아니면, input.js 에서 next button click 했을 때 skillAll state 로 넘겨줬기때문에 해당 state 로 조정하는 것이 맞을까?
 *      -> use coin js를 작성할 때 skillAll 부분을 forEach 돌려서 TODO의 2-2번을 사용하고 싶음
 *
 */
/** TODO :
 * 1. left skill button click 시
 *      1-1. ok ---- selectCombo 에 각 숫자 카운팅
 *      1-2. ok ---- add class active
 *          1-2-1. ok ---- 재 클릭 시 remove class active
 * 2. left skill button.active 일 때
 *      2-1. ok ----selectCombo 에 각 숫자 확인 후 right skill button 클릭 시 스킬은 고정, 확률 변경
 *      2-2. 확률 변경 시 props.skillAll 에 있는 각 skill name 확인 후 현재 클릭한 이름과 동일한 갯수(클릭 제외)만큼 코인 증감
 * 3. ok ---- input.js에서 percent 첫 입력 후 다음 클릭 시 NaN 뜨는 오류 ( 이전 클릭하고, 다시 입력하면 정상 작동 )
 *      3-1. ok ---- 첫 클릭 시 input.js props.percentAll 제대로 담기지 않는 현상 발견
 *      3-2. ok ---- 첫 클릭 시 input.js percentNumber map이 제대로 돌아가지 않는 현상 발견
 * 4. skill_wrap 부분 코드 고도화
 */

function percentRandom(){

}
function Custom(props) {
    const [customList, setCustomList] = useState([
        {
            id:0,
            useCoin:3,
            usedCoin:0,
        },
        {
            id:1,
            useCoin:5,
            usedCoin:0,
        },
        {
            id:2,
            useCoin:7,
            usedCoin:0,
        },
        {
            id:3,
            useCoin:9,
            usedCoin:0,
        },
        {
            id:4,
            useCoin:11,
            usedCoin:0,
        },
        {
            id:5,
            useCoin:13,
            usedCoin:0,
        },
    ]);
    const [selectCombo, setSelectCombo ] = useState(0);
    const [allUsedCoin, setAllUsedCoin ] = useState(0);


    useEffect(()=>{
        //usingPercent 삽입
        let copy = [...props.list];

        props.percentAll.forEach(function(arr, idx){
            if(idx > 0){
                const percentNumber = props.percentAll[idx] - props.percentAll[idx - 1];

                copy[idx].usingPercent = percentNumber;
                props.setList(copy);
            }
        })

    }, [props.percentAll]);


    useEffect(()=>{
        let copyCustom = [...customList];
        /*let newSkillAll = [props.list[0].selectSkill, props.list[1].selectSkill, props.list[2].selectSkill, props.list[3].selectSkill, props.list[4].selectSkill, props.list[5].selectSkill]

        props.setSkillAll([...newSkillAll]);

        console.log("skill: ", props.skillAll);*/
        /*props.skillAll.forEach(function(arr, idx){
            const count = props.skillAll.filter(element => arr === element).length;
            console.log(idx, ": ", count);

            if(idx === 5){
                let coinValue;
                if(count === 1){
                    coinValue = copyCustom[5].useCoin;
                }else if(count === 2){
                    //중복 1개
                    coinValue = copyCustom[5].useCoin + 5;

                }

                console.log(coinValue);
                copyCustom[5].usedCoin += coinValue;
                setCustomList(copyCustom);
            }

        })*/

        console.log("skillAll: ", props.skillAll);


        setAllUsedCoin(customList[0].usedCoin + customList[1].usedCoin + customList[2].usedCoin + customList[3].usedCoin + customList[4].usedCoin + customList[5].usedCoin);
    }, [customList[0].usedCoin, customList[1].usedCoin, customList[2].usedCoin, customList[3].usedCoin, customList[4].usedCoin, customList[5].usedCoin]);


    console.log("selectCombo: ", selectCombo);


    let currentActive = ((currentIdx)=>{
        props.list.forEach(function(arr, idx){
            let copyList = [...props.list];
            copyList[idx].isActive = false;
            props.setList(copyList);

            switch (currentIdx){
                case 0 : {
                    copyList[0].isActive = true;
                    props.setList(copyList);

                    setSelectCombo(0);
                    return;
                }
                case 1 : {
                    copyList[1].isActive = true;
                    props.setList(copyList);

                    setSelectCombo(1);
                    return;
                }
                case 2 : {
                    copyList[2].isActive = true;
                    props.setList(copyList);

                    setSelectCombo(2);
                    return;
                }
                case 3 : {
                    copyList[3].isActive = true;
                    props.setList(copyList);

                    setSelectCombo(3);
                    return;
                }
                case 4 : {
                    copyList[4].isActive = true;
                    props.setList(copyList);

                    setSelectCombo(4);
                    return;
                }
                default:
                case 5 : {
                    copyList[5].isActive = true;
                    props.setList(copyList);

                    setSelectCombo(5);
                    return;
                }
            }
        })
        /*props.list.map(function(arr, idx){
           let copyList = [...props.list];
           copyList[idx].isActive = false;
           props.setList(copyList);

            switch (currentIdx){
                case 0 : {
                    copyList[0].isActive = true;
                    props.setList(copyList);

                    setSelectCombo(0);
                    return;
                }
                case 1 : {
                    copyList[1].isActive = true;
                    props.setList(copyList);

                    setSelectCombo(1);
                    return;
                }
                case 2 : {
                    copyList[2].isActive = true;
                    props.setList(copyList);

                    setSelectCombo(2);
                    return;
                }
                case 3 : {
                    copyList[3].isActive = true;
                    props.setList(copyList);

                    setSelectCombo(3);
                    return;
                }
                case 4 : {
                    copyList[4].isActive = true;
                    props.setList(copyList);

                    setSelectCombo(4);
                    return;
                }
                default:
                case 5 : {
                    copyList[5].isActive = true;
                    props.setList(copyList);

                    setSelectCombo(5);
                    return;
                }
            }

            return{}
        });*/
    });
    return(
        <div className="Custom">
            <div className="wrap">
                <section className="random_step">
                    <h1>콤보카드 커스텀마이징</h1>
                    <div className="container">
                        <h5>본인의 콤보 카드</h5>
                        <div className="random_wrap">
                            <ul>
                                <li className="active">일반</li>
                                <li>골든</li>
                                <li>블랙</li>
                            </ul>
                            <div className="random_inner">
                                <div className="combocard_wrap">
                                    {
                                        props.list.map(function (arr, idx) {
                                            const listId = props.list.find(function (target) {
                                                return target.id === idx;
                                            });
                                            const listIdIdx = listId.id;
                                            if (listIdIdx === 0) {
                                                return (
                                                    <div className="combo_each" key={idx}>
                                                        <div className="active_wrap">
                                                            <button type="button"
                                                                    className={props.list[listIdIdx].isActive ? "active" : null}
                                                                    onClick={() => { //click event
                                                                        currentActive(listIdIdx); //isActive = true / selectCombo === idx
                                                                    }}>
                                                                <img
                                                                    src={`/images/common/skill/${props.list[listIdIdx].selectSkill}.jpg`}
                                                                    alt={`${props.list[listIdIdx].selectSkill}`}/>
                                                            </button>
                                                        </div>
                                                    </div>
                                                )
                                            } else if (listIdIdx === 1 || listIdIdx === 3 || listIdIdx === 5) {
                                                return (
                                                    <>
                                                        {
                                                            props.list[listIdIdx].isAddButton ?
                                                                <div className="combo_each" key={idx}>
                                                                    <div className="active_wrap">
                                                                        <button type="button"
                                                                                className={props.list[listIdIdx].isActive ? "active" : null}
                                                                                onClick={() => {
                                                                                    if (props.list[listIdIdx].isActive && selectCombo === listIdIdx) { // list[idx].isActive === true
                                                                                        let copy = [...props.list];
                                                                                        copy[listIdIdx].isActive = false;
                                                                                        props.setList(copy);
                                                                                    } else {
                                                                                        currentActive(listIdIdx); //isActive = true / selectCombo === idx
                                                                                    }
                                                                                }}>
                                                                            <img
                                                                                src={`/images/common/skill/${props.skillAll[listIdIdx]}.jpg`}
                                                                                alt={`${props.skillAll[listIdIdx]}`}/>
                                                                        </button>
                                                                        <div className="combo_value">
                                                                            <span>{props.list[listIdIdx].inputPercent}</span>
                                                                            <p className="combo_count">{props.list[listIdIdx].usingPercent}</p>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                : null
                                                        }
                                                    </>
                                                )
                                            } else if (listIdIdx === 2 || listIdIdx === 4) { // 2 || 4 일때 노출
                                                return (
                                                    <>
                                                        {
                                                            props.list[listIdIdx].isAddButton ?
                                                                <div className="combo_each" key={idx}>
                                                                    <div className="active_wrap">
                                                                        <div className="combo_value">
                                                                            <span>{props.list[listIdIdx].inputPercent}</span>
                                                                            <p className="combo_count">{props.list[listIdIdx].usingPercent}</p>
                                                                        </div>
                                                                        <button type="button"
                                                                                className={props.list[listIdIdx].isActive ? "active" : null}
                                                                                onClick={() => {
                                                                                    if (props.list[listIdIdx].isActive && selectCombo === listIdIdx) { // list[idx].isActive === true
                                                                                        let copy = [...props.list];
                                                                                        copy[listIdIdx].isActive = false;
                                                                                        props.setList(copy);
                                                                                    } else {
                                                                                        currentActive(listIdIdx); //isActive = true / selectCombo === idx
                                                                                    }
                                                                                }}>
                                                                            <img
                                                                                src={`/images/common/skill/${props.skillAll[listIdIdx]}.jpg`}
                                                                                alt={`${props.skillAll[listIdIdx]}`}/>
                                                                        </button>
                                                                    </div>
                                                                </div> : null
                                                        }
                                                    </>
                                                )
                                            }
                                        })
                                    }
                                    <div className="combo_btn_wrap">
                                        <p>사용한 코인 갯수 : <span>{allUsedCoin}</span>개</p>
                                    </div>
                                </div>
                                <ul className="skill_wrap">
                                    {
                                        props.skill.map(function (arr, idx) {
                                            return (
                                                <li key={idx}>
                                                    <button type="button" onClick={() => {
                                                        let copy = [...props.list];
                                                        let copySkill = [...props.skillAll];
                                                        let copyCustom = [...customList];

                                                        const generalRandom = 98;
                                                        const IntervalProbability =  Math.floor((Math.random() * 99) + 1); //확률 값 0 ~ 100

                                                        if (selectCombo === 0 && props.list[0].isActive) {
                                                            copySkill[0] = arr;
                                                            //copy[0].selectSkill = arr;

                                                            //use coin
                                                            //copyCustom[0].usedCoin += copyCustom[0].useCoin;

                                                            console.log("use: ", copyCustom[0].useCoin);
                                                            console.log("used: ", copyCustom[0].usedCoin);
                                                        } else if (selectCombo === 1 && props.list[1].isActive) {
                                                            copySkill[1] = arr;
                                                            //copy[1].selectSkill = arr;

                                                            //using percent random value
                                                            const percentValue = 10;
                                                            const percentRandom = Math.floor((Math.random() * percentValue) + 1); //5구간 랜덤 수 1~10

                                                            //1구간 일반 랜덤 확률
                                                            copy[1].usingPercent = percentRandom;
                                                            console.log("percentRandom: ", percentRandom);

                                                            copy[1].inputPercent = copy[0].usingPercent + copy[1].usingPercent;
                                                            copy[2].inputPercent = copy[0].usingPercent + copy[1].usingPercent + copy[2].usingPercent;
                                                            copy[3].inputPercent = copy[0].usingPercent + copy[1].usingPercent + copy[2].usingPercent + copy[3].usingPercent;
                                                            copy[4].inputPercent = copy[0].usingPercent + copy[1].usingPercent + copy[2].usingPercent + copy[3].usingPercent + copy[4].usingPercent;
                                                            copy[5].inputPercent = copy[0].usingPercent + copy[1].usingPercent + copy[2].usingPercent + copy[3].usingPercent + copy[4].usingPercent + copy[5].usingPercent;

                                                            //use coin
                                                            //copyCustom[1].usedCoin += copyCustom[1].useCoin;

                                                            console.log("use: ", copyCustom[1].useCoin);
                                                            console.log("used: ", copyCustom[1].usedCoin);

                                                        } else if (selectCombo === 2 && props.list[2].isActive) {
                                                            copySkill[2] = arr;
                                                            //copy[2].selectSkill = arr;

                                                            //using percent random value
                                                            const percentValue = 10;
                                                            const percentRandom = Math.floor((Math.random() * percentValue) + 1); //5구간 랜덤 수 1~10
                                                            const percentRandomBreakLimit = Math.floor((Math.random() * 2) + 1); //한계돌파 랜덤 수 1~2

                                                            if(IntervalProbability > generalRandom && IntervalProbability <= 100) {
                                                                //5구간 한계 돌파 랜덤 확률 (값 > 98 && 값 <= 100)
                                                                const percentSum = percentRandomBreakLimit + percentValue;
                                                                copy[2].usingPercent = percentSum;
                                                                console.log("percentSum: ", percentSum);

                                                            }else {
                                                                //5구간 일반 랜덤 확률 (값 <=98)
                                                                copy[2].usingPercent = percentRandom;
                                                                console.log("percentRandom: ", percentRandom);
                                                            }

                                                            copy[1].inputPercent = copy[0].usingPercent + copy[1].usingPercent;
                                                            copy[2].inputPercent = copy[0].usingPercent + copy[1].usingPercent + copy[2].usingPercent;
                                                            copy[3].inputPercent = copy[0].usingPercent + copy[1].usingPercent + copy[2].usingPercent + copy[3].usingPercent;
                                                            copy[4].inputPercent = copy[0].usingPercent + copy[1].usingPercent + copy[2].usingPercent + copy[3].usingPercent + copy[4].usingPercent;
                                                            copy[5].inputPercent = copy[0].usingPercent + copy[1].usingPercent + copy[2].usingPercent + copy[3].usingPercent + copy[4].usingPercent + copy[5].usingPercent;

                                                            //use coin
                                                            //copyCustom[2].usedCoin += copyCustom[2].useCoin;

                                                            console.log("use: ", copyCustom[2].useCoin);
                                                            console.log("used: ", copyCustom[2].usedCoin);

                                                        } else if (selectCombo === 3 && props.list[3].isActive) {
                                                            copySkill[3] = arr;
                                                            //copy[3].selectSkill = arr;

                                                            //using percent random value
                                                            const percentValue = 12;
                                                            const percentRandom = Math.floor((Math.random() * percentValue) + 1); //5구간 랜덤 수 1~12
                                                            const percentRandomBreakLimit = Math.floor((Math.random() * 3) + 1); //한계돌파 랜덤 수 1~3

                                                            if(IntervalProbability > generalRandom && IntervalProbability <= 100) {
                                                                //5구간 한계 돌파 랜덤 확률 (값 > 98 && 값 <= 100)
                                                                const percentSum = percentRandomBreakLimit + percentValue;
                                                                copy[3].usingPercent = percentSum;
                                                                console.log("percentSum: ", percentSum);

                                                            }else {
                                                                //5구간 일반 랜덤 확률 (값 <=98)
                                                                copy[3].usingPercent = percentRandom;
                                                                console.log("percentRandom: ", percentRandom);
                                                            }

                                                            copy[1].inputPercent = copy[0].usingPercent + copy[1].usingPercent;
                                                            copy[2].inputPercent = copy[0].usingPercent + copy[1].usingPercent + copy[2].usingPercent;
                                                            copy[3].inputPercent = copy[0].usingPercent + copy[1].usingPercent + copy[2].usingPercent + copy[3].usingPercent;
                                                            copy[4].inputPercent = copy[0].usingPercent + copy[1].usingPercent + copy[2].usingPercent + copy[3].usingPercent + copy[4].usingPercent;
                                                            copy[5].inputPercent = copy[0].usingPercent + copy[1].usingPercent + copy[2].usingPercent + copy[3].usingPercent + copy[4].usingPercent + copy[5].usingPercent;

                                                            //use coin
                                                            //copyCustom[3].usedCoin += copyCustom[3].useCoin;

                                                            console.log("use: ", copyCustom[3].useCoin);
                                                            console.log("used: ", copyCustom[3].usedCoin);

                                                        } else if (selectCombo === 4 && props.list[4].isActive) {
                                                            copySkill[4] = arr;
                                                            //copy[4].selectSkill = arr;

                                                            //using percent random value
                                                            const percentValue = 15;
                                                            const percentRandom = Math.floor((Math.random() * percentValue) + 1); //5구간 랜덤 수 1~15
                                                            const percentRandomBreakLimit = Math.floor((Math.random() * 5) + 1); //한계돌파 랜덤 수 1~5

                                                            if(IntervalProbability > generalRandom && IntervalProbability <= 100) {
                                                                //5구간 한계 돌파 랜덤 확률 (값 > 98 && 값 <= 100)
                                                                const percentSum = percentRandomBreakLimit + percentValue;
                                                                copy[4].usingPercent = percentSum;
                                                                console.log("percentSum: ", percentSum);

                                                            }else {
                                                                //5구간 일반 랜덤 확률 (값 <=98)
                                                                copy[4].usingPercent = percentRandom;
                                                                console.log("percentRandom: ", percentRandom);
                                                            }

                                                            copy[1].inputPercent = copy[0].usingPercent + copy[1].usingPercent;
                                                            copy[2].inputPercent = copy[0].usingPercent + copy[1].usingPercent + copy[2].usingPercent;
                                                            copy[3].inputPercent = copy[0].usingPercent + copy[1].usingPercent + copy[2].usingPercent + copy[3].usingPercent;
                                                            copy[4].inputPercent = copy[0].usingPercent + copy[1].usingPercent + copy[2].usingPercent + copy[3].usingPercent + copy[4].usingPercent;
                                                            copy[5].inputPercent = copy[0].usingPercent + copy[1].usingPercent + copy[2].usingPercent + copy[3].usingPercent + copy[4].usingPercent + copy[5].usingPercent;

                                                            //use coin
                                                            //copyCustom[4].usedCoin += copyCustom[4].useCoin;
                                                            console.log("use: ", copyCustom[4].useCoin);
                                                            console.log("used: ", copyCustom[4].usedCoin);

                                                        } else if (selectCombo === 5 && props.list[5].isActive) {
                                                            copySkill[5] = arr;
                                                            //props.setSkillAll(arr);
                                                            //copy[5].selectSkill = arr;

                                                            //using percent random value
                                                            const percentValue = 20;
                                                            const percentRandom = Math.floor((Math.random() * percentValue) + 1); //5구간 랜덤 수 1~20
                                                            const percentRandomBreakLimit = Math.floor((Math.random() * 10) + 1); //한계돌파 랜덤 수 1~10

                                                            if(IntervalProbability > generalRandom && IntervalProbability <= 100) {
                                                                //5구간 한계 돌파 랜덤 확률 (값 > 98 && 값 <= 100)
                                                                const percentSum = percentRandomBreakLimit + percentValue;
                                                                copy[5].usingPercent = percentSum;
                                                                //console.log("percentSum: ", percentSum);

                                                            }else {
                                                                //5구간 일반 랜덤 확률 (값 <=98)
                                                                copy[5].usingPercent = percentRandom;
                                                                //console.log("percentRandom: ", percentRandom);
                                                            }

                                                            copy[1].inputPercent = copy[0].usingPercent + copy[1].usingPercent;
                                                            copy[2].inputPercent = copy[0].usingPercent + copy[1].usingPercent + copy[2].usingPercent;
                                                            copy[3].inputPercent = copy[0].usingPercent + copy[1].usingPercent + copy[2].usingPercent + copy[3].usingPercent;
                                                            copy[4].inputPercent = copy[0].usingPercent + copy[1].usingPercent + copy[2].usingPercent + copy[3].usingPercent + copy[4].usingPercent;
                                                            copy[5].inputPercent = copy[0].usingPercent + copy[1].usingPercent + copy[2].usingPercent + copy[3].usingPercent + copy[4].usingPercent + copy[5].usingPercent;



                                                            //use coin
                                                            //copyCustom[5].usedCoin += copyCustom[5].useCoin;


                                                            /*console.log("use: ", copyCustom[5].useCoin);
                                                            console.log("used: ", copyCustom[5].usedCoin);*/

                                                        }
                                                        props.setList(copy);
                                                        props.setSkillAll(copySkill);
                                                        //setCustomList(copyCustom);


                                                    }}><img src={`/images/common/skill/${arr}.jpg`} alt={`${arr}`}/>
                                                    </button>
                                                </li>
                                            )
                                        })
                                    }
                                </ul>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    )
}

export default Custom;