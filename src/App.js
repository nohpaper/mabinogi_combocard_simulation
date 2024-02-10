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

                            </div>
                            <ul className="skill_wrap">
                                <li><button></button></li>
                                <li><button></button></li>
                                <li><button></button></li>
                                <li><button></button></li>
                                <li><button></button></li>
                                <li><button></button></li>
                                <li><button></button></li>
                                <li><button></button></li>
                                <li><button></button></li>
                                <li><button></button></li>
                            </ul>
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
