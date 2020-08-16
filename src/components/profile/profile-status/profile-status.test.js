import React from 'react';
import { create } from 'react-test-renderer';
import ProfileStatus from './profile-status';

describe('Profile status component', () => {
	test('should be a ', () => {
		const component = create(<ProfileStatus userStatus='Hello world!' />);
		const instance = component.root;
		expect();
	});
});
