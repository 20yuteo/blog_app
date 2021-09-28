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
        post_array: [],
    },
    tags: {
        tags_array: []
    }
};

export default initialState;