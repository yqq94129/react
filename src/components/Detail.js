import React , { Component } from 'react';
import {NavLink} from 'react-router-dom';
import axios from 'axios';
import { Carousel} from 'antd-mobile';
import Commonheader from '../Common_components/Commonheader';
import '../style/Detail.css';
export default class Detail extends Component {
	constructor(props){
		super(props);
		this.state={
			banner_data:[],
			goods_mess: []
		}
	}
	componentDidMount() {
		/*setTimeout(() => {*/
    		var id = this.props.match.params.goods_id;
				axios.get("/api/item?id=" + id)
				.then((res)=>{
					console.log(res.data.data.skuList);
					var goodsData = res.data.data;
					this.setState({
						banner_data: res.data.data.skuList,
						goods_mess: res.data.data.skuList
					});
				})
//  		}, 100);
  		}
	render() {
		return (
			<div>
				<Commonheader />
				<section>
					<div className="banner_list">
						<Carousel
          					autoplay={true}
          					infinite
          					dots={true}
          					selectedIndex={1}
				          	dots={true}
				        >
						{
							this.state.banner_data.map(function(item,index){
								return (
									item.images.map(function(item,index){
										return(
											<img key={index} src={item}  alt=""/>
										)
									})
								)
							})
						}
						</Carousel>
					</div>
					<div className="goods_details">
						
						{	
							this.state.goods_mess.map(function(item,index){
								return(
									<div className="goods_mess" key="item.id">
										<h3></h3>
										<i></i>
										<p>￥{(item.price/100).toFixed(2)}</p>
										<ul>
											<li>快递:{(item.marketPrice).toFixed(2)}</li>
											<li>销量:{item.salesCount}</li>
											<li>全国</li>
										</ul>
									</div>
								)
							})
							
						}
					</div>
					<div className="pics_list">
						<ul>
							<li><img src="https://mall.s.maizuo.com/08b56938f7b549ba01193b2a4c4bb803.jpg" /></li>
							<li><img src="https://mall.s.maizuo.com/05e2c40abde76cb8351064c32ada2e23.jpg" /></li>
							<li><img src="https://mall.s.maizuo.com/0580ef9ce85fd3929925803e59e7f8b0.jpg" /></li>
							<li><img src="https://mall.s.maizuo.com/a8d1e68490cd3dbca720d631b4fd2392.jpg" /></li>
						</ul>
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