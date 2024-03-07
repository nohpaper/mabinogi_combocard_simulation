import './stylesheet/Custom.scss';
import React, {useEffect, useState} from "react";
import { useNavigate } from "react-router-dom";

/** TODO :
 * 1. 사용법 자세히 작성
 * 5. custom.js에서 넘어온 값으로 초기화하기는 v2.0에서
 */

function Custom(props) {
    const navigate = useNavigate();
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
    const [coinValue, setCoinValue] = useState(0);

    const [descriptionIndex, setDescriptionIndex] = useState(0);


    /*useEffect(()=>{
        //usingPercent 삽입
        const copy = [...props.list];

        props.percentAll.forEach(function(arr, idx){
            if(idx > 0){
                copy[idx].usingPercent = props.percentAll[idx] - props.percentAll[idx - 1];
            }
        });
        props.setList(copy);

    }, [props.percentAll]);*/

    useEffect(()=>{
        //usingPercent 삽입
        const copy = [...props.list];

        copy.forEach(function(arr, idx){
            if(idx > 0){
                copy[idx].usingPercent = copy[idx].inputPercent - copy[idx - 1].inputPercent;
            }
        });
        props.setList(copy);

    }, [props.list.inputPercent]);

    useEffect(() => {
        //코인 사용량 삽입 관련 useEffect
        let copyCustom = [...customList];
        copyCustom[selectCombo].usedCoin += coinValue;
        setAllUsedCoin(customList[0].usedCoin + customList[1].usedCoin + customList[2].usedCoin + customList[3].usedCoin + customList[4].usedCoin + customList[5].usedCoin);
    }, [props.list[0].usingPercent, props.list[1].usingPercent, props.list[2].usingPercent, props.list[3].usingPercent, props.list[4].usingPercent, props.list[5].usingPercent]);

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
                                {/*<li>골든</li>
                                <li>블랙</li>*/}
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
                                                                    src={`./images/common/skill/${props.list[listIdIdx].selectSkill}.jpg`}
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
                                                                                src={`./images/common/skill/${props.list[listIdIdx].selectSkill}.jpg`}
                                                                                alt={`${props.list[listIdIdx].selectSkill}`}/>
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
                                            }
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
                                                                            src={`./images/common/skill/${props.list[listIdIdx].selectSkill}.jpg`}
                                                                            alt={`${props.list[listIdIdx].selectSkill}`}/>
                                                                    </button>
                                                                </div>
                                                            </div> : null
                                                    }
                                                </>
                                            )
                                        })
                                    }
                                    <div className="combo_btn_wrap">
                                        <p>사용한 뱃지 총 개수 : <span>{allUsedCoin}</span>개</p>
                                    </div>
                                </div>
                                <ul className="skill_wrap">
                                    {
                                        props.skill.map(function (arr, idx) {
                                            return (
                                                <li key={idx}>
                                                    <button onClick={() => {
                                                        let copy = [...props.list];
                                                        let copyCustom = [...customList];

                                                        //usingPercent 관련 변수
                                                        const percentValue = [0, 10, 10, 12, 15, 20];
                                                        const percentBreakLimitValue = [0, 0, 2, 3, 5, 10];
                                                        const generalRandom = 98;
                                                        const IntervalProbability = Math.floor((Math.random() * 99) + 1); //확률 값 0 ~ 100

                                                        //use coin duplication 변수
                                                        const useCoinSkillDuplication = [0, 5, 10, 15, 20, 25];


                                                        if (selectCombo === 0 && props.list[selectCombo].isActive) {
                                                            //0일 때만
                                                            copy[selectCombo].selectSkill = arr;

                                                        } else if (selectCombo === 1 && props.list[selectCombo].isActive) {
                                                            //1일 때만(한계 돌파X)

                                                            copy[selectCombo].selectSkill = arr;

                                                            //using percent random value
                                                            const percentRandom = Math.floor((Math.random() * percentValue[1]) + 1); //5구간 랜덤 수 1~10

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


                                                        } else if (selectCombo !== 0 && selectCombo !== 1 && props.list[selectCombo].isActive) {
                                                            //0, 1이 아닐 때 전부 실행
                                                            copy[selectCombo].selectSkill = arr;

                                                            //using percent random value
                                                            const percentRandom = Math.floor((Math.random() * percentValue[selectCombo]) + 1); //5구간 랜덤 수 1~10
                                                            const percentRandomBreakLimit = Math.floor((Math.random() * percentBreakLimitValue[selectCombo]) + 1); //한계돌파 랜덤 수 1~2

                                                            if (IntervalProbability > generalRandom && IntervalProbability <= 100) {
                                                                //5구간 한계 돌파 랜덤 확률 (값 > 98 && 값 <= 100)
                                                                const percentSum = percentRandomBreakLimit + percentValue[selectCombo];
                                                                copy[selectCombo].usingPercent = percentSum;
                                                            } else {
                                                                //5구간 일반 랜덤 확률 (값 <=98)
                                                                copy[selectCombo].usingPercent = percentRandom;
                                                            }

                                                            copy[1].inputPercent = copy[0].usingPercent + copy[1].usingPercent;
                                                            copy[2].inputPercent = copy[0].usingPercent + copy[1].usingPercent + copy[2].usingPercent;
                                                            copy[3].inputPercent = copy[0].usingPercent + copy[1].usingPercent + copy[2].usingPercent + copy[3].usingPercent;
                                                            copy[4].inputPercent = copy[0].usingPercent + copy[1].usingPercent + copy[2].usingPercent + copy[3].usingPercent + copy[4].usingPercent;
                                                            copy[5].inputPercent = copy[0].usingPercent + copy[1].usingPercent + copy[2].usingPercent + copy[3].usingPercent + copy[4].usingPercent + copy[5].usingPercent;

                                                        }
                                                        props.setList(copy);

                                                        //use coin duplication

                                                        const count = copy.filter(element => copy[selectCombo].selectSkill === element.selectSkill).length;
                                                        if (count === 1) {
                                                            //중복 없음
                                                            setCoinValue(copyCustom[selectCombo].useCoin);
                                                        } else if (count !== 1) {
                                                            //중복 1개
                                                            setCoinValue(copyCustom[selectCombo].useCoin + useCoinSkillDuplication[count - 1]);
                                                        } else {
                                                            console.log("집계 불가");
                                                        }
                                                    }} type="button"><img src={`./images/common/skill/${arr}.jpg`}
                                                                          alt={`${arr}`}/>
                                                    </button>
                                                </li>
                                            )
                                        })
                                    }
                                </ul>
                            </div>
                            <div className="btn_wrap">
                                <button type="button" onClick={() => {
                                    navigate(-1);

                                    console.log(props.list);

                                    let copy = props.list.map(function(arr){
                                        return {
                                            ...arr,
                                            isAddButton: false,
                                            isActive: false,
                                            selectSkill: props.blank,
                                            inputPercent: 0,
                                            usingPercent: 0,
                                        }
                                    })

                                    copy[0].isAddButton = true; //초기값

                                    props.setList(copy);
                                }}>처음부터
                                </button>
                                {/*<button type="button" onClick={() => {

                                }}>여기서 다시 하기
                                </button>*/}
                            </div>
                        </div>
                    </div>
                    <div className="description">
                        <h5>? 콤보카드 시뮬레이터 도움말</h5>
                        <ul className="tab_wrap">
                            <li className={descriptionIndex === 0 ? "active" : null} onClick={() => {
                                setDescriptionIndex(0);
                            }}>승단 뱃지 사용량
                            </li>
                            <li className={descriptionIndex === 1 ? "active" : null} onClick={() => {
                                setDescriptionIndex(1);
                            }}>사용법
                            </li>
                        </ul>
                        <ul className="tab_cont">
                            <li className={descriptionIndex === 0 ? "active" : null}>
                                <strong>사용된 승단 뱃지</strong>
                                <div className="coin_box">
                                    <p>
                                        <span>1</span> {customList[0].usedCoin}개<br/>
                                        <span>3</span> {customList[2].usedCoin}개<br/>
                                        <span>5</span> {customList[4].usedCoin}개<br/>
                                    </p>
                                    <p>
                                        <span>2</span> {customList[1].usedCoin}개<br/>
                                        <span>4</span> {customList[3].usedCoin}개<br/>
                                        <span>6</span> {customList[5].usedCoin}개<br/>
                                    </p>
                                </div>
                                <p>현재 뱃지 사용량: {coinValue}개 / 사용한 뱃지 총 개수: {allUsedCoin}개</p>
                            </li>
                            <li className={descriptionIndex === 1 ? "active" : null}>
                                <p>
                                    1. 스킬과 퍼센트를 변경할 칸을 클릭하고, 오른쪽에서 변경할 스킬을 클릭합니다.(동일한 스킬로 변경 가능) (GIF로)<br/>
                                    2. 변경한 칸의 동그라미 안의 솟자와 아래 표 속 최고치가 최대한 근접할 때까지 변경합니다.<br/>
                                    * 콤보 카드가 완성되면 현재 콤보 카드를 만들기 위해서 승단 뱃지 재화가 어느정도 필요한지 알 수 있습니다.
                                </p>
                            </li>
                        </ul>
                    </div>
                </section>
            </div>
        </div>
    )
}

export default Custom;