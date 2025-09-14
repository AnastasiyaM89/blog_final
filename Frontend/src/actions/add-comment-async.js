import { request } from '../utils/request';
import { addComment } from './add-comment';

export const addCommentAsync = (postId, content) => (dispatch) => {
	request(`/post/${postId}/comments`, 'POST', { content }).then((comment) => {
		dispatch(addComment(comment.data));
	});
};
