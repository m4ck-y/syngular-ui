import styles from './NeumorphicCard.module.css';

interface NeumorphicCardProps {
  title?: string;
  children: React.ReactNode;
  variant?: 'default' | 'gradient' | 'glass';
}

export const NeumorphicCard: React.FC<NeumorphicCardProps> = ({ 
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