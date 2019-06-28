import React from 'react';
import Header from './header';
import styles from './index.less';


const CallBar = () => {
  	return (
    	<div className={'call_bar_wrap'}>
      		<div className={'header'}>
        		<span className={'call_way_icon'}></span>
        		<span className={'current_status_text'}>离线</span>
        		<span className={'status_time'}>--:--:--</span>
      		</div>
			<div className={'content'}>
			</div>
    	</div>
  	)
}

export default CallBar
