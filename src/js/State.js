import React, { Component } from 'react';
import '.././App.css';
import '../css/State.css';
import line from '.././imgs/line-ban.png';
import Footer from '.././Footer';

class Anli extends Component {
  render() {
    return (
      <div className="wl_wrap">
          <div className="wl_header">
              <h1>动态</h1>
              <img src={line} alt="" />
              <h4>法律咨询热线  400-700-0148</h4>
          </div>
        <div className="wl_Ali">
         		<div className="wl_alHead">
	                <div className="right wl_home">
	                  	<a href="#" className="wl_homePage">首页</a><a href="#" className="wl_href">动态</a>
	                </div>
            	</div>
            <div className="wl_se">
                <div className="wl_search right"> 
                    <input type="text" className="wl_searchName left"/>
                    <span className="wl_btnSearch left"></span>
                </div>
            </div>
            <div className="wl_cont clear">
                <div className=" x-contb">
                    <ul className="wl_menuList">
                      <li>
                        <a href="#" className="left">经济开发区汽车产业园建设项目提供法律服务</a>
                        <p className="wl_listR right">
                            <span className="wl_heart"><span>11852</span>浏览</span>
                            <span className="wl_date">2017-01-17</span>
                        </p>
                      </li>
                      <li>
                           <a href="#" className="left">经济开发区汽车产业园建设项目提供法律服务</a>
                            <p className="wl_listR right">
                                <span className="wl_heart"><span>11852</span>浏览</span>
                                <span className="wl_date">2017-01-17</span>
                            </p>
                      </li>
                      <li>
                          <a href="#" className="left">经济开发区汽车产业园建设项目提供法律服务</a>
                          <p className="wl_listR right">
                               <span className="wl_heart"><span>11852</span>浏览</span>
                                <span className="wl_date">2017-01-17</span>
                          </p>
                      </li>
                      <li>
                         <a href="#" className="left">经济开发区汽车产业园建设项目提供法律服务</a>
                        <p className="wl_listR right">
                             <span className="wl_heart"><span>11852</span>浏览</span>
                            <span className="wl_date">2017-01-17</span>
                        </p> 
                      </li>
                      <li>
                         <a href="#" className="left">经济开发区汽车产业园建设项目提供法律服务</a>
                        <p className="wl_listR right">
                             <span className="wl_heart"><span>11852</span>浏览</span>
                            <span className="wl_date">2017-01-17</span>
                        </p> 
                      </li>
                      <li>
                         <a href="#" className="left">经济开发区汽车产业园建设项目提供法律服务</a>
                        <p className="wl_listR right">
                             <span className="wl_heart"><span>11852</span>浏览</span>
                            <span className="wl_date">2017-01-17</span>
                        </p> 
                      </li>
                      <li>
                         <a href="#" className="left">经济开发区汽车产业园建设项目提供法律服务</a>
                        <p className="wl_listR right">
                             <span className="wl_heart"><span>11852</span>浏览</span>
                            <span className="wl_date">2017-01-17</span>
                        </p> 
                      </li>
                      <li>
                         <a href="#" className="left">经济开发区汽车产业园建设项目提供法律服务</a>
                        <p className="wl_listR right">
                             <span className="wl_heart"><span>11852</span>浏览</span>
                            <span className="wl_date">2017-01-17</span>
                        </p> 
                      </li>
                    </ul>
                    <div className="wl_page">
                        <a href="#" className="wl_pageStart">首页</a>
                        <a href="#" className="wl_prePage">&lt;</a>
                        <a href="#" className="wl_pageNum">1</a>
                        <a href="#" className="wl_pageNum">2</a>
                        <a href="#" className="wl_pageNum">3</a>
                        <a href="#" className="wl_pageNum">4</a>
                        <a href="#" className="wl_pageNum">5</a>
                        <a href="#" className="wl_pageNum">6</a>
                        <a href="#" className="wl_pageNum">7</a>
                        <a href="#" className="wl_nextPage">&gt;</a>
                        <a href="#" className="wl_pageEnd">尾页</a>
                        <span className="wl_listGo">跳转到</span>
                        <input type="text" id="wl_pageText"/>
                        <a href="#" id="wl_go">GO</a>
                    </div>
                </div>
            </div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default Anli;
