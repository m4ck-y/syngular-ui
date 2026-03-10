import React from 'react';
import styles from './FuiGlassCard.module.css';

interface FuiGlassCardProps {
  children: React.ReactNode;
  title?: string;
  badge?: string;
  className?: string;
}

const FuiGlassCard: React.FC<FuiGlassCardProps> = ({
  children,
  title,
  badge,
  className = ''
}) => {
  return (
    <div className={`${styles.fuiGlassCard} ${className}`}>
      {(title || badge) && (
        <div className={styles.fuiGlassCardHeader}>
          {title && <div className={styles.fuiGlassCardTitle}>{title}</div>}
          {badge && <div className={styles.fuiGlassCardBadge}>{badge}</div>}
        </div>
      )}
      {children}
    </div>
  );
};

export default FuiGlassCard;