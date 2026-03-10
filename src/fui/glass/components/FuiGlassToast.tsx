import React from 'react';
import styles from './FuiGlassToast.module.css';

interface FuiGlassToastProps {
  title: string;
  message: string;
  variant?: 'info' | 'success' | 'warning' | 'error';
  time?: string;
  className?: string;
}

const FuiGlassToast: React.FC<FuiGlassToastProps> = ({
  title,
  message,
  variant = 'info',
  time,
  className = ''
}) => {
  const getIcon = () => {
    switch (variant) {
      case 'success': return '✦';
      case 'warning': return '⚠';
      case 'error': return '✖';
      default: return '◈';
    }
  };

  return (
    <div className={`${styles.fuiGlassToast} ${styles[variant]} ${className}`}>
      <span className={styles.toastIcon}>{getIcon()}</span>
      <div className={styles.toastContent}>
        <div className={styles.toastTitle}>{title}</div>
        <div className={styles.toastMessage}>{message}</div>
      </div>
      {time && <span className={styles.toastTime}>{time}</span>}
    </div>
  );
};

export default FuiGlassToast;