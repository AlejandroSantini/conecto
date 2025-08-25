import './DeleteButton.scss';
import { FaTrash } from 'react-icons/fa';

interface DeleteButtonProps {
    onClick: () => void;
    disabled?: boolean;
    title?: string;
}

const DeleteButton = ({ onClick, disabled = false }: DeleteButtonProps) => (
    <button className="delete-btn" onClick={onClick} disabled={disabled}>
        <FaTrash size={22} />
    </button>
);

export default DeleteButton;
