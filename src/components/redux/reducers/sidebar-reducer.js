const initialState = {
	friends: [
		{id: 1, label: 'Андрей', img: 'https://images.pexels.com/photos/4597126/pexels-photo-4597126.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'},
		{id: 2, label: 'Саша', img: 'https://images.pexels.com/photos/213780/pexels-photo-213780.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'},
		{id: 3, label: 'Алекс', img: 'https://images.pexels.com/photos/1122409/pexels-photo-1122409.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'},
	]
}
const sidebarReducer = (state = initialState, action) => {
	switch (action.type) {
		default:
			return state;
	}
};

export default sidebarReducer;