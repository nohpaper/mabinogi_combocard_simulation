import './stylesheet/Footer.scss';
function Footer() {
    return (
        <footer>
            <div className="reference_info">
                <ul>
                    <li>본 시뮬레이터에 적용되는 콤보 간의 한계 돌파 확률은 실제 인게임 내에서 작용하고 있는 확률과 상이할 수 있으므로 맹신하지 않길 바랍니다.</li>
                </ul>
            </div>
            <div className="table_wrap">
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
                <table>
                    <thead>
                    <tr>
                        <th></th>
                        <th>값(한계 돌파)</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <th>1->2</th>
                        <td>0~10%</td>
                    </tr>
                    <tr>
                        <th>2->3</th>
                        <td>0~10(~12)%</td>
                    </tr>
                    <tr>
                        <th>3->4</th>
                        <td>0~12(~15)%</td>
                    </tr>
                    <tr>
                        <th>4->5</th>
                        <td>0~15(~20)%</td>
                    </tr>
                    <tr>
                        <th>5->6</th>
                        <td>0~20(~30)%</td>
                    </tr>
                    </tbody>
                </table>
                <div>

                </div>
                <div>

                </div>
            </div>
        </footer>
    )
}


export default Footer;