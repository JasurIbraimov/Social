import React, { Suspense } from 'react';
import Loading from '../assets/loading';
export const withSuspense = (Component) => {
	return (props) => {
		return (
			<Suspense fallback={<Loading label='Загружаемся...' />}>
				<Component {...props} />
			</Suspense>
		);
	};
};
