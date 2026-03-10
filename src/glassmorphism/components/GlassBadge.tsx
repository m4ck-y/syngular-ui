import styles from './GlassBadge.module.css';

interface GlassBadgeProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'success' | 'warning' | 'danger' | 'info';
  size?: 'small' | 'medium' | 'large';
  pulse?: boolean;
}

export const GlassBadge: React.FC<GlassBadgeProps> = ({
  children,
  variant = 'primary',
  size = 'medium',
  pulse = false
}) => {
  return (
    <span className={`${styles.badge} ${styles[variant]} ${styles[size]} ${pulse ? styles.pulse : ''}`}>
      {children}
    </span>
  );
};