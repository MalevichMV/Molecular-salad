export const nextSlide = () => ({type: 'NEXT_SLIDE'});
export const processLoading = () => ({type: 'PROCESS_LOADING'});
export const proccesError = () => ({type: 'PROCESS_ERROR'});
export const proccesSuccess = () => ({type: 'PROCESS_SUCCESS'});
export const newSalads = (value) => ({type: 'NEW_SALADS', payload: value});