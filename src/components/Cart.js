import React , { Component } from 'react';
import Commonheader from '../Common_components/Commonheader'
import Commonfooter from '../Common_components/Commonfooter';
export default class Cart extends Component {
	render() {
		return (
			<div>
				<Commonheader />
 				<Commonfooter />
 				<h1>购物车</h1>
 			</div>
		)
	}
}