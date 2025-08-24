import axios from "axios";
import type { Post, Comment } from "../types";

const API_URL = import.meta.env.VITE_API_URL;

export const getPosts = async (): Promise<Post[]> => {
  const { data } = await axios.get<Post[]>(`${API_URL}/post`);
  return data;
};

export const getSinglePost = async (postId: string): Promise<Post> => {
  const { data } = await axios.get<Post>(`${API_URL}/post/${postId}`);
  return data;
};

export const createPost = async (post: Partial<Post>): Promise<Post> => {
  const { data } = await axios.post<Post>(`${API_URL}/post`, post);
  return data;
};

export const deletePost = async (postId: string): Promise<Post> => {
  const { data } = await axios.delete<Post>(`${API_URL}/post/${postId}`);
  return data;
};

export const getComments = async (postId: string): Promise<Comment[]> => {
  const { data } = await axios.get<Comment[]>(
    `${API_URL}/post/${postId}/comment`,
  );
  return data;
};

export const createComment = async (
  postId: string,
  comment: Partial<Comment>,
): Promise<Comment> => {
  const { data } = await axios.post<Comment>(
    `${API_URL}/post/${postId}/comment`,
    comment,
  );
  return data;
};

export const deleteComment = async (
  postId: string,
  commentId: string,
): Promise<Comment> => {
  const { data } = await axios.delete<Comment>(
    `${API_URL}/post/${postId}/comment/${commentId}`,
  );
  return data;
};
