import { useForm } from 'react-hook-form';
import { createPost } from '../../../service/postsService';
import './AddPostForm.scss';

type FormValues = {
    name: string;
    avatar?: string;
    title: string;
    content: string;
};

type AddPostFormProps = {
    onPostCreated: () => void;
    loading: boolean;
};

const AddPostForm = ({ onPostCreated, loading }: AddPostFormProps) => {
    const { register, handleSubmit, reset, formState } = useForm<FormValues>({
        mode: 'onChange',
    });

    const onSubmit = async (data: FormValues) => {
        try {
            await createPost({
                ...data,
                createdAt: new Date().toISOString(),
            });
            reset();
            onPostCreated();
        } catch (error) {
            alert(error);
            console.error('Error creating post:', error);
        }
    };

    return (
        <form className="add-post-card" onSubmit={handleSubmit(onSubmit)}>
            <div className="img-input-group">
                <div className="input-group">
                    <input
                        placeholder="URL Avatar (opcional)"
                        disabled={loading}
                        {...register('avatar', { required: false })}
                    />
                    <input
                        placeholder="Nombre"
                        disabled={loading}
                        {...register('name', { required: true })}
                    />
                    <input
                        placeholder="Titulo"
                        disabled={loading}
                        {...register('title', { required: true })}
                    />
                </div>
            </div>
            <textarea
                placeholder="Contenido..."
                disabled={loading}
                {...register('content', { required: true })}
            />
            <button className="btn-primary" disabled={!formState.isValid || loading} type="submit">
                Publicar
            </button>
        </form>
    );
};

export default AddPostForm;
