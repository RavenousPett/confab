const initState = {
    'projects': [
        {id: '1', title: 'Book car', 'content': 'Ideally a pick up truck'},
        {id: '2', title: 'Book flights', 'content': 'Please dont sit me next to jed'},
        {id: '3', title: 'Book TWE', 'content': 'The Whole Enchilada!!'}
    ]
};

const projectReducer = (state = initState, action) => {
    switch (action.type)  {
        case 'CREATE_PROJECT':
            console.log('created project', action.project)
    }
    
    return state;
}

export default projectReducer;