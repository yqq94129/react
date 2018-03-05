import React,{Component} from 'react';
import {NavLink} from 'react-router-dom';

import '../style/Commonfooter.css';

export default class Commonfooter extends Component{
	render() {
		return(
			<div className="foot">
            <ul>
            	<li className="first">
	            	<NavLink to="/" exact activeClassName="selected">
	            		<i className="iconfont icon-shouye"></i>
	            		<h4>首页</h4>
	            	</NavLink>
	            </li>
                <li>
	            	<NavLink to="/Films" activeClassName="selected">
	            		<i className="iconfont icon-dianyingpiao"></i>
	            		<h4>影票</h4>
	            	</NavLink>
	            </li>
                <li>
	            	<NavLink to="/Cart" activeClassName="selected">
	            		<i className="iconfont icon-gouwuchekong"></i>
	            		<h4>购物车</h4>
	            	</NavLink>
	            </li>
                <li>
	            	<NavLink to="/Myself" activeClassName="selected">
	            		<i className="iconfont icon-yonghu"></i>
	            		<h4>我的</h4>
	            	</NavLink>
	            </li>
            </ul>
          </div>
		)
	}
}