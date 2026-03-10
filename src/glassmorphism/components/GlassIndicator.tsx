import styles from './GlassIndicator.module.css';

interface GlassIndicatorProps {
  type?: 'dots' | 'bars' | 'levels';
  count?: number;
  activeIndex?: number;
  variant?: 'primary' | 'secondary' | 'success';
  vertical?: boolean;
}

export const GlassIndicator: React.FC<GlassIndicatorProps> = ({
  type = 'dots',
  count = 10,
  activeIndex = 5,
  variant = 'primary',
  vertical = false
}) => {
  const items = Array.from({ length: count }, (_, i) => i);

  return (
    <div className={`${styles.indicator} ${vertical ? styles.vertical : styles.horizontal} ${styles[variant]}`}>
      {items.map((index) => (
        <div
          key={index}
          className={`${styles.item} ${styles[type]} ${index <= activeIndex ? styles.active : ''}`}
        />
      ))}
    </div>
  );
};