import React , { Component } from 'react';
import Commonheader from '../Common_components/Commonheader';
import Commonfooter from '../Common_components/Commonfooter';
export default class Detail extends Component {
	render() {
		return (
			<div>
				<Commonheader />
 				<Commonfooter />
				<h1>详情</h1>
			</div>
		)
	}
}