import styles from './GlassChart.module.css';

interface ChartData {
  label: string;
  value: number;
}

interface GlassChartProps {
  data: ChartData[];
  type?: 'bar' | 'line';
  title?: string;
  variant?: 'default' | 'accent';
}

export const GlassChart: React.FC<GlassChartProps> = ({
  data,
  type = 'bar',
  title,
  variant = 'default'
}) => {
  const maxValue = Math.max(...data.map(d => d.value));

  return (
    <div className={`${styles.chart} ${styles[variant]}`}>
      {title && <h4 className={styles.title}>{title}</h4>}
      
      {type === 'bar' ? (
        <div className={styles.barChart}>
          {data.map((item, index) => (
            <div key={index} className={styles.barContainer}>
              <div 
                className={styles.bar}
                style={{ height: `${(item.value / maxValue) * 100}%` }}
              />
              <span className={styles.label}>{item.label}</span>
            </div>
          ))}
        </div>
      ) : (
        <div className={styles.lineChart}>
          <svg className={styles.svg} viewBox="0 0 300 100">
            <defs>
              <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="var(--glass-primary)" />
                <stop offset="100%" stopColor="var(--glass-secondary)" />
              </linearGradient>
            </defs>
            <path
              d={`M 0,${100 - (data[0]?.value || 0)} ${data.map((d, i) => 
                `L ${(i / (data.length - 1)) * 300},${100 - d.value}`
              ).join(' ')}`}
              stroke="url(#lineGradient)"
              strokeWidth="3"
              fill="none"
              className={styles.line}
            />
            {data.map((d, i) => (
              <circle
                key={i}
                cx={(i / (data.length - 1)) * 300}
                cy={100 - d.value}
                r="4"
                fill="white"
                className={styles.dot}
              />
            ))}
          </svg>
        </div>
      )}
    </div>
  );
};