import "./AddPostForm.scss";
import { useForm } from "react-hook-form";
import { useState, useRef, useEffect } from "react";
import { createPost } from "../../service/postsService";

type FormValues = {
  name: string;
  avatar?: string;
  avatarFile?: FileList;
  title: string;
  content: string;
};

const AddPostForm = () => {
  const { register, handleSubmit, reset, watch, formState } =
    useForm<FormValues>({ mode: "onChange" });
  const [error, setError] = useState("");
  const fileInputRef = useRef<HTMLInputElement>(null);

  const avatarFile = watch("avatarFile");
  const [avatarPreview, setAvatarPreview] = useState<string | null>(null);

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
    setError("");
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
    } catch (error) {
      alert(error);
    }
  };

  return (
    <form className="add-post-card" onSubmit={handleSubmit(onSubmit)}>
      <div className="img-input-group">
        <div className="avatar-upload">
          <label>Avatar</label>
          <button type="button" onClick={() => fileInputRef.current?.click()}>
            {avatarPreview ? (
              <img
                src={avatarPreview}
                alt="avatar preview"
                className="avatar-img"
              />
            ) : (
              <span className="avatar-placeholder">+</span>
            )}
          </button>
          <input
            type="file"
            accept="image/*"
            style={{ display: "none" }}
            {...register("avatarFile")}
            ref={fileInputRef}
          />
        </div>
        <div className="input-group">
          <input placeholder="Name" {...register("name", { required: true })} />
          <input
            placeholder="Title"
            {...register("title", { required: true })}
          />
        </div>
      </div>
      <textarea
        placeholder="Content"
        {...register("content", { required: true })}
      />
      {error && <div className="form-error">{error}</div>}
      <button
        className="btn-primary"
        disabled={!formState.isValid}
        type="submit"
      >
        Create
      </button>
    </form>
  );
};

export default AddPostForm;
