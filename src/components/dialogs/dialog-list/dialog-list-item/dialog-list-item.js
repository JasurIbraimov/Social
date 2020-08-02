import React from 'react';
import {Link, useRouteMatch} from 'react-router-dom';
import './dialog-list-item.scss';
const DialogListItem = ({id, label}) => {
	let match = useRouteMatch({
		path: `/dialogs/${id}`
	});

	return (
		<Link className={match ? 'dialog-list__item active' : 'dialog-list__item'} to={`/dialogs/${id}`}>{label}</Link>
	)
}

export default DialogListItem;