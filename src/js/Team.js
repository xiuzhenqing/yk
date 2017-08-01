import React, { Component } from 'react';
import '.././App.css';
import '../css/Team.css';
import pic1 from '.././imgs/1.jpg';
import People1 from '.././imgs/people1.jpg';
import People2 from '.././imgs/people2.jpg';
import line from '.././imgs/line-ban.png';
import Footer from '.././Footer';

class Wl_Team extends Component {
  render() {
    return (
      <div>
      <div className="wl_wrap">
          <div className="wl_header">
              <h1>专业团队</h1>
              <img src={line} alt="" />
              <h4>法律咨询热线  400-700-0148</h4>
          </div>
           <div className="wl_intro clear">
              <div className="wl_head left">
                <ul className="left  wl_nav">
                  <li>专业团队</li>
                </ul>
                <div className="right wl_home">
                  首页 > <a className="wl_href">专业团队</a>
                </div>
              </div>
              <div className="Peo left left">
                  <img src={People1} alt="" className="left"/>
                  <p>白欢欢 <span>长沙</span></p>
                  <p>工作简历</p>
                  <p>教育及工作背景：</p>
                  <p>中南大学    经济法硕士  湖南师范大学   法学学士</p>
                  <p>工作经历：</p>
                  <p>2011年7月至今 北京盈科（长沙）律师事务所  专职律师 </p>
                  <p>擅长领域:</p>
                  <p>公司治理、债券发行、建设工程等经典案例：
                     为湖南天易集团发行公司债券提供专项法律服务；为株洲市国有资产投资
                     控股集团有限公司发行公司债券提供专项法律服务；为弘高融资租赁有限公司
    及其所属湖南津湘集团提供常年法律顾问服务；为湖南省建工集团提供常年法律顾问服务等。
                  </p>
              </div>
              <div className="Peo left left">
                  <img src={People2} alt="" className="left"/>
                  <p>杨琳 <span>北京</span></p>
                  <p>工作简历</p>
                  <p>北京市盈科律师事务所全球合伙人、国际合作委员会主任。
负责盈科律师事务所全球分支机构的筹建及管理工作。</p>
                  <p>工作经验：</p>
                  <p>杨琳律师因在涉外法律服务方面的杰出成就，摘得2011年《方圆律政》年度十大精英律师“国际商务律师”大奖。
                  国际争议解决等事务提供法律服务，涉及投资贸易金额达数十亿美元。</p>
                  <p>经典案例</p>
                  <p>1.为洛克菲勒罗斯洛克基金滨海新区50亿人民币基金设立提供法律服务</p>

<p>2.为明拓集团在阿曼投资矿产项目提供法律服务；</p>

<p>3.上海某贸易公司出口美国新出口商反倾销复审；</p>

<p>4.审核俄罗斯某公司与国内公司之间的民用航空器融资租赁合同；</p>

<p>5.协调巴哈马某离岸公司与中国平安财产保险股份有限公司海上保险合同纠纷；</p>


              </div>








          </div>

      </div>
      <Footer />
     </div>
    );
  }
}

export default Wl_Team;
