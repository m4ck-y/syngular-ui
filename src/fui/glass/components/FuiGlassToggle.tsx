import React from 'react';
import styles from './FuiGlassToggle.module.css';

interface FuiGlassToggleProps {
  label: string;
  checked?: boolean;
  onChange?: (checked: boolean) => void;
  className?: string;
}

const FuiGlassToggle: React.FC<FuiGlassToggleProps> = ({
  label,
  checked = false,
  onChange,
  className = ''
}) => {
  return (
    <div className={`${styles.fuiGlassToggleGroup} ${className}`}>
      <div 
        className={`${styles.fuiGlassToggle} ${checked ? styles.active : ''}`}
        onClick={() => onChange?.(!checked)}
      />
      <span className={styles.fuiGlassToggleLabel}>{label}</span>
    </div>
  );
};

export default FuiGlassToggle;