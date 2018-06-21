let initialState = {
	counters: []
};

// This reducer isn't pure! It updates the nested "counters" array of the original 
//     state object
const reducer = (state = initialState, action) => {
	let { type, counterIndex } = action;
	if (type == "INCREMENT") {
		var newState = {
			counters: [...state.counters]
		}
		newState.counters[counterIndex]++;
		return newState;
	} else if (type == "ADD_COUNTER") {
		var newState = {
			counters: [...state.counters]
		}
		newState.counters.push(0)
		return newState;
	} else {
		return state;
	}
}
