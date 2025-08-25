import { useNavigate } from 'react-router-dom';
import './BackHeaderBar.scss';

interface BackHeaderBarProps {
  title?: string;
}

const BackHeaderBar = ({ title }: BackHeaderBarProps) => {
  const navigate = useNavigate();
  return (
    <div className="back-header-bar">
      <button className="back-btn" onClick={() => navigate(-1)} title="Volver">
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#9ca3af" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="15 18 9 12 15 6" /></svg>
      </button>
      {title && <span className="header-title">{title}</span>}
    </div>
  );
};

export default BackHeaderBar;
