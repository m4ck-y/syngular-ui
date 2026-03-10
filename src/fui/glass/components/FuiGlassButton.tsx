import React from 'react';
import styles from './FuiGlassButton.module.css';

interface FuiGlassButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'success' | 'danger';
  disabled?: boolean;
  onClick?: () => void;
  className?: string;
}

const FuiGlassButton: React.FC<FuiGlassButtonProps> = ({
  children,
  variant = 'primary',
  disabled = false,
  onClick,
  className = ''
}) => {
  return (
    <button
      className={`${styles.fuiGlassBtn} ${styles[variant]} ${className}`}
      disabled={disabled}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default FuiGlassButton;