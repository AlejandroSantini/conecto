import { useForm } from 'react-hook-form';
import { useState, useRef, useEffect } from 'react';
import { createPost } from '../../../service/postsService';
import './AddPostForm.scss';

type FormValues = {
    name: string;
    avatar?: string;
    avatarFile?: FileList;
    title: string;
    content: string;
};

type AddPostFormProps = {
    onPostCreated: () => void;
    loading: boolean;
};

const AddPostForm = ({ onPostCreated, loading }: AddPostFormProps) => {
    const { register, handleSubmit, reset, watch, formState } = useForm<FormValues>({
        mode: 'onChange',
    });
    const fileInputRef = useRef<HTMLInputElement>(null);
    const [avatarPreview, setAvatarPreview] = useState<string | null>(null);
    const avatarFile = watch('avatarFile');

    useEffect(() => {
        if (avatarFile && avatarFile.length > 0) {
            const url = URL.createObjectURL(avatarFile[0]);
            setAvatarPreview(url);
            return () => URL.revokeObjectURL(url);
        } else {
            setAvatarPreview(null);
        }
    }, [avatarFile]);

    const onSubmit = async (data: FormValues) => {
        let avatarUrl = data.avatar;

        if (data.avatarFile && data.avatarFile.length > 0) {
            avatarUrl = URL.createObjectURL(data.avatarFile[0]);
        }

        try {
            await createPost({
                ...data,
                avatar: avatarUrl,
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
                <div className="avatar-upload">
                    <label>Avatar</label>
                    <button type="button" onClick={() => fileInputRef.current?.click()}>
                        {avatarPreview ? (
                            <img src={avatarPreview} alt="avatar preview" className="avatar-img" />
                        ) : (
                            <span className="avatar-placeholder">+</span>
                        )}
                    </button>
                    <input
                        type="file"
                        accept="image/*"
                        {...register('avatarFile')}
                        ref={fileInputRef}
                        disabled={loading}
                    />
                </div>
                <div className="input-group">
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
