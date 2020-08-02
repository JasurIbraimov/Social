import React from 'react';
import './loading.scss';
const Loading = ({label}) => {
	return (
		<div className='loading'>
			<div className="loadingio-spinner-magnify-li0b6b0l9c">
				<div className="ldio-ttz3fxdnbtl">
					<div>
						<div>
							<div></div>
							<div></div>
						</div>
					</div>
				</div>
			</div>
			<h2  className='loading__descr'>{label}</h2>
		</div>
	);
};

export default Loading;