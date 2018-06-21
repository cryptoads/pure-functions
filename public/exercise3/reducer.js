let initialState = {
	todos: [
		{
			text: "Take out the trash",
			isComplete: false
		}
	]
};


// This reducer isn't pure! Fix it plz
const reducer = (state = initialState, action) => {
	let newState = {
		...state,
		todos: state.todos.map((currentItem)=> {
			return {...currentItem}
		})
	}
	
	if (action.type == "ADD_TODO") {
		newState.todos.push({
			text: action.todoText,
			isComplete: false
		});

		return newState;
	} else if (action.type == "TOGGLE_TODO") {
		let todoToToggle = newState.todos[action.todoIndex];
		todoToToggle.isComplete = !todoToToggle.isComplete;
		return newState;
	} else {
		return state;
	}
}
