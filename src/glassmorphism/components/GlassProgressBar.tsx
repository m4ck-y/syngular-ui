import styles from './GlassProgressBar.module.css';

interface GlassProgressBarProps {
  value: number;
  max?: number;
  label?: string;
  variant?: 'primary' | 'success' | 'warning' | 'danger';
  size?: 'small' | 'medium' | 'large';
  animated?: boolean;
}

export const GlassProgressBar: React.FC<GlassProgressBarProps> = ({
  value,
  max = 100,
  label,
  variant = 'primary',
  size = 'medium',
  animated = false
}) => {
  const percentage = Math.min((value / max) * 100, 100);

  return (
    <div className={styles.wrapper}>
      {label && (
        <div className={styles.labelContainer}>
          <span className={styles.label}>{label}</span>
          <span className={styles.value}>{Math.round(percentage)}%</span>
        </div>
      )}
      <div className={`${styles.progressBar} ${styles[size]}`}>
        <div className={styles.track}>
          <div 
            className={`${styles.fill} ${styles[variant]} ${animated ? styles.animated : ''}`}
            style={{ width: `${percentage}%` }}
          />
        </div>
      </div>
    </div>
  );
};