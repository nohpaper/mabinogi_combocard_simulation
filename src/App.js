import './stylesheet/App.scss';
import './stylesheet/defalut.scss';
import Footer from './Footer.js';

import { Route, Routes } from 'react-router-dom';

function App() {
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
                                    <button type="button" className="disabled_wrap">추가</button>
                                    <div className="active_wrap">
                                        <button type="button"></button>
                                        <div className="combo_input">
                                            <input type="text" maxLength="2"/>
                                        </div>
                                    </div>
                                </div>
                                <div className="combo_each">
                                    <button type="button" className="disabled_wrap">추가</button>
                                    <div className="active_wrap disabled">
                                        <div className="combo_input">
                                        <input type="text" maxLength="2"/>
                                    </div>
                                    <button type="button"></button>
                                    </div>
                                </div>
                                <div className="combo_each">
                                    <button type="button" className="disabled_wrap">추가</button>
                                    <div className="active_wrap disabled">
                                        <button type="button"></button>
                                    <div className="combo_input">
                                        <input type="text" maxLength="2"/>
                                    </div>
                                    </div>
                                </div>
                                <div className="combo_each">
                                    <button type="button" className="disabled_wrap">추가</button>
                                    <div className="active_wrap disabled">
                                        <div className="combo_input">
                                        <input type="text" maxLength="2"/>
                                    </div>
                                    <button type="button"></button>
                                    </div>
                                </div>
                                <div className="combo_each">
                                    <button type="button" className="disabled_wrap">추가</button>
                                    <div className="active_wrap disabled">
                                        <button type="button"></button>
                                    <div className="combo_input">
                                        <input type="text" maxLength="2"/>
                                    </div>
                                    </div>
                                </div>
                                <div className="combo_arrow"></div>
                            </div>
                            <ul className="skill_wrap">
                                <li><button type="button"></button></li>
                                <li><button type="button"></button></li>
                                <li><button type="button"></button></li>
                                <li><button type="button"></button></li>
                                <li><button type="button"></button></li>
                                <li><button type="button"></button></li>
                                <li><button type="button"></button></li>
                                <li><button type="button"></button></li>
                                <li><button type="button"></button></li>
                                <li><button type="button"></button></li>
                            </ul>
                        </div>
                        <div className="btn_wrap">
                            <button type="button" className="next_step">제거</button>
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
