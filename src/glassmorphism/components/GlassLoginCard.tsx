import styles from './GlassLoginCard.module.css';

interface LoginOption {
  id: string;
  label: string;
  icon: string;
  variant: 'green' | 'orange' | 'pink' | 'blue';
}

interface GlassLoginCardProps {
  options: LoginOption[];
  onOptionClick?: (id: string) => void;
}

export const GlassLoginCard: React.FC<GlassLoginCardProps> = ({
  options,
  onOptionClick
}) => {
  return (
    <div className={styles.container}>
      {options.map((option) => (
        <button
          key={option.id}
          className={`${styles.loginOption} ${styles[option.variant]}`}
          onClick={() => onOptionClick?.(option.id)}
        >
          <div className={styles.iconContainer}>
            <div className={styles.iconBackground} />
            <span className={styles.icon}>{option.icon}</span>
          </div>
          <span className={styles.label}>{option.label}</span>
          <div className={styles.arrow}>→</div>
        </button>
      ))}
    </div>
  );
};