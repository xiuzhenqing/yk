import React, { Component } from 'react';
import './App.css';
import './css/Footer.css';
import ReadMore from './imgs/social-media.png';
import backTop from './imgs/back-to-top.png';
const Footer = () => (
    <div className="page-container pattern-2 " id="services">
              <div className="twelve columns contact-section">
                <h2 className="page-subtitle">
                    法律咨询电话：<span> 400-700-0148 </span>
                </h2>
                <h2 className="page-subtitle">
                    涉外业务咨询热线： <span>400-700-1516</span></h2>
            </div>
            <div className="twelve columns">
                <div className="section-divider section_big section_big_f">
                    <img src={ReadMore} alt="Read More About Us" className="ReadMore"/>

                </div>
            </div>
            <div className="twelve columns">
                <div className="social-media-buttons">
                    <a href="#" target="_blank">联系我们</a>| <a href="#"
                        target="_blank">在线办公</a>| <a href="#" target="_blank">企业邮箱</a>|
                    <a href="#" target="_blank">律师联盟</a>| <a href="#" target="_blank">
                        投诉平台</a>| <a href="#" target="_blank">友情链接</a>
                </div>
            </div>
            <div className="twelve columns sharing-section">
                <h3 className="sharing-buttons">
                    <span>北财官方微博：北财律师事务所全球总部</span><span>北财官方微信：盈科法律微观(yingkezb)</span></h3>
                <h3 className="sharing-buttons">
                    北京市北财律师事务所版权所有 Copyright 2011 YINGKE LAW FIRM All Rights Reserved. 京ICP备14039671号</h3>
            </div>
            <div className="twelve columns sharing-icons">
            </div>
             <div className="footer-container">
            <div className="row">
                <div className="back-to-top">
                    <a href="#">
                      <img src={backTop} alt="backTop"/>

                        </a>
                </div>
            </div>
        </div>

        </div>
       
  

)

export default Footer;
