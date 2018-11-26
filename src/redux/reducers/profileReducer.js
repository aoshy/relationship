const INITIAL_STATE = {
    name: 'Dude',
    workLocation: 'UpWork',
    age: 26,
    friends: 1098,
    description: 'Hey there sweety'
};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        default:
            return state;
  }
};
