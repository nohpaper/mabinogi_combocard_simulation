import './stylesheet/Custom.scss';
import React, {useEffect, useRef, useState} from "react";
import { useNavigate } from "react-router-dom";

/** TODO :
 * 1. ok --- 사용법 자세히 작성
 *      1-1. 도움말 1번 작성 GIF 등...
 * 2. navigate(-1) 정상작동 안됨
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
    const [allUsedCoin, setAllUsedCoin ] = useState(0); //사용된 전체 코인 개수
    const [coinValue, setCoinValue] = useState(0); //스킬 중복 개수에 따른 코인 추가 값
    const [isResetBoolean, setIsResetBoolean] = useState(false);

    //도움말 변수
    const tabCont = useRef();
    const usageBtn = useRef();




    useEffect(()=>{
        const copy = [...props.list];
        const copyCustom = [...customList];

        if(!isResetBoolean){
            //여기서 다시 하기 버튼 클릭하지 않았을 때

            //usingPercent 삽입
            props.percentAll.forEach(function(arr, idx){
                if(idx > 0){
                    copy[idx].usingPercent = props.percentAll[idx] - props.percentAll[idx - 1];
                }
            });
            props.setList(copy);

            //코인 사용량 삽입 관련 useEffect
            copyCustom[selectCombo].usedCoin += coinValue;
            setAllUsedCoin(customList[0].usedCoin + customList[1].usedCoin + customList[2].usedCoin + customList[3].usedCoin + customList[4].usedCoin + customList[5].usedCoin);
        }else {
            //여기서 다시 하기 버튼 클릭했을 시
            setTimeout(function(){
                setIsResetBoolean(false);
            }, 500);
        }

    }, [props.percentAll]);

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
                    <p>새로 고침이나 현재 창을 벗어날 시 입력한 데이터가 날아가니 주의해주세요</p>
                    <div className="container">
                        <div className="main">
                            <h5>본인의 콤보 카드</h5>
                            <div className="random_wrap">
                                <ul>
                                    <li className="active">일반</li>
                                    {/*<li>골든</li>
                                <li>블랙</li>*/}
                                </ul>
                                <div className="random_tit">
                                    <p className="combo_txt">콤보 카드</p>
                                    <p className="skill_txt">선택 및 교체 <br/> 스킬</p>
                                </div>
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
                                                                            if (props.list[listIdIdx].isActive && selectCombo === listIdIdx) { // list[idx].isActive === true
                                                                                let copy = [...props.list];
                                                                                copy[listIdIdx].isActive = false;
                                                                                props.setList(copy);
                                                                            } else {
                                                                                currentActive(listIdIdx); //isActive = true / selectCombo === idx
                                                                            }
                                                                        }}>
                                                                    <img
                                                                        src={`./images/common/skill/${props.skillAll[listIdIdx]}.jpg`}
                                                                        alt={`${props.skillAll[listIdIdx]}`}/>
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
                                                                                    src={`./images/common/skill/${props.skillAll[listIdIdx]}.jpg`}
                                                                                    alt={`${props.skillAll[listIdIdx]}`}/>
                                                                            </button>
                                                                            <div className="combo_value">
                                                                                <span>{props.percentAll[listIdIdx]}</span>
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
                                                                            <span>{props.percentAll[listIdIdx]}</span>
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
                                                                                src={`./images/common/skill/${props.skillAll[listIdIdx]}.jpg`}
                                                                                alt={`${props.skillAll[listIdIdx]}`}/>
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
                                                            let copySkill = [...props.skillAll];
                                                            let copyPercent = [...props.percentAll];
                                                            let copyCustom = [...customList];

                                                            //usingPercent 관련 변수
                                                            const percentValue = [0, 10, 10, 12, 15, 20];
                                                            const percentBreakLimitValue = [0, 0, 2, 3, 5, 10];
                                                            const generalRandom = 98;
                                                            const IntervalProbability = Math.floor((Math.random() * 99) + 1); //확률 값 0 ~ 100

                                                            //use coin duplication 변수
                                                            const useCoinSkillDuplication = [0, 5, 10, 15, 20, 25];

                                                            //공동 실행 선택 및 교체 스킬 클릭 시 콤보 카드에 담김
                                                            copySkill[selectCombo] = arr;
                                                            props.setSkillAll(copySkill);

                                                            if (selectCombo === 1 && props.list[selectCombo].isActive) {
                                                                //1일 때만(한계 돌파X)

                                                                //using percent random value
                                                                const percentRandom = Math.floor((Math.random() * percentValue[1]) + 1); //5구간 랜덤 수 1~10

                                                                //1구간 일반 랜덤 확률
                                                                copy[1].usingPercent = percentRandom;

                                                                copyPercent[1] = copy[0].usingPercent + copy[1].usingPercent;
                                                                copyPercent[2] = copy[0].usingPercent + copy[1].usingPercent + copy[2].usingPercent;
                                                                copyPercent[3] = copy[0].usingPercent + copy[1].usingPercent + copy[2].usingPercent + copy[3].usingPercent;
                                                                copyPercent[4] = copy[0].usingPercent + copy[1].usingPercent + copy[2].usingPercent + copy[3].usingPercent + copy[4].usingPercent;
                                                                copyPercent[5] = copy[0].usingPercent + copy[1].usingPercent + copy[2].usingPercent + copy[3].usingPercent + copy[4].usingPercent + copy[5].usingPercent;

                                                                //use coin
                                                                //copyCustom[1].usedCoin += copyCustom[1].useCoin;


                                                            } else if (selectCombo !== 0 && selectCombo !== 1 && props.list[selectCombo].isActive) {
                                                                //0, 1이 아닐 때 전부 실행

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

                                                                copyPercent[1] = copy[0].usingPercent + copy[1].usingPercent;
                                                                copyPercent[2] = copy[0].usingPercent + copy[1].usingPercent + copy[2].usingPercent;
                                                                copyPercent[3] = copy[0].usingPercent + copy[1].usingPercent + copy[2].usingPercent + copy[3].usingPercent;
                                                                copyPercent[4] = copy[0].usingPercent + copy[1].usingPercent + copy[2].usingPercent + copy[3].usingPercent + copy[4].usingPercent;
                                                                copyPercent[5] = copy[0].usingPercent + copy[1].usingPercent + copy[2].usingPercent + copy[3].usingPercent + copy[4].usingPercent + copy[5].usingPercent;

                                                            }
                                                            props.setList(copy);
                                                            props.setPercentAll(copyPercent);

                                                            //use coin duplication(중복 집계)
                                                            const count = copySkill.filter(element => copySkill[selectCombo] === element).length;

                                                            //
                                                            if (count === 1) {
                                                                //중복 없음
                                                                setCoinValue(copyCustom[selectCombo].useCoin);
                                                            } else if (count !== 1) {
                                                                //중복 1개 이상
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
                                        let copy = props.list.map(function (arr) {
                                            return {
                                                ...arr,
                                                isAddButton: false,
                                                isActive: false,
                                                selectSkill: props.blank,
                                                inputPercent: 0,
                                                usingPercent: 0,
                                            }
                                        })

                                        props.setList(copy);
                                        props.setSkillAll([]);
                                        props.setPercentAll([]);
                                        navigate(-1);
                                    }}>처음부터
                                    </button>
                                    <button type="button" onClick={() => {
                                        //해당 버튼 클릭 확인 여부
                                        setIsResetBoolean(!isResetBoolean);

                                        //custom.js 에서 변경했던 skill, percent 처음으로 변경
                                        let copy = [...props.list];
                                        let newSkillAll = [copy[0].selectSkill, copy[1].selectSkill, copy[2].selectSkill, copy[3].selectSkill, copy[4].selectSkill, copy[5].selectSkill];
                                        let newPercentAll = [copy[0].inputPercent, copy[1].inputPercent, copy[2].inputPercent, copy[3].inputPercent, copy[4].inputPercent, copy[5].inputPercent];

                                        props.setSkillAll([...newSkillAll]);
                                        props.setPercentAll([...newPercentAll]);

                                        let resetUsedCoin = customList.map(function(element){
                                            return {
                                                ...element,
                                                usedCoin: 0,
                                            }
                                        });

                                        setCustomList(resetUsedCoin);
                                        setAllUsedCoin(0);
                                    }}>여기서 다시 하기
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className="description">
                            <div className="description_tit">
                                <h5>도움말</h5>
                                <button type="button" onClick={() => {
                                    tabCont.current.scroll({
                                        top: usageBtn.current.offsetTop - 100,
                                        behavior: 'smooth'
                                    });
                                }}>승단 뱃지 사용량</button>
                            </div>
                            <ul className="tab_cont" ref={tabCont}>
                                <li>
                                    <div>
                                        1. 스킬과 퍼센트를 변경할 칸을 클릭하고, 오른쪽에서 변경할 스킬을 클릭(동일한 스킬로 변경 가능) (GIF로)<br/>
                                        2. 변경한 칸 동그라미 안의 숫자와 아래 표 속 <u>최고치가 최대한 근접할 때까지 변경</u><br/>
                                        <div className="half_box">
                                            <table>
                                                <caption>랜덤 돌렸을 때 얻을 수 있는 구간별 확률 표</caption>
                                                <thead>
                                                <tr>
                                                    <th></th>
                                                    <th>값</th>
                                                    {/*<th>값(한계 돌파)</th>*/}
                                                </tr>
                                                </thead>
                                                <tbody>
                                                <tr>
                                                    <th>1→2</th>
                                                    <td>0~10%</td>
                                                </tr>
                                                <tr>
                                                    <th>2→3</th>
                                                    <td>0~12%</td>
                                                </tr>
                                                <tr>
                                                    <th>3→4</th>
                                                    <td>0~15%</td>
                                                </tr>
                                                <tr>
                                                    <th>4→5</th>
                                                    <td>0~20%</td>
                                                </tr>
                                                <tr>
                                                    <th>5→6</th>
                                                    <td>0~30%</td>
                                                </tr>
                                                </tbody>
                                            </table>
                                            <img src="./images/step2/percent_img.jpg" alt=""/>
                                        </div>
                                        <p className="caption_txt">랜덤 돌렸을 때 얻을 수 있는 구간별 확률 표 /<br/>표와 대조해서 볼 수 있는 비교 이미지
                                        </p>

                                        <br/>
                                        * 콤보 카드가 완성되면 현재 콤보 카드를 만들기 위해서 승단 뱃지 재화가 어느정도 필요한지 알 수 있습니다.
                                    </div>
                                    <button type="button" className="strong_btn" ref={usageBtn} onClick={() => {
                                        tabCont.current.scroll({
                                            top: usageBtn.current.offsetTop - 100,
                                            behavior: 'smooth'
                                        })
                                    }}>[ 사용된 승단 뱃지 ]
                                    </button>
                                    <div className="coin_box">
                                        <div className="coin_txt">
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
                                            <span>사용한 뱃지 총 개수: {allUsedCoin}개</span>
                                        </div>
                                        <span>* 아래 표에서 현재 변경하고 있는 구간에 1회 변경 시 사용되는 승단 뱃지의 개수를 확인할 수 있습니다.</span>
                                        <p className="coin_center_txt">현재 변경하고 있는 구간 뱃지 1회 사용량: <span>{coinValue}</span>개
                                        </p>
                                        <table>
                                            <thead>
                                            <tr>
                                                <th>중복 갯수</th>
                                                <th>1콤보</th>
                                                <th>2콤보</th>
                                                <th>3콤보</th>
                                                <th>4콤보</th>
                                                <th>5콤보</th>
                                                <th>6콤보</th>
                                            </tr>
                                            </thead>
                                            <tbody>
                                            <tr>
                                                <th>1개</th>
                                                <td>3</td>
                                                <td>5</td>
                                                <td>7</td>
                                                <td>9</td>
                                                <td>11</td>
                                                <td>13</td>
                                            </tr>
                                            <tr>
                                                <th>2개</th>
                                                <td>8</td>
                                                <td>10</td>
                                                <td>12</td>
                                                <td>14</td>
                                                <td>16</td>
                                                <td>18</td>
                                            </tr>
                                            <tr>
                                                <th>3개</th>
                                                <td>13</td>
                                                <td>15</td>
                                                <td>17</td>
                                                <td>19</td>
                                                <td>21</td>
                                                <td>23</td>
                                            </tr>
                                            <tr>
                                                <th>4개</th>
                                                <td>18</td>
                                                <td>20</td>
                                                <td>22</td>
                                                <td>24</td>
                                                <td>26</td>
                                                <td>28</td>
                                            </tr>
                                            <tr>
                                                <th>5개</th>
                                                <td>23</td>
                                                <td>25</td>
                                                <td>27</td>
                                                <td>29</td>
                                                <td>31</td>
                                                <td>33</td>
                                            </tr>
                                            <tr>
                                                <th>6개</th>
                                                <td>28</td>
                                                <td>30</td>
                                                <td>32</td>
                                                <td>34</td>
                                                <td>36</td>
                                                <td>38</td>
                                            </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    )
}

export default Custom;