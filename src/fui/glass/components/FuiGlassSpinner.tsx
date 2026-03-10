import React from 'react';
import styles from './FuiGlassSpinner.module.css';

interface FuiGlassSpinnerProps {
  size?: 'small' | 'medium' | 'large';
  variant?: 'primary' | 'secondary' | 'success';
  className?: string;
}

const FuiGlassSpinner: React.FC<FuiGlassSpinnerProps> = ({
  size = 'medium',
  variant = 'primary',
  className = ''
}) => {
  return (
    <div className={`${styles.fuiGlassSpinner} ${styles[size]} ${styles[variant]} ${className}`} />
  );
};

export default FuiGlassSpinner;