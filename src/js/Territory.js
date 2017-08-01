import React, { Component } from 'react';
import '.././App.css';
import '../css/Territory.css';
import line from '.././imgs/line-ban.png';
import Footer from '.././Footer';


class Territory extends Component {
  componentDidMount=function(){
    /*内容动画部分*/
      var wl_showO=document.getElementById('wl_showO'),
          wl_showS=document.getElementById('wl_showS'),
          wl_showT=document.getElementById('wl_showT'),
          wl_showF=document.getElementById('wl_showF'),
          wl_showFi=document.getElementById('wl_showFi'),
          // wl_showS=document.getElementById('wl_showS'),
          anOne=document.getElementById('anOne'),
          anSen=document.getElementById('anSen'),
          aniOne=document.getElementById('aniOne'),
          aniSen=document.getElementById('aniSen'),
          animOne=document.getElementById('animOne'),
          animSen=document.getElementById('animSen'),
          animaOne=document.getElementById('animaOne'),
          animaSen=document.getElementById('animaSen'),
          animatOne=document.getElementById('animatOne'),
          animatSen=document.getElementById('animatSen');

      function addEvent(obj,event,fn){
        obj.attachEvent?obj.attachEvent('on'+event,fn):obj.addEventListener(event,fn);
      }
      addEvent(window,'scroll',function(){
          var win =(navigator.userAgent).lastIndexOf('Chrome')!=-1 ? document.body : document.documentElement;
          var scrollTop=win.scrollTop;
          if(scrollTop+wl_showO.offsetHeight>=wl_showO.offsetTop){
            anOne.classList.add('wl_moveF');
            anSen.classList.add('wl_moveT');
          }
          if(scrollTop+wl_showS.offsetHeight>=wl_showS.offsetTop){
            aniOne.classList.add('wl_moveF');
            aniSen.classList.add('wl_moveT');
          }
          if(scrollTop+wl_showT.offsetHeight>=wl_showT.offsetTop){
            animOne.classList.add('wl_moveF');
            animSen.classList.add('wl_moveT');
          }
          if(scrollTop+wl_showF.offsetHeight>=wl_showF.offsetTop){
            animaOne.classList.add('wl_moveF');
            animaSen.classList.add('wl_moveT');
          }
          if(scrollTop+wl_showFi.offsetHeight>=wl_showFi.offsetTop){
            animatOne.classList.add('wl_moveF');
            animatSen.classList.add('wl_moveT');
          }
      })

  }
  render() {
    return (
      <div className="wl_wrap">
          {/* 专业领域 */}
          <div className="wl_header">
              <h1>专业领域</h1>
              <img src={line} alt="" />
              <h4>法律咨询热线  400-700-0148</h4>
          </div>
          <div className="wl_Ali">
            <div className="wl_alHead">
                <div className="right wl_home">
                    <a href="#" className="wl_homePage">首页</a><a  href="http://localhost:3000/Territory" className="wl_href">专业领域</a>
                </div>
            </div>
          {/*更新部分，协作平台*/}
            <div className="wl_Tmain clear">
                <div className="wl_borderR"></div>
                <div className="wl_row clear">
                    <div className="wl_timeLine">
                        <div className="wl_centerRadius wl_moveF">
                            1
                        </div>
                        <div className="wl_conBlock wl_moveT">
                            <h2>知识产权法律事务</h2>
                            <div className="wl_committee">
                                <ul className="wl_comList">
                                    <li>
                                      <span>01</span>
                                      <a href="#">知识产权专业委员会</a>
                                    </li>
                                    <li>
                                      <span>02</span>
                                      <a href="#">知识产权专业委员会</a>
                                    </li>
                                    <li>
                                      <span>03</span>
                                      <a href="#">知识产权专业委员会</a>
                                    </li>
                                    <li>
                                      <span>04</span>
                                      <a href="#">知识产权专业委员会</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="wl_timeLine wl_padTop cssanimations" id="wl_showO">
                        <div className="wl_centerRadius" id="anOne">
                            2
                        </div>
                        <div className="wl_conBlock conSecond" id="anSen">
                            <h2>公司法律事务</h2>
                            <div className="wl_committee">
                                <ul className="wl_comList">
                                    <li>
                                      <span>01</span>
                                      <a href="#">知识产权专业委员会</a>
                                    </li>
                                    <li>
                                      <span>02</span>
                                      <a href="#">知识产权专业委员会</a>
                                    </li>
                                    <li>
                                      <span>03</span>
                                      <a href="#">知识产权专业委员会</a>
                                    </li>
                                    <li>
                                      <span>04</span>
                                      <a href="#">知识产权专业委员会</a>
                                    </li>
                                    <li>
                                      <span>04</span>
                                      <a href="#">知识产权专业委员会</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="wl_timeLine wl_padTop" id="wl_showS">
                        <div className="wl_centerRadius" id="aniOne">
                            3
                        </div>
                        <div className="wl_conBlock" id="aniSen">
                            <h2>金融法律事务</h2>
                            <div className="wl_committee">
                                <ul className="wl_comList">
                                    <li>
                                      <span>01</span>
                                      <a href="#">知识产权专业委员会</a>
                                    </li>
                                    <li>
                                      <span>02</span>
                                      <a href="#">知识产权专业委员会</a>
                                    </li>
                                    <li>
                                      <span>03</span>
                                      <a href="#">知识产权专业委员会</a>
                                    </li>
                                    <li>
                                      <span>04</span>
                                      <a href="#">知识产权专业委员会</a>
                                    </li>
                                    <li>
                                      <span>04</span>
                                      <a href="#">知识产权专业委员会</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                   <div className="wl_timeLine wl_padTop cssanimations" id="wl_showT">
                        <div className="wl_centerRadius"id="animOne">
                            4
                        </div>
                        <div className="wl_conBlock conSecond" id="animSen">
                            <h2>资本市场法律事务</h2>
                            <div className="wl_committee">
                                <ul className="wl_comList">
                                    <li>
                                      <span>01</span>
                                      <a href="#">知识产权专业委员会</a>
                                    </li>
                                    <li>
                                      <span>02</span>
                                      <a href="#">知识产权专业委员会</a>
                                    </li>
                                    <li>
                                      <span>03</span>
                                      <a href="#">知识产权专业委员会</a>
                                    </li>
                                    <li>
                                      <span>04</span>
                                      <a href="#">知识产权专业委员会</a>
                                    </li>
                                    <li>
                                      <span>04</span>
                                      <a href="#">知识产权专业委员会</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="wl_timeLine wl_padTop" id="wl_showF">
                        <div className="wl_centerRadius" id="animaOne">
                            5
                        </div>
                        <div className="wl_conBlock" id="animaSen">
                            <h2>房地产与建筑工程法律事务</h2>
                            <div className="wl_committee">
                                <ul className="wl_comList">
                                    <li>
                                      <span>01</span>
                                      <a href="#">房地产专业委员会</a>
                                    </li>
                                    <li>
                                      <span>02</span>
                                      <a href="#">土地业务专业委员会</a>
                                    </li>
                                    <li>
                                      <span>03</span>
                                      <a href="#">建设工程专业委员会</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="wl_timeLine wl_padTop cssanimations" id="wl_showFi">
                        <div className="wl_centerRadius" id="animatOne">
                            6
                        </div>
                        <div className="wl_conBlock conSecond" id="animatSen">
                            <h2>房地产与建筑工程法律事务</h2>
                            <div className="wl_committee">
                                <ul className="wl_comList">
                                    <li>
                                      <span>01</span>
                                      <a href="#">房地产专业委员会</a>
                                    </li>
                                    <li>
                                      <span>02</span>
                                      <a href="#">土地业务专业委员会</a>
                                    </li>
                                    <li>
                                      <span>03</span>
                                      <a href="#">建设工程专业委员会</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
          </div>
          <Footer />
      </div>
    );
  }
}

export default Territory;
