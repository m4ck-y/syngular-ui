import styles from './GlassCard.module.css';

interface GlassCardProps {
  title?: string;
  children: React.ReactNode;
  variant?: 'default' | 'blur' | 'strong';
}

export const GlassCard: React.FC<GlassCardProps> = ({ 
  title, 
  children, 
  variant = 'default' 
}) => {
  return (
    <div className={`${styles.card} ${styles[variant]}`}>
      {title && <h3 className={styles.title}>{title}</h3>}
      <div className={styles.content}>
        {children}
      </div>
    </div>
  );
};