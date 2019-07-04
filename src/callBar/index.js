import React,{Component} from 'react'
import styles from './less/callCenter.less';

class CallBar extends Component {
	//初始化组件状态
	constructor(props) {
		super(props);
		// 登录方式 sip-sip话机  phone-手机  softPhone-软电话
		// dropStatus--电话下拉条是否展开 close关闭，open展开
		this.state = {
			callWayStr: 'sip',
			dropStatus: false
		};
		this.changeDropStatus = this.changeDropStatus.bind(this);
	}
	changeDropStatus = ()=> {
		this.setState({
			dropStatus: !this.state.dropStatus
		}) 
		console.log('dropStatus',this.state.dropStatus);
	}
	render() {
		return (
			<div className={`call_bar_wrap ${this.state.dropStatus ? 'open':'close'}`}>
				<div className={'header'} onClick={this.changeDropStatus}>
					<span className={'call_way_icon '+ this.state.callWayStr}></span>
					<span className={'current_status_text'}>离线</span>
					<span className={'status_time'}>--:--:--</span>
					<span className={'arrow'}></span>
				</div>
				<div className={'content'}>

				</div>
			</div>
	  	)
	}
}
	
export default CallBar;

