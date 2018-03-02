import React, {Component} from 'react';
import axios from 'axios';
import Commonheader from '../Common_components/Commonheader';
import Commonfooter from '../Common_components/Commonfooter';
import {Link} from 'react-router-dom';
import { Carousel} from 'antd-mobile';
import '../style/Home.css';
export default class Home extends Component {
	constructor(props) {
		super(props);
		this.state = {
		    data: [],
		    kinds: [],
		    left_area: [],
		    right_area: [],
		    uncle: [],
		    small_goods: [],
		    mother:[],
		    canteen:[],
		    shampoo:[],
		    shampoo_kinds:[],
		    goods_list:[]
	    }
	}
	componentDidMount() {
		axios.get("/api/ad/list")
	    .then((res)=>{
	    	console.log(res);
	    	this.setState({
	    		kinds: res.data.data.slice(0,8),
	    		left_area: res.data.data.slice(12,13),
	    		right_area: res.data.data.slice(14,16),
	    		uncle: res.data.data.slice(17,18),
	    		small_goods: res.data.data[17].products,
	    		mother: res.data.data.slice(17,18),
	    		canteen: res.data.data[17].products,
	    		shampoo: res.data.data.slice(18,19),
	    		shampoo_kinds:res.data.data[18].products
	    	})
	    })
	    
	    axios.get("/api/recommend/home?page=1&num=20")
	    .then((res)=>{
	    	console.log(res);
	    	this.setState({
	    		goods_list: res.data.data.list
	    	})
	    	
	    })
	    setTimeout(() => {
	      	axios.get("/api/ad/list")
	      	.then((res)=>{
	      		this.setState({
		        	data: res.data.data.slice(8,12),
		      	});
	      	})
	    }, 100);
  	}
 	render() {
 		return (
 			<div className="home">
 				<Commonheader />
 				<section>
 					<div className="banner">
	 					<Carousel
					        autoplay={true}
					        dots={true}
					        infinite
					    >
				          	{this.state.data.map((item,index)=> (
				            	<img key="index"
					                src={item.imageSrc} alt=""/>
					        ))}
			        	</Carousel>
	 				</div>
	 				<div className="kinds">
	 					<ul>
	 						{
	 							this.state.kinds.map(function(item,index){
	 								return(
	 									<li key={item.name}>
	 										<img src={item.imageSrc} alt=""/>
	 										<p>{item.name}</p>
	 									</li>
	 									
	 								)
	 							})
	 						}
	 					</ul>
	 				</div>
	 				
	 				<div className="has_area">
	 					<p>——有品专区——</p>
	 					<div className="z_area">
	 						<div className="has_left">
		 						{
		 							this.state.left_area.map(function(item,index){
		 								return(
		 									<img key={item.name} src={item.imageSrc} alt=""/>
		 								)
		 							})
		 						}
		 					</div>
		 					<div className="has_right">
		 						<ul>
		 							{
		 								this.state.right_area.map(function(item,index){
		 									return(
		 										<li key={item.name}>
		 											<img src={item.imageSrc} alt=""/>
		 										</li>
		 									)
		 								})
		 							}
		 						</ul>
		 					</div>
	 					</div>
	 				</div>
	 				<div className="constellation">
	 					<div className="uncle">
	 						{
	 							this.state.uncle.map(function(item,index){
	 								return <img key={item.name} src={item.imageSrc} alt=""/>
	 							})
	 						}
	 					</div>
	 					<div className="small_goods">
	 						{
	 							this.state.small_goods.map(function(item,index){
	 								return(
	 									<ul key={item.name}>
	 										<li>
	 											<img src={item.image} alt=""/>
		 										<p>{item.name}</p>
		 										<span>￥{(item.price/100).toFixed(2)}</span>
	 										</li>
	 									</ul>
	 								)
	 							})
	 						}
	 					</div>
	 				</div>
	 				<div className="canteen_area">
	 					<div className="mother">
	 						{
	 							this.state.mother.map(function(item,index){
	 								return <img key={item.name} src={item.imageSrc} alt=""/>
	 							})
	 						}
	 					</div>
	 					<div className="canteen">
	 						{
	 							this.state.canteen.map(function(item,index){
	 								return(
	 									<ul key={item.name}>
	 										<li>
	 											<img src={item.image} alt=""/>
		 										<p>{item.name}</p>
		 										<span>￥{(item.price/100).toFixed(2)}</span>
	 										</li>
	 									</ul>
	 								)
	 							})
	 						}
	 					</div>
	 				</div>
	 				<div className="shampoo_area">
	 					<div className="shampoo">
	 						{
	 							this.state.shampoo.map(function(item,index){
	 								return <img key={item.name} src={item.imageSrc} alt=""/>
	 							})
	 						}
	 					</div>
	 					<div className="shampoo_kinds">
	 						{
	 							this.state.shampoo_kinds.map(function(item,index){
	 								return(
	 									<ul key={item.name}>
	 										<li>
	 											<img src={item.image} alt=""/>
		 										<p>{item.name}</p>
		 										<span>￥{(item.price/100).toFixed(2)}</span>
	 										</li>
	 									</ul>
	 								)
	 							})
	 						}
	 					</div>
	 				</div>
	 				<div className="good_goods">
	 					<div className="good_goods_title">
	 						<p>——好货精选——</p>
	 					</div>
	 					<div className="good_goods_area">
	 						{
	 							this.state.goods_list.map(function(item,index){
	 								return (
	 									<ul key={item.masterName}>
				 							<li>
				 								<Link to={"/Detail/"+item.defaultSkuId}>
				 									<img src={item.skuList[0].image} alt=""/>
				 									<p>{item.masterName}</p>
				 									<span>￥{(item.skuList[0].price/100).toFixed(2)}</span>
				 									<i>已售{item.displaySalesCount}</i>
				 								</Link>
				 							</li>
				 						</ul>
	 								)
	 							})
	 						}
	 					</div>
	 				</div>
 				</section>
 				<Commonfooter />
 			</div>
 		)
 	}
 }