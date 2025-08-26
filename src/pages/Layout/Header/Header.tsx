import { useNavigate } from 'react-router-dom';
import './Header.scss';
import { FaChevronLeft } from 'react-icons/fa';
const Header = () => {
    const navigate = useNavigate();
    return (
        <div className="header">
            {window.location.pathname !== '/' && (
                <button className="back-btn" onClick={() => navigate(-1)} title="Volver">
                    <FaChevronLeft size={20} className="chevron" />
                </button>
            )}
            <span className="header-title">
                Conecto
                <img src="/assets/img/enchufe.png" alt="Conecto Logo" />
            </span>
        </div>
    );
};

export default Header;
