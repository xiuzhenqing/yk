import React, { Component } from 'react';
import '.././App.css';
import '../css/Intro.css';
import banner from '.././imgs/one-4.jpg';
import pic1 from '.././imgs/1.jpg';
import line from '.././imgs/line-ban.png';
import Footer from '.././Footer';

class Wl_intro extends Component {  
  render() {
    return (
      <div>
      <div className="wl_wrap">
          <div className="wl_header">
              <h1>公司介绍</h1>
              <img src={line} alt="" />
              <h4>法律咨询热线  400-700-0148</h4>
          </div>
           <div className="wl_intro">
              <div className="wl_head clear">
                <ul className="left  wl_nav">
                  <li>公司介绍</li>
                </ul>
                <div className="right wl_home">
                  首页 > <a className="wl_href">公司介绍</a>
                </div>
              </div>
              <div className="wl_ban">
                <img src={banner} alt="" />
              </div>
              <div className="wl_font">
                <p className="wl_firstP">北京市盈科律师事务所简称盈科律师事务所，是一家全球化法律服务机构，总部设在中国北京，在中国大陆拥有42家办公室，在美国、巴西、墨西哥、英国、意大利、匈牙利、波兰、比利时、西班牙、摩纳哥、希腊、德国、斯洛伐克、捷克、瑞士、法国、韩国、土耳其、俄罗斯、哈萨克斯坦、吉尔吉斯斯坦、蒙古、以色列、阿根廷等42个国家的89个城市及地区均设有盈科全球法律联盟成员律所，盈科律师事务所7000名员工，致力于为客户提供全球商务法律服务，为客户创造价值。</p>
              </div>
              <div className="wl_images"> 
                  <img src={pic1} alt="" />
                  <p className="wl_title">
                      匈牙利总统亲切接见盈科律师事务所主任梅向荣
                  </p>
              </div>
          </div>

      </div>
      <Footer />
     </div>
    );
  }
}

export default Wl_intro;
