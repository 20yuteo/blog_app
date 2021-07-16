export const IS_LOADING = 'IS_LOADING';
export const IsLoadingAction = () => {
    return {
        type: 'IS_LOADING',
        payload: {
            isLoading: true
        }
    }
};

export const IS_LOADED = 'IS_LOADED';
export const IsLoadedAction = () => {
    return {
        type: 'IS_LOADED',
        payload: {
            isLoading: false
        }
    }
};