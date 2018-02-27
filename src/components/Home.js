import React, {Component} from 'react';
import Commonheader from '../Common_components/Commonheader';
import Commonfooter from '../Common_components/Commonfooter';
import { Carousel} from 'antd-mobile';
import '../style/Home.css';
export default class Home extends Component {
	state = {
		banner: []
    }
  	componentDidMount() {
    // simulate img loading
	    setTimeout(() => {
	      	this.setState({
	        	data: ['AiyWuByWklrrUDlFignR', 'TekJlZRVCjLFexlOCuWn', 'IJOtIlfsYdTyaDTRVrLI'],
	      	});
    	}, 100);
  	}
 	render() {
 		return (
 			<div>
 				<Commonheader />
 				<div className="banner">
 					<Carousel
			          autoplay={true}
			          infinite
			          selectedIndex={1}
			        >
			          {
			          	this.state.banner.map(function(item,index){
			          		return <img key={item.src} src={item.src} alt=""/>
			          	})
			          }
			        </Carousel>
 				</div>
 				<div className="kinds"></div>
 				<div className="has_area"></div>
 				<Commonfooter />
 			</div>
 		)
 	}
 }