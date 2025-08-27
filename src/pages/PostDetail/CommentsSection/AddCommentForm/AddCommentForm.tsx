import { useForm } from 'react-hook-form';
import { createComment } from '../../../../service/postsService';
import './AddCommentForm.scss';

type CommentFormProps = {
    postId: string;
    onCommented: () => void;
    loading: boolean;
};

const CommentForm = ({ postId, onCommented, loading }: CommentFormProps) => {
    const { register, handleSubmit, reset, formState } = useForm<{ comment: string }>({
        mode: 'onChange',
    });

    const onSubmit = async (data: { comment: string }) => {
        try {
            await createComment(postId, {
                name: 'Anon',
                content: data.comment,
                createdAt: new Date().toISOString(),
                parentId: postId,
            });
            reset();
            onCommented();
        } catch (error) {
            alert(error);
        }
    };

    return (
        <form className="comment-form" onSubmit={handleSubmit(onSubmit)}>
            <textarea
                placeholder="Escribe un comentario..."
                {...register('comment', { required: true, minLength: 1 })}
                disabled={loading}
            />
            <button className="btn-primary" type="submit" disabled={loading || !formState.isValid}>
                Comentar
            </button>
        </form>
    );
};

export default CommentForm;
