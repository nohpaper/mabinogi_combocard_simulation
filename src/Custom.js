import './stylesheet/Custom.scss';
import React, {useState} from "react";

/** TODO :
 * 1. left skill button click 시
 *      1-1. ok ---- selectCombo 에 각 숫자 카운팅
 *      1-2. ok ---- add class active
 *          1-2-1. ok ---- 재 클릭 시 remove class active
 * 2. left skill button.active 일 때
 *      2-1. selectCombo 에 각 숫자 확인 후 right skill button 클릭 시 스킬은 고정, 확률 변경
 *
 */
function Custom(props) {
    const [customList, setCustomList] = useState([
        {
            id:0,
            useCoin:3,
        },
        {
            id:1,
            useCoin:5,
        },
        {
            id:2,
            useCoin:7,
        },
        {
            id:3,
            useCoin:9,
        },
        {
            id:4,
            useCoin:11,
        },
        {
            id:5,
            useCoin:13,
        },
    ]);
    const [selectCombo, setSelectCombo ] = useState(0);



    let currentActive = ((currentIdx)=>{
        props.list.map(function(arr, idx){
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
        });
    });
    return(
        <div className="Custom">
            <div className="wrap">
                <section className="random_step">
                    <h1>콤보카드</h1>
                    <div className="container">
                        <h5>콤보 카드 입력창</h5>
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
                                                                                src={`/images/common/skill/${props.list[listIdIdx].selectSkill}.jpg`}
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
                                                                                src={`/images/common/skill/${props.list[listIdIdx].selectSkill}.jpg`}
                                                                                alt={`${props.list[listIdIdx].selectSkill}`}/>
                                                                        </button>
                                                                    </div>
                                                                </div> : null
                                                        }
                                                    </>
                                                )
                                            }
                                        })
                                    }
                                </div>
                                <ul className="skill_wrap">
                                    {
                                        props.skill.map(function (arr, idx) {
                                            return (
                                                <li key={idx}>
                                                    <button type="button" onClick={() => {
                                                        let copy = [...props.list];

                                                        if (selectCombo === 0 && props.list[0].isActive) {
                                                            copy[0].selectSkill = arr;
                                                        } else if (selectCombo === 1 && props.list[1].isActive) {
                                                            copy[1].selectSkill = arr;
                                                        } else if (selectCombo === 2 && props.list[2].isActive) {
                                                            copy[2].selectSkill = arr;
                                                        } else if (selectCombo === 3 && props.list[3].isActive) {
                                                            copy[3].selectSkill = arr;
                                                        } else if (selectCombo === 4 && props.list[4].isActive) {
                                                            copy[4].selectSkill = arr;
                                                        } else if (selectCombo === 5 && props.list[5].isActive) {
                                                            copy[5].selectSkill = arr;
                                                        }
                                                        props.setList(copy);

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