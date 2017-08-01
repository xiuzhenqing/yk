import React, { Component } from 'react';
import '.././App.css';
import '../css/Recruit.css';

import homeImg from '.././imgs/1(1).jpg';
import banner from '.././imgs/IMG2_2.JPG';
import pic1 from '.././imgs/1.jpg';
import line from '.././imgs/line-ban.png';
import Footer from '.././Footer';

class Wl_Recruit extends Component {
  render() {
    return (
      <div className="wl_wrap">
          <div className="wl_header">
              <h1>招贤纳士</h1>
              <img src={line} alt="" />
              <h4>法律咨询热线  400-700-0148</h4>
          </div>
           <div className="wl_intro">
              <div className="wl_head wl_recruit clear">
	                <ul className="left  wl_nav">
	                  <li>人才加盟</li>
	                </ul>
	                <div className="right wl_home">
	                    <a href="#" className="wl_homePage">首页</a><a  href="#" className="wl_href">专业领域</a>
	                </div>
              </div>
              <div className="wl_recmain">
              		<div className="wl_tabTit">
              			<a href="#" className="wl_hover">合伙人律师招聘</a>
              			<a href="#">合伙人律师招聘</a>
              			<a href="#">合伙人律师招聘</a>
              		</div>
              		<ul className="wl_tabCon">
              			{/*合伙人律师招聘*/}
              			<li>
              				<p className="wl_workaddress">（一）工作地点：</p>
              				<p className="wl_worklist">
              					北京、上海、广州、深圳、天津、石家庄、沈阳、大连、长春、武汉、长沙、济南、青岛、南京、苏州、无锡、宁波、厦门 、成都、昆明、呼和浩特、福州、杭州、合肥、拉萨、佛山、乌鲁木齐、郑州、重庆、泉州、南宁、贵阳、银川、太原、南昌、温州、东莞、珠海、西安、哈尔滨、海口、晋城
                    		</p>
                    		<p className="wl_workPro">（二）职位名称：合伙人律师</p>
                    		<p className="wl_worklist">1．招聘人数：若干</p>
                    		<p className="wl_worklist">2．职位要求：</p>
                    		<p className="wl_worklist">（1）具有扎实的法学专业功底、杰出的专业教育背景，知名高校法学本科以上学历，具有硕士、博士以上学历者优先，具有欧美、日韩等海外留学经验者优先；</p>
                    		<p className="wl_worklist">（2）已取得律师执业资格证，并具有3年以上律师执业经验，具备明确业务方向，优秀的执业能力，有独立承办某一专业领域案件或非诉讼项目的经验；</p>
                    		<p className="wl_worklist">（3）已取得律师执业资格证，并具有3年以上律师执业经验，具备明确业务方向，优秀的执业能力，有独立承办某一专业领域案件或非诉讼项目的经验；</p>
                    		<p className="wl_workPro">（三）加盟方式</p>
                    		<p className="wl_worklist">1．通过盈科律师事务所官方网站（www.yingkelawyer.com）了解我所基本情况；</p>
                    		<p className="wl_worklist">2．以附件形式发送电子简历，邮件标题：姓名+应聘职位；
</p>
                    		<p className="wl_worklist">3．已成立分所合伙人律师、专职律师应聘途径：</p>
              			</li>
              			{/*专职律师招聘*/}
              			<li>
              				<p className=""></p>
              			</li>
              			{/*执行主任招聘*/}
              			<li>
              				<p className=""></p>
              			</li>
              		</ul>

              </div>
              <div className="wl_zxnsMain">
                <div className="wl_zxns clear">
                     <div className="wl_zxnsCard">
                          <h2><span className="wl_fensuo">北京分所</span>
                          <span className="wl_name">栾昕达</span></h2>
                          <p><span className="wl_userName">电话</span>
                          <span className="wl_call">13910523167</span></p>
                          <p><span className="wl_userName">邮箱</span>
                          <span className="wl_call">beijing-hr@yingkelawyer.com</span></p>
                          <p><span className="wl_userName">地址</span>
                          <span className="wl_call">北京市朝阳区建国门外大街1号国贸三期26层2619单元</span></p>
                      </div>
                      <div className="wl_zxnsCard">
                          <h2><span className="wl_fensuo">上海分所（盈科大厦办公区）</span>
                          <span className="wl_name">金丹</span></h2>
                          <p><span className="wl_userName">电话</span>
                          <span className="wl_call">13910523167</span></p>
                          <p><span className="wl_userName">邮箱</span>
                          <span className="wl_call">beijing-hr@yingkelawyer.com</span></p>
                          <p><span className="wl_userName">地址</span>
                          <span className="wl_call">北京市朝阳区建国门外大街1号国贸三期26层2619单元</span></p>
                      </div>
                      <div className="wl_zxnsCard">
                          <h2><span className="wl_fensuo">上海分所（洲际办公区）</span>
                          <span className="wl_name">韩笑</span></h2>
                          <p><span className="wl_userName">电话</span>
                          <span className="wl_call">13910523167</span></p>
                          <p><span className="wl_userName">邮箱</span>
                          <span className="wl_call">beijing-hr@yingkelawyer.com</span></p>
                          <p><span className="wl_userName">地址</span>
                          <span className="wl_call">北京市朝阳区建国门外大街1号国贸三期26层2619单元</span></p>
                      </div>
                      <div className="wl_zxnsCard">
                          <h2><span className="wl_fensuo">广州分所</span>
                          <span className="wl_name">周丽莎</span></h2>
                          <p><span className="wl_userName">电话</span>
                          <span className="wl_call">13910523167</span></p>
                          <p><span className="wl_userName">邮箱</span>
                          <span className="wl_call">beijing-hr@yingkelawyer.com</span></p>
                          <p><span className="wl_userName">地址</span>
                          <span className="wl_call">北京市朝阳区建国门外大街1号国贸三期26层2619单元</span></p>
                      </div>
                      <div className="wl_zxnsCard">
                          <h2><span className="wl_fensuo">深圳分所</span>
                          <span className="wl_name">李思慧</span></h2>
                          <p><span className="wl_userName">电话</span>
                          <span className="wl_call">13910523167</span></p>
                          <p><span className="wl_userName">邮箱</span>
                          <span className="wl_call">beijing-hr@yingkelawyer.com</span></p>
                          <p><span className="wl_userName">地址</span>
                          <span className="wl_call">北京市朝阳区建国门外大街1号国贸三期26层2619单元</span></p>
                      </div>
                      <div className="wl_zxnsCard">
                          <h2><span className="wl_fensuo">天津分所</span>
                          <span className="wl_name">王世清</span></h2>
                          <p><span className="wl_userName">电话</span>
                          <span className="wl_call">13910523167</span></p>
                          <p><span className="wl_userName">邮箱</span>
                          <span className="wl_call">beijing-hr@yingkelawyer.com</span></p>
                          <p><span className="wl_userName">地址</span>
                          <span className="wl_call">北京市朝阳区建国门外大街1号国贸三期26层2619单元</span></p>
                      </div>
                       <div className="wl_zxnsCard">
                          <h2><span className="wl_fensuo">南京分所</span>
                          <span className="wl_name">王世清</span></h2>
                          <p><span className="wl_userName">电话</span>
                          <span className="wl_call">13910523167</span></p>
                          <p><span className="wl_userName">邮箱</span>
                          <span className="wl_call">beijing-hr@yingkelawyer.com</span></p>
                          <p><span className="wl_userName">地址</span>
                          <span className="wl_call">北京市朝阳区建国门外大街1号国贸三期26层2619单元</span></p>
                      </div>
                </div>
            </div>
          </div>
          <Footer />
      </div>
     
    );
  }
}

export default Wl_Recruit;
