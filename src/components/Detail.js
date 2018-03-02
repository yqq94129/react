import React , { Component } from 'react';
import {NavLink} from 'react-router-dom';
import Commonheader from '../Common_components/Commonheader';
import '../style/Detail.css';
export default class Detail extends Component {
	render() {
		return (
			<div>
				<Commonheader />
				<section>
					<div>
						{this.props.match.params.goods_id}
					</div>
				</section>
 				<footer>
 					<div className="foot1">
 						<ul>
				        	<li className="first">
				            	<NavLink to="/" exact activeClassName="selected">
				            		<i className="iconfont icon-shouye"></i>
				            		<h4>首页</h4>
				            	</NavLink>
				            </li>
				            <li>
				            	<NavLink to="/Myself" activeClassName="selected">
				            		<button>立即购买</button>
				            	</NavLink>
				            </li>
				        </ul>
 					</div>
 				</footer>
			</div>
		)
	}
}