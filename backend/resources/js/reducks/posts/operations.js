import axios from "axios";

export const addPost = (tag_name, tagsArray, content, setShow, setLoading) => {
    return async(dispatch, getState) => {
        if (tag_name !== undefined){
            axios.post('api/post', { tag_name, tagsArray, content })
                .then(res => {
                    setShow(false);
                    setLoading(false);
                }).catch(res => {
                    console.log(res);
                });
        }
    }
}