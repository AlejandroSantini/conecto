import './CommentButton.scss';
import { FaReply } from 'react-icons/fa';

interface CommentButtonProps {
    onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
    disabled?: boolean;
}

const CommentButton = ({ onClick, disabled = false }: CommentButtonProps) => (
    <button
        className="btn-reply-icon"
        title="Responder"
        onClick={onClick}
        disabled={disabled}
    >
        <FaReply size={18} color="#2563eb" />
    </button>
);

export default CommentButton;
