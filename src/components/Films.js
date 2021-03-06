import React , { Component } from 'react';
import axios from 'axios';
import { Carousel} from 'antd-mobile';
import Commonheader from '../Common_components/Commonheader';
import Commonfooter from '../Common_components/Commonfooter';
import '../style/Films.css';
export default class Films extends Component {
	constructor( props ){
		super( props );
		this.state={
			films_data:[],
			banner_data:[]
		}
	}
	componentDidMount() {
		axios.get("/film/now-playing?__t=1519889452827&page=1&count=6")
		.then((res)=>{
			console.log(res);
			this.setState({
				films_data: res.data.data.films
			})
		})
		axios.get("/billboard/home?__t=1519978130072")
		.then((res)=>{
			console.log(res);
//			setTimeout(() => {
	      		this.setState({
	        		banner_data: res.data.data.billboards
	      		});
//	    	}, 100);
		})
	}
	render() {
		return (
			<div>
				<Commonheader />
				<section>
					<div className="films_banner">
						<Carousel
			        		autoplay={true}
			            	infinite
			            	selectedIndex={1}
			        	>
			          		{
			          			this.state.banner_data.map(function(item,index){
			          				return (
			          					<img key={item.id} src={item.imageUrl} alt=""/>
			          				)
			          			})
			          		}
        				</Carousel>
					</div>
					<div className="movies_list">
						{
							this.state.films_data.map(function(item,index){
								return(
									<ul key={item.id}>
										<li>
											<img src={item.cover.origin}/>
											<div className="movies_mess">
												<div className="movies_left">
													<h3>{item.name}</h3>
													<span>{item.cinemaCount}家影院上映 &nbsp;{item.watchCount}人购票</span>
												</div>
												<div className="movies_right">
													<span>{item.grade}</span>
												</div>
											</div>
										</li>
									</ul>
								)
							})
						}
					</div>
				</section>
 				<Commonfooter />
 			</div>
		)
	}
}