import React, { Component } from 'react';
import '.././App.css';
import '.././css/Home.css';
import appbar from '.././imgs/appbar.camera.png';
import crown from '.././imgs/appbar.crown.png';
import XImg from '.././imgs/3.jpg';
import ban1 from '.././imgs/one-2.jpg';
import ban2 from '.././imgs/one-1.jpg';
import ban4 from '.././imgs/two-1.jpg';
import Footer from '.././Footer';
class Home extends Component {
    componentDidMount=function(){
        var num=0;
        var lun=document.getElementById("lun");
        var allLi=lun.getElementsByTagName("li");

        this.time=setInterval(function(){
            lunbo();
            num++;
            },1500);    
       function lunbo(){   
               if(allLi){
                if(num==allLi.length){
                num=0;
               }
                for(var i = 0;i < allLi.length;i++){
                    allLi[i].style.opacity="0";
               }
                    allLi[num].style.opacity="1";

               }
        }
        lunbo();
 }
componentWillUnmount(){

    clearInterval(this.time);


}




  render() {
    return (    
  <div className="homepage-text">
        <div className="lunboMeng"></div>
         <div className="lunbo" id="lbbox">
              <ul id="lun">
               <li className="lunbF"><img src={ban1} /></li>
               <li><img src={ban2} /></li>
               <li><img src={ban4} /></li>
              </ul>
        </div>
       <div className="top-divider" id="lbbox">
	        <h1><span>专注优质</span><span className="spen2">法律服务</span></h1>
	        <div className="bottom-divider"></div>
	        <h2>携手中国权威法律专家打造的法律服务平台</h2>
	        <h2>
            <span>法律咨询电话：400-321-150</span>           
          </h2> 
	        <div className="x-warp">
	        	<div className="x-More left">
	        		<h4>模块1</h4>
	        		<p>详细内容</p>
	        		<p>详细内容</p>
	        		<p>详细内容</p>
	        	</div>
	        	<div className="x-More left">
	        		<h4>模块1</h4>
	        		<p>内容新闻</p>
	        		<p>内容新闻</p>
	        		<p>内容新闻</p>
	        	</div>
	        	<div className="x-More left">
	        		<h4>模块1</h4>
	        		<p>内容新闻</p>
	        		<p>内容新闻</p>
	        		<p>内容新闻</p>
	        	</div>
	        	<div className="x-More left">
	        		<h4>模块1</h4>
	        		<p>内容新闻</p>
	        		<p>内容新闻</p>
	        		<p>内容新闻</p>
	        	</div>
	        </div>	        
        </div>
        <div className="x-bg">          
        	<div className="x-content">
            <div className="x-bg2"></div>
        	<div className="x-noM">
                <h5>律者，所以定分止争也。</h5>
                <div className="section-divider section_big section_big_f Appbar">
                        <img src={appbar} alt="appbar" className="appbar"/>

                </div>
                <p>刑为盛世所不能废，而亦盛世所不尚</p>
                <ul>
                    <li></li>
                    <li></li>
                    <li></li>

                </ul>

            </div>
        </div>
        <div className="x-news">
        		<h3>图片新闻</h3>
        		<div className="section-divider section_big section_big_f Appbar">
                    <img src={crown} alt="crown" className="crown"/>

            </div>
        		<div className="x-newsF left">       			
        		    <img src={XImg} alt="x-img" />
        		    <p>2010年01月31日</p>
        		    <p>温家宝总理与盈科律师亲切会话</p>
        		</div>
        		<div className="x-newsF left">       			
        		    <img src={XImg} alt="x-img" />
        		    <p>2010年01月31日</p>
        		    <p>温家宝总理与盈科律师亲切会话</p>
        		</div>
        		<div className="x-newsF left">       			
        		    <img src={XImg} alt="x-img" />
        		    <p>2010年01月31日</p>
        		    <p>温家宝总理与盈科律师亲切会话</p>
        		</div>
        		<div className="x-newsF left">       			
        		    <img src={XImg} alt="x-img" />
        		    <p>2010年01月31日</p>
        		    <p>温家宝总理与盈科律师亲切会话</p>
        		</div>
        </div>
         <Footer />
        </div>
      
    </div>

   );
}
}

export default Home;
