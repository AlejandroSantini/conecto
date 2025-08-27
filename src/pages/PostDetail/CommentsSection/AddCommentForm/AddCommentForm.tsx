import { useForm } from 'react-hook-form';
import { createComment } from '../../../../service/postsService';
import './AddCommentForm.scss';

type CommentFormProps = {
    postId: string;
    parentId?: string;
    onCommented: () => void;
    loading: boolean;
};

const CommentForm = ({ postId, parentId, onCommented, loading }: CommentFormProps) => {
    const { register, handleSubmit, reset, formState } = useForm<{ comment: string, name: string }>({
        mode: 'onChange',
    });

    const onSubmit = async (data: { name: string, comment: string }) => {
        try {
            await createComment(postId, {
                name: data.name ? data.name : 'Anónimo',
                content: data.comment,
                createdAt: new Date().toISOString(),
                parentId: parentId ? parentId : null,
            });
            reset();
            onCommented();
        } catch (error) {
            alert(error);
        }
    };

    return (
        <form className="comment-form" onSubmit={handleSubmit(onSubmit)}>
            <input
                placeholder="Nombre"
                {...register('name', { required: false, minLength: 1 })}
                disabled={loading}
            />
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
