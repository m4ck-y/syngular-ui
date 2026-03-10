import React from 'react';
import styles from './FuiGlassBadge.module.css';

interface FuiGlassBadgeProps {
  children: React.ReactNode;
  variant?: 'default' | 'success' | 'warning' | 'danger';
  className?: string;
}

const FuiGlassBadge: React.FC<FuiGlassBadgeProps> = ({
  children,
  variant = 'default',
  className = ''
}) => {
  return (
    <span className={`${styles.fuiGlassBadge} ${styles[variant]} ${className}`}>
      {children}
    </span>
  );
};

export default FuiGlassBadge;