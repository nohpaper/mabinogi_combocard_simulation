import './stylesheet/Input.scss';

import React, {useEffect, useRef, useState} from "react";
import {Link,} from "react-router-dom";

/** HACK :
 * 1. combo_btn_wrap / reset_step 부분 동일하게 배열 copy 로 사용하였는데 다르게 작동되는 부분
 * 2. useEffect App.js로 올려야 하는
 *
 */

function Input(props) {
    const [selectCombo, setSelectCombo ] = useState(0);
    const comboBtnRemove = useRef();

    let currentActive = ((currentIdx)=>{
        props.list.map(function(arr, idx, array){

            let copyList = [...props.list];
            copyList[idx].isActive = false;
            props.setList(copyList);

            switch(currentIdx){
                case 0: {
                    copyList[0].isActive = true;
                    props.setList(copyList);

                    setSelectCombo(0); //combo active idx
                    comboBtnRemove.current.classList.remove("active");
                    return;
                }
                case 1: {
                    copyList[1].isActive = true;
                    copyList[1].isAddButton = true; //combo add boolean
                    props.setList(copyList);

                    setSelectCombo(1); //combo active idx
                    comboBtnRemove.current.classList.add("active");
                    return;
                }
                case 2: {
                    copyList[2].isActive = true;
                    copyList[2].isAddButton = true; //combo add boolean
                    props.setList(copyList);

                    setSelectCombo(2); //combo active idx
                    comboBtnRemove.current.classList.add("active");
                    return;
                }
                case 3: {
                    copyList[3].isActive = true;
                    copyList[3].isAddButton = true; //combo add boolean
                    props.setList(copyList);

                    setSelectCombo(3); //combo active idx
                    comboBtnRemove.current.classList.add("active");
                    return;
                }
                case 4: {
                    copyList[4].isActive = true;
                    copyList[4].isAddButton = true; //combo add boolean
                    props.setList(copyList);

                    setSelectCombo(4); //combo active idx
                    comboBtnRemove.current.classList.add("active");
                    return;
                }
                default :
                case 5: {
                    copyList[5].isActive = true;
                    copyList[5].isAddButton = true; //combo add boolean
                    props.setList(copyList);

                    setSelectCombo(5); //combo active idx
                    comboBtnRemove.current.classList.add("active");
                    return;
                }
            }
        });
    });


    /*useEffect(()=>{
        //combo 2번칸부터 true 면 실행
        if(props.list[1].isActive || props.list[2].isActive || props.list[3].isActive || props.list[4].isActive || props.list[5].isActive){
            //combo remove btn on

            //0은 제거 불가, 그 외만 add class active
            comboBtnRemove.current.classList.add("active");

        }else {
            //combo remove btn off
            comboBtnRemove.current.classList.remove("active");
        }

    }, [props.list[1].isActive, props.list[2].isActive, props.list[3].isActive, props.list[4].isActive, props.list[5].isActive])*/



    console.log(props.list);
  return (
    <div className="Input">
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
                                    props.list.map(function(arr, idx){
                                        const listId = props.list.find(function(target){
                                            return target.id === idx;
                                        });

                                        if(listId.id === 0) {
                                            return (
                                                <div className="combo_each" key={idx}>
                                                    <div className="active_wrap">
                                                        <button type="button" className={ props.list[listId.id].isActive ? "active" : null }
                                                            onClick={() => { //click event
                                                                if (props.list[listId.id].isActive && selectCombo === listId.id) { // list[idx].isActive === true
                                                                    let copy = [...props.list];
                                                                    copy[listId.id].isActive = false;
                                                                    props.setList(copy);
                                                                }else {
                                                                    currentActive(listId.id); //isActive = true / selectCombo === idx
                                                                }
                                                            }}>
                                                            <img src={`/images/common/skill/${props.list[listId.id].selectSkill}.jpg`} alt={`${props.list[listId.id].selectSkill}`}/>
                                                        </button>
                                                    </div>
                                                </div>
                                            )
                                        }else if(listId.id === 1 || listId.id === 3 || listId.id === 5){ // 1 || 3 || 5 일때 노출
                                            return (
                                                <div className="combo_each" key={idx}>
                                                    <button type="button" className="disabled_wrap" onClick={() => {
                                                        if(props.list[listId.id - 1].isAddButton ){
                                                            // current idx - 1, 앞으로 isAddButton 값이 true 일 때,
                                                            currentActive(listId.id);
                                                        }else {
                                                            let copy = [...props.list];
                                                            copy[listId.id].isAddButton = false;
                                                            props.setList(copy);
                                                        }
                                                    }}>추가
                                                    </button>
                                                    {
                                                        props.list[listId.id].isAddButton ?
                                                            <div className="active_wrap">
                                                                <button type="button" className={props.list[listId.id].isActive ? "active" : null } onClick={() => {
                                                                    if (props.list[listId.id].isActive && selectCombo === listId.id) { // list[idx].isActive === true
                                                                        let copy = [...props.list];
                                                                        copy[listId.id].isActive = false;
                                                                        props.setList(copy);

                                                                        comboBtnRemove.current.classList.remove("active");
                                                                    }else {
                                                                        currentActive(listId.id); //isActive = true / selectCombo === idx
                                                                    }
                                                                }}>
                                                                    <img src={`/images/common/skill/${props.list[listId.id].selectSkill}.jpg`} alt={`${props.list[listId.id].selectSkill}`}/>
                                                                </button>
                                                                <div className="combo_input">
                                                                    <input type="text" maxLength="2" onChange={(e)=>{
                                                                        let copy = [...props.list];
                                                                        copy[listId.id].inputPercent = e.target.value;
                                                                        props.setList(copy);
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
                                                        if(props.list[listId.id - 1].isAddButton && !props.list[listId.id + 1].isAddButton ){
                                                            // current idx - 1 , + 1 즉, 앞 뒤로 isAddButton 값이 각 true, false 일 때,
                                                            currentActive(listId.id);
                                                        }else {
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
                                                                    <input type="text" maxLength="2" onChange={(e)=>{
                                                                        let copy = [...props.list];
                                                                        copy[listId.id].inputPercent = e.target.value;
                                                                        props.setList(copy);
                                                                    }}/>
                                                                </div>
                                                                <button type="button" className={props.list[listId.id].isActive ? "active" : null } onClick={() => {
                                                                    if (props.list[listId.id].isActive && selectCombo === listId.id) { // list[idx].isActive === true
                                                                        let copy = [...props.list];
                                                                        copy[listId.id].isActive = false;
                                                                        props.setList(copy);

                                                                        comboBtnRemove.current.classList.remove("active");
                                                                    }else {
                                                                        currentActive(listId.id); //isActive = true / selectCombo === idx
                                                                    }
                                                                }}>
                                                                    <img src={`/images/common/skill/${props.list[listId.id].selectSkill}.jpg`} alt={`${props.list[listId.id].selectSkill}`}/>
                                                                </button>
                                                            </div> : null
                                                    }
                                                </div>
                                            )
                                        }

                                    })
                                }
                                <div className="combo_btn_wrap">
                                    <button type="button" ref={comboBtnRemove} className="combo_remove" onClick={()=>{
                                        if(selectCombo === selectCombo && selectCombo !== 0 ) {
                                            let copy = props.list.slice(selectCombo);

                                            let upDatedCopy = copy.map((arr) => {
                                                return {
                                                    ...arr,
                                                    isAddButton: false,
                                                    isActive: false,
                                                    selectSkill: props.blank,
                                                    inputPercent: 0,
                                                }
                                            });

                                            let newList = [...props.list.slice(0, selectCombo), ...upDatedCopy];
                                            props.setList(newList);
                                        }
                                    }}>제거</button>
                                </div>
                            </div>
                            <ul className="skill_wrap">
                                {
                                    props.skill.map(function(arr, idx){
                                        return (
                                            <li key={arr}>
                                                <button type="button" onClick={()=>{
                                                    let copy = [...props.list];

                                                    if(selectCombo === 0 && props.list[0].isActive){
                                                        copy[0].selectSkill = arr;
                                                    }else if(selectCombo === 1 && props.list[1].isActive){
                                                        copy[1].selectSkill = arr;
                                                    }else if(selectCombo === 2 && props.list[2].isActive){
                                                        copy[2].selectSkill = arr;
                                                    }else if(selectCombo === 3 && props.list[3].isActive){
                                                        copy[3].selectSkill = arr;
                                                    }else if(selectCombo === 4 && props.list[4].isActive){
                                                        copy[4].selectSkill = arr;
                                                    }else if(selectCombo === 5 && props.list[5].isActive){
                                                        copy[5].selectSkill = arr;
                                                    }
                                                    props.setList(copy);

                                                }}><img src={`/images/common/skill/${arr}.jpg`} alt={`${arr}`}/></button>
                                            </li>
                                        )
                                    })
                                }
                            </ul>
                        </div>
                        <div className="btn_wrap">
                            <Link to="/custom" className="next_step" onClick={(e) => {
                                let alertTrigger = false;
                                props.list.map(function(arr, idx){
                                    //확인
                                    let copy = [...props.list];
                                    copy[idx].isActive = false;
                                    props.setList(copy);

                                    if(arr.isAddButton && arr.selectSkill === "blank" && !alertTrigger){
                                        e.preventDefault();
                                        alert("빈칸을 모두 입력해주세요");
                                        alertTrigger = true;
                                    }else {
                                        let newSkillAll = [props.list[0].selectSkill, props.list[1].selectSkill, props.list[2].selectSkill, props.list[3].selectSkill, props.list[4].selectSkill, props.list[5].selectSkill]
                                        let newPercentAll = [props.list[0].inputPercent, props.list[1].inputPercent, props.list[2].inputPercent, props.list[3].inputPercent, props.list[4].inputPercent, props.list[5].inputPercent]
                                        props.setSkillAll([...newSkillAll]);
                                        props.setPercentAll([...newPercentAll]);
                                    }
                                })
                            }}>다음</Link>


                            <button type="button" className="reset_step" onClick={()=>{
                                props.list.map(function(arr, idx){
                                    let copy = [...props.list];
                                    copy[idx].isAddButton = false;
                                    copy[idx].isActive = false;
                                    copy[idx].selectSkill = props.blank;
                                    copy[idx].inputPercent = 0;

                                    copy[0].isAddButton = true; //초기값
                                    props.setList(copy);
                                })
                            }}>초기화</button>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    </div>
  );
}



export default Input;
