import React,{Component} from 'react';
import {NavLink} from 'react-router-dom';
import Myself from '../components/Myself';
import '../style/Commonheader.css';
export default class Commonheader extends Component {
	render(){
		return (
			<div className="head">
				<div className="meau">
					<NavLink to="/">
						<i className="iconfont icon-sanhengxian"></i>
					</NavLink>
				</div>
				<div className="title">
					<h3>卖座商城</h3>
				</div>
				<div className="mine">
					<NavLink to="./Myself">
						<i className="iconfont icon-wode"></i>
					</NavLink>
				</div>
			</div>
		)
	}
}
