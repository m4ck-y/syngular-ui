import styles from './GlassCircularProgress.module.css';

interface GlassCircularProgressProps {
  value: number;
  max?: number;
  size?: number;
  strokeWidth?: number;
  variant?: 'green' | 'purple' | 'pink' | 'blue';
  label?: string;
  showValue?: boolean;
}

export const GlassCircularProgress: React.FC<GlassCircularProgressProps> = ({
  value,
  max = 100,
  size = 120,
  strokeWidth = 8,
  variant = 'green',
  label,
  showValue = false
}) => {
  const percentage = Math.min((value / max) * 100, 100);
  const radius = (size - strokeWidth) / 2;
  const circumference = radius * 2 * Math.PI;
  const strokeDashoffset = circumference - (percentage / 100) * circumference;

  return (
    <div className={`${styles.container} ${styles[variant]}`} style={{ width: size, height: size }}>
      <div className={styles.background} />
      <svg className={styles.svg} width={size} height={size}>
        <defs>
          <linearGradient id={`gradient-${variant}`} x1="0%" y1="0%" x2="100%" y2="100%">
            {variant === 'green' && (
              <>
                <stop offset="0%" stopColor="#00f5a0" />
                <stop offset="100%" stopColor="#00d09c" />
              </>
            )}
            {variant === 'purple' && (
              <>
                <stop offset="0%" stopColor="#a55eea" />
                <stop offset="100%" stopColor="#8854d0" />
              </>
            )}
            {variant === 'pink' && (
              <>
                <stop offset="0%" stopColor="#ff6b9d" />
                <stop offset="100%" stopColor="#c44569" />
              </>
            )}
            {variant === 'blue' && (
              <>
                <stop offset="0%" stopColor="#00d4ff" />
                <stop offset="100%" stopColor="#0099cc" />
              </>
            )}
          </linearGradient>
        </defs>
        
        <circle
          className={styles.track}
          cx={size / 2}
          cy={size / 2}
          r={radius}
          strokeWidth={strokeWidth}
        />
        
        <circle
          className={styles.progress}
          cx={size / 2}
          cy={size / 2}
          r={radius}
          strokeWidth={strokeWidth}
          stroke={`url(#gradient-${variant})`}
          strokeDasharray={circumference}
          strokeDashoffset={strokeDashoffset}
        />
      </svg>
      
      {(label || showValue) && (
        <div className={styles.content}>
          {showValue && <div className={styles.value}>{Math.round(percentage)}%</div>}
          {label && <div className={styles.label}>{label}</div>}
        </div>
      )}
    </div>
  );
};