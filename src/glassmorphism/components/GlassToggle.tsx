import { useState } from 'react';
import styles from './GlassToggle.module.css';

interface GlassToggleProps {
  label?: string;
  defaultActive?: boolean;
  disabled?: boolean;
  onChange?: (active: boolean) => void;
}

export const GlassToggle: React.FC<GlassToggleProps> = ({
  label,
  defaultActive = false,
  disabled = false,
  onChange
}) => {
  const [isActive, setIsActive] = useState(defaultActive);

  const handleToggle = () => {
    if (disabled) return;
    const newActive = !isActive;
    setIsActive(newActive);
    onChange?.(newActive);
  };

  return (
    <div className={styles.wrapper}>
      {label && <label className={styles.label}>{label}</label>}
      <button
        className={`${styles.toggle} ${isActive ? styles.active : ''} ${disabled ? styles.disabled : ''}`}
        onClick={handleToggle}
        disabled={disabled}
      >
        <div className={styles.slider}>
          <div className={styles.thumb} />
        </div>
      </button>
    </div>
  );
};