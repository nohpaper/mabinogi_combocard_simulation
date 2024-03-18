import './stylesheet/Input.scss';

import React, {useRef, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";


function Input(props) {
    const navigate = useNavigate();
    const [selectCombo, setSelectCombo ] = useState(0);
    const comboBtnRemove = useRef();
    const [resultValue, setResultValue] = useState([]);

    //도움말 변수
    const tabCont = useRef();
    const progressBtn = useRef();
    const structureBtn = useRef();

    let currentActive = ((currentIdx)=>{
        props.list.forEach(function(element, index){
            let copyList = [...props.list];
            copyList[index].isActive = false;
            props.setList(copyList);


            comboBtnRemove.current.classList.add("active");

            switch(currentIdx){
                case 0: {
                    copyList[0].isActive = true;
                    copyList[0].isAddButton = true; //combo add boolean
                    props.setList(copyList);

                    setSelectCombo(0); //combo active idx
                    return;
                }
                case 1: {
                    copyList[1].isActive = true;
                    copyList[1].isAddButton = true; //combo add boolean
                    props.setList(copyList);

                    setSelectCombo(1); //combo active idx
                    return;
                }
                case 2: {
                    copyList[2].isActive = true;
                    copyList[2].isAddButton = true; //combo add boolean
                    props.setList(copyList);

                    setSelectCombo(2); //combo active idx
                    return;
                }
                case 3: {
                    copyList[3].isActive = true;
                    copyList[3].isAddButton = true; //combo add boolean
                    props.setList(copyList);

                    setSelectCombo(3); //combo active idx
                    return;
                }
                case 4: {
                    copyList[4].isActive = true;
                    copyList[4].isAddButton = true; //combo add boolean
                    props.setList(copyList);

                    setSelectCombo(4); //combo active idx
                    return;
                }
                default :
                case 5: {
                    copyList[5].isActive = true;
                    copyList[5].isAddButton = true; //combo add boolean
                    props.setList(copyList);

                    setSelectCombo(5); //combo active idx
                    return;
                }
            }
        })
    });

    return (
    <div className="Input">
        <div className="wrap">
            <section className="input_step">
                <h1>커스텀마이징할 콤보카드 입력</h1>
                <p>새로 고침이나 현재 창을 벗어날 시 입력한 데이터가 날아가니 주의해주세요</p>
                <div className="container">
                    <div className="main">
                        <h5>콤보 카드 입력창</h5>
                        <div className="input_wrap">
                            <ul>
                                <li className="active">일반</li>
                                {/*<li>골든</li>
                                <li>블랙</li>*/}
                            </ul>
                            <div className="input_tit">
                                <p className="combo_txt">콤보 카드</p>
                                <p className="skill_txt">선택 및 교체 <br/> 스킬</p>
                            </div>
                            <div className="input_inner">
                                <div className="combocard_wrap">
                                    {
                                        props.list.map(function (element, index) {
                                            const listId = props.list.find(function (target) {
                                                return target.id === index;
                                            });

                                            if (listId.id === 0) {
                                                return (
                                                    <div className="combo_each" key={index}>
                                                        <button type="button" className={props.list[listId.id].isAddButton === true ? "hidden disabled_wrap" : "disabled_wrap" } onClick={() => {
                                                            currentActive(listId.id);
                                                        }}>추가
                                                        </button>
                                                        {
                                                            props.list[listId.id].isAddButton ?
                                                            <div className="active_wrap">
                                                                <button type="button"
                                                                        className={props.list[listId.id].isActive ? "active" : null}
                                                                        onClick={() => { //click event
                                                                            if (props.list[listId.id].isActive && selectCombo === listId.id) { // list[index].isActive === true
                                                                                let copy = [...props.list];
                                                                                copy[listId.id].isActive = false;
                                                                                props.setList(copy);
                                                                            } else {
                                                                                currentActive(listId.id); //isActive = true / selectCombo === index
                                                                            }
                                                                        }}>
                                                                    <img
                                                                        src={`./images/common/skill/${props.list[listId.id].selectSkill}.jpg`}
                                                                        alt={`${props.list[listId.id].selectSkill}`}/>
                                                                </button>
                                                            </div> : null
                                                        }
                                                    </div>
                                                )
                                            } else if (listId.id === 1 || listId.id === 3 || listId.id === 5) { // 1 || 3 || 5 일때 노출
                                                return (
                                                    <div className="combo_each" key={index}>
                                                        <button type="button" className="disabled_wrap" onClick={() => {
                                                            if (props.list[listId.id - 1].isAddButton) {
                                                                // current index - 1, 앞으로 isAddButton 값이 true 일 때,
                                                                currentActive(listId.id);
                                                            } else {
                                                                let copy = [...props.list];
                                                                copy[listId.id].isAddButton = false;
                                                                props.setList(copy);
                                                            }
                                                        }}>추가
                                                        </button>
                                                        {
                                                            props.list[listId.id].isAddButton ?
                                                                <div className="active_wrap">
                                                                <button type="button"
                                                                            className={props.list[listId.id].isActive ? "active" : null}
                                                                            onClick={() => {
                                                                                if (props.list[listId.id].isActive && selectCombo === listId.id) { // list[index].isActive === true
                                                                                    let copy = [...props.list];
                                                                                    copy[listId.id].isActive = false;
                                                                                    props.setList(copy);

                                                                                    comboBtnRemove.current.classList.remove("active");
                                                                                } else {
                                                                                    currentActive(listId.id); //isActive = true / selectCombo === index
                                                                                }
                                                                            }}>
                                                                        <img
                                                                            src={`./images/common/skill/${props.list[listId.id].selectSkill}.jpg`}
                                                                            alt={`${props.list[listId.id].selectSkill}`}/>
                                                                    </button>
                                                                    <div className="combo_input">
                                                                        <input type="number" maxLength="2" min="0" max="100" onChange={(e) => {
                                                                            let copy = [...props.list];
                                                                            copy[listId.id].inputPercent = e.target.value;
                                                                            props.setList(copy);

                                                                            if(e.target.value.length >= e.target.maxLength) {
                                                                                //입력한 값이 maxLength보다 크거나 같을 경우 e.target.value값을 잘라줌
                                                                                e.target.value = e.target.value.slice(0, e.target.maxLength);
                                                                            }
                                                                        }}/>
                                                                    </div>
                                                                </div> : null
                                                        }
                                                    </div>
                                                )
                                            }
                                            return ( // 2 || 4 일때 노출
                                                <div className="combo_each" key={index}>
                                                    <button type="button" className="disabled_wrap" onClick={() => {
                                                        if (props.list[listId.id - 1].isAddButton && !props.list[listId.id + 1].isAddButton) {
                                                            // current index - 1 , + 1 즉, 앞 뒤로 isAddButton 값이 각 true, false 일 때,
                                                            currentActive(listId.id);
                                                        } else {
                                                            let copy = [...props.list];
                                                            copy[listId.id].isAddButton = false;
                                                            props.setList(copy);
                                                        }
                                                    }}>추가
                                                    </button>
                                                    {
                                                        props.list[listId.id].isAddButton ?
                                                            <div className="active_wrap">
                                                                <div className="combo_input">
                                                                    <input type="number" maxLength="2" min="0" max="100" onChange={(e) => {
                                                                       let copy = [...props.list];
                                                                       copy[listId.id].inputPercent = e.target.value;
                                                                       props.setList(copy);

                                                                       if (e.target.value.length >= e.target.maxLength) {
                                                                           //입력한 값이 maxLength보다 크거나 같을 경우 e.target.value값을 잘라줌
                                                                           e.target.value = e.target.value.slice(0, e.target.maxLength);
                                                                       }
                                                                    }}/>
                                                                </div>
                                                                <button type="button"
                                                                        className={props.list[listId.id].isActive ? "active" : null}
                                                                        onClick={() => {
                                                                            if (props.list[listId.id].isActive && selectCombo === listId.id) { // list[index].isActive === true
                                                                                let copy = [...props.list];
                                                                                copy[listId.id].isActive = false;
                                                                                props.setList(copy);

                                                                                comboBtnRemove.current.classList.remove("active");
                                                                            } else {
                                                                                currentActive(listId.id); //isActive = true / selectCombo === index
                                                                            }
                                                                        }}>
                                                                    <img
                                                                        src={`./images/common/skill/${props.list[listId.id].selectSkill}.jpg`}
                                                                        alt={`${props.list[listId.id].selectSkill}`}/>
                                                                </button>
                                                            </div> : null
                                                    }
                                                </div>
                                            )
                                        })
                                    }
                                    <div className="combo_btn_wrap">
                                        <button type="button" ref={comboBtnRemove} className="combo_remove" onClick={() => {
                                            comboBtnRemove.current.classList.remove("active");

                                            let copy = props.list.slice(selectCombo);

                                            let upDatedCopy = copy.map((element) => {
                                                return {
                                                    ...element,
                                                    isAddButton: false,
                                                    isActive: false,
                                                    selectSkill: props.blank,
                                                    inputPercent: 0,
                                                }
                                            });

                                            let newList = [...props.list.slice(0, selectCombo), ...upDatedCopy];
                                            props.setList(newList);
                                        }}>제거
                                        </button>
                                    </div>
                                </div>
                                <ul className="skill_wrap">
                                    {
                                        props.skill.map(function (element, index) {
                                            return (
                                                <li key={index}>
                                                    <button type="button" onClick={() => {
                                                        let copy = [...props.list];

                                                        if (props.list[selectCombo].isActive) {
                                                            copy[selectCombo].selectSkill = element;
                                                        }
                                                        props.setList(copy);

                                                    }}><img src={`./images/common/skill/${element}.jpg`} alt={`${element}`}/>
                                                    </button>
                                                </li>
                                            )
                                        })
                                    }
                                </ul>
                            </div>
                            <div className="btn_wrap">
                                <button className="next_step" onClick={() => {
                                    let alertTrigger = false;
                                    let copy = [...props.list];

                                    let _ignore = props.list.map(function (element, index) {
                                        //확인
                                        copy[index].isActive = false;

                                        const isComboActive = copy.filter(target => target.isAddButton).length;//활성화 개수
                                        const isComboSkillNone = copy.filter(target => target.isAddButton && target.selectSkill === "blank").length;//활성화한 것 중 스킬 입력하지 않은 개수

                                        if (isComboSkillNone > 0) {
                                            //스킬을 입력하지 않고
                                            if(!alertTrigger){
                                                alert("스킬 빈 칸을 모두 입력해주세요");
                                                alertTrigger = true;
                                            }else{
                                                return null;
                                            }
                                        } else if (isComboActive <= 1) {
                                            if(!alertTrigger){
                                                alert("콤보 카드는 최소 2칸 이상이어야 합니다.");
                                                alertTrigger = true;
                                            }else {
                                                return null;
                                            }
                                        } else {
                                            navigate(`/custom`);
                                            let newSkillAll = [copy[0].selectSkill, copy[1].selectSkill, copy[2].selectSkill, copy[3].selectSkill, copy[4].selectSkill, copy[5].selectSkill]
                                            let newPercentAll = [copy[0].inputPercent, copy[1].inputPercent, copy[2].inputPercent, copy[3].inputPercent, copy[4].inputPercent, copy[5].inputPercent]
                                            props.setSkillAll([...newSkillAll]);
                                            props.setPercentAll([...newPercentAll]);
                                            props.percentAll.map(Number);
                                        }
                                        return element
                                    });
                                    props.setList(copy);

                                }}>다음
                                </button>


                                <button type="button" className="reset_step" onClick={() => {
                                    let copy = props.list.map(function (element) {
                                        return {
                                            ...element,
                                            isAddButton: false,
                                            isActive: false,
                                            selectSkill: props.blank,
                                            inputPercent: 0,
                                        }
                                    })
                                    props.setList(copy);
                                }}>초기화
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="description">
                        <h5>도움말{/* <span>?</span>*/}</h5>
                        <ul className="tab_cont" ref={tabCont}>
                            <li>
                                {/*콤보 카드란,<br/>
                                    1. 활성화되어 있는 콤보 카드의 순서대로 스킬 사용 시 해당 구간에 적혀 있는 퍼센트대로 보너스 대미지를 주는 카드입니다. 카드의 마지막까지 갔을
                                    경우 다시 처음으로 돌아와 반복합니다.<br/>*/}
                                <div>
                                    마비노기 인 게임내에 있는 승단 시험장의 승단 안내인을 통해 진행 가능한 <b>콤보 카드 커스텀마이징 체험용 시뮬레이터</b>입니다.<br/>
                                    <br/>

                                    인 게임 내에 있는 콤보 카드 커스텀마이징 시스템을 처음 겪어보는 초심자는 행동이 크게 세 가지로 나뉩니다.<br/>
                                    <p className="text_description">
                                        1. 다른 이용자가 쓴 공략 게시글을 보는 경우<br/>
                                        <span className="indentation_txt"><b>이해 했을 경우</b> 인 게임 재화를 소모하여 효율이 좋은 콤보 카드로 커스텀마이징</span>
                                        <span className="indentation_txt"><b>이해하지 못했을 경우</b> 3번으로 가거나 인 게임 재화를 소모하여 효율이 낮은 콤보 카드로 커스텀마이징할 확률 증가</span>
                                        2. 인 게임 재화를 소모하여 커스텀 마이징해보는 경우<br/>
                                        3. 포기하는 경우
                                    </p>
                                    <br/>
                                    본 시뮬레이터는 입력 창을 제외한 커스텀 마이징하는 부분을 인 게임과 유사한 시스템을 구축하여 <u>재화를 소모하지 않고 체험해볼 수 있는 환경을 제공</u>합니다.<br/>
                                </div>
                                <button type="button" className="strong_btn" ref={progressBtn} onClick={() => {
                                    tabCont.current.scroll({
                                        top: progressBtn.current.offsetTop - 100,
                                        behavior: 'smooth'
                                    })
                                }}>[ 진행 방법 ]
                                </button>
                                <div className="progress_box">
                                    1. 인 게임 내 콤보 카드 창에서 <b>소지하고 있는 콤보 카드</b>, 혹은 <b>만들어 보고 싶은 가상의 콤보 카드</b>를 입력
                                    (스킬은 필수 입력, 퍼센트는 선택)<br/>
                                    <div className="text_description">
                                        1-1. <b className="impact_txt">순서대로</b> <span className="btn_txt">추가</span> 버튼을
                                        눌러 칸 확장 및 스킬을 선택<br/>
                                        1-2. 각 콤보 칸에 퍼센트를 입력(콤보 칸 1번 제외, 전체 입력 생략 가능)<br/>
                                        * 칸 추가를 잘못했다면, 제거할 콤보 칸을 클릭 후 하단 <span className="btn_txt">제거</span> 버튼 클릭 시 <u>선택된
                                        콤보 칸 포함하여 그 뒷 콤보 칸 전체가 삭제</u>됩니다.
                                    </div>
                                    2. <span className="btn_txt">다음</span> 버튼을 눌러 퍼센트 및 스킬을 커스텀하여 본인이 원하는 퍼센트를 가진 콤보 카드를
                                    완성합니다.<br/>
                                </div>
                                <button type="button" className="strong_btn" ref={structureBtn} onClick={() => {
                                    tabCont.current.scroll({
                                        top: structureBtn.current.offsetTop - 100,
                                        behavior: 'smooth'
                                    })
                                }}>[ 현재 화면 구조 설명 ]
                                </button>
                                <div>
                                    <div className="number_box">
                                        <strong>1</strong>
                                        <p>활성화된 콤보 칸(3번)에서 스킬 선택 시 해당 스킬로 교체되는 콤보 칸 (총 6칸)</p>
                                    </div>
                                    <div className="number_box">
                                        <strong>2</strong>
                                        <p>해당 콤보 칸의 스킬 퍼센트</p>
                                    </div>
                                    <div className="number_box">
                                        <strong>3</strong>
                                        <p>해당 콤보 칸의 스킬 선택 활성화</p>
                                    </div>
                                    <div className="number_box">
                                        <strong>4</strong>
                                        <p>콤보 칸 추가 버튼</p>
                                    </div>
                                    <div className="number_box">
                                        <strong>5</strong>
                                        <p>콤보 칸 제거 버튼</p>
                                    </div>
                                    <div className="number_box">
                                        <strong>6</strong>
                                        <p>콤보 칸에 선택할 수 있는 스킬의 종류</p>
                                    </div>
                                    <img src="./images/step1/info_img.jpg" alt=""/>
                                </div>

                            </li>
                        </ul>
                    </div>
                </div>
            </section>
        </div>
    </div>
  );
}


export default Input;
