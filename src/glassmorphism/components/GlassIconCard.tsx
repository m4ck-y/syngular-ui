import styles from './GlassIconCard.module.css';

interface GlassIconCardProps {
  icon: string;
  variant?: 'blue' | 'orange' | 'green' | 'pink' | 'purple';
  size?: 'small' | 'medium' | 'large';
  onClick?: () => void;
}

export const GlassIconCard: React.FC<GlassIconCardProps> = ({
  icon,
  variant = 'blue',
  size = 'medium',
  onClick
}) => {
  return (
    <div className={`${styles.card} ${styles[variant]} ${styles[size]}`} onClick={onClick}>
      <div className={styles.background} />
      <div className={styles.iconContainer}>
        <span className={styles.icon}>{icon}</span>
      </div>
    </div>
  );
};