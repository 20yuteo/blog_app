export const GET_TAGS = "GET_TAGS";
export const getTagsActions = (tagState) => {
    return {
        type: "GET_TAGS",
        payload: {
            tags_array: tagState.tags_array
        }
    }
}