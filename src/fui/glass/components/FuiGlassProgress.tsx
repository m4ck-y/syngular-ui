import React from 'react';
import styles from './FuiGlassProgress.module.css';

interface FuiGlassProgressProps {
  label: string;
  value: number;
  variant?: 'default' | 'warning' | 'danger';
  className?: string;
}

const FuiGlassProgress: React.FC<FuiGlassProgressProps> = ({
  label,
  value,
  variant = 'default',
  className = ''
}) => {
  return (
    <div className={`${styles.fuiGlassProgressGroup} ${className}`}>
      <div className={styles.fuiGlassProgressHeader}>
        <span className={styles.fuiGlassProgressLabel}>{label}</span>
        <span className={styles.fuiGlassProgressValue}>{value}%</span>
      </div>
      <div className={styles.fuiGlassProgressBar}>
        <div 
          className={`${styles.fuiGlassProgressFill} ${styles[variant]}`}
          style={{ width: `${value}%` }}
        />
      </div>
    </div>
  );
};

export default FuiGlassProgress;