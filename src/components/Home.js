import React, {Component} from 'react';
import axios from 'axios';
import Commonheader from '../Common_components/Commonheader';
import Commonfooter from '../Common_components/Commonfooter';
import { Carousel} from 'antd-mobile';
import '../style/Home.css';
export default class Home extends Component {
	constructor() {
		super();
		this.state = {
		    data: [],
		    kinds: [],
		    left_area: [],
		    right_area: [],
		    uncle: [],
		    small_goods: [],
		    mother:[],
		    canteen:[]
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
	    		uncle: res.data.data.slice(16,17),
	    		small_goods: res.data.data[16].products,
	    		mother: res.data.data.slice(17,18),
	    		canteen: res.data.data[17].products
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
					                src={item.imageSrc}/>
					        ))}
			        	</Carousel>
	 				</div>
	 				<div className="kinds">
	 					<ul>
	 						{
	 							this.state.kinds.map(function(item,index){
	 								return(
	 									<li key={item.name}>
	 										<img src={item.imageSrc} />
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
		 									<img key={item.name} src={item.imageSrc}/>
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
		 											<img src={item.imageSrc} />
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
	 								return <img key={item.name} src={item.imageSrc}/>
	 							})
	 						}
	 					</div>
	 					<div className="small_goods">
	 						{
	 							this.state.small_goods.map(function(item,index){
	 								return(
	 									<ul>
	 										<li>
	 											<img src={item.image}/>
		 										<p>{item.name}</p>
		 										<span>￥{item.price}</span>
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
	 								return <img key={item.name} src={item.imageSrc}/>
	 							})
	 						}
	 					</div>
	 					<div className="canteen">
	 						{
	 							this.state.canteen.map(function(item,index){
	 								return(
	 									<ul>
	 										<li>
	 											<img src={item.image}/>
		 										<p>{item.name}</p>
		 										<span>￥{item.price}</span>
	 										</li>
	 									</ul>
	 								)
	 							})
	 						}
	 					</div>
	 					<div className="hot"></div>
	 				</div>
 				</section>
 				<Commonfooter />
 			</div>
 		)
 	}
 }