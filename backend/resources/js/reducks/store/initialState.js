const initialState = {
    users: {
        isSignedIn: false,
        id: '',
        name: '',
        image_url: ''
    },
    loading: {
        isLoading: false
    },
    posts: {
        tag_name: ''
    },
    tags: {
        tag_array: [],
    }
};

export default initialState;