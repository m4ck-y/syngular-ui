import { useState } from 'react';
import styles from './GlassSlider.module.css';

interface GlassSliderProps {
  label?: string;
  min?: number;
  max?: number;
  value?: number;
  step?: number;
  disabled?: boolean;
  onChange?: (value: number) => void;
}

export const GlassSlider: React.FC<GlassSliderProps> = ({
  label,
  min = 0,
  max = 100,
  value = 50,
  step = 1,
  disabled = false,
  onChange
}) => {
  const [sliderValue, setSliderValue] = useState(value);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (disabled) return;
    const newValue = Number(e.target.value);
    setSliderValue(newValue);
    onChange?.(newValue);
  };

  const percentage = ((sliderValue - min) / (max - min)) * 100;

  return (
    <div className={styles.wrapper}>
      {label && (
        <div className={styles.labelContainer}>
          <label className={styles.label}>{label}</label>
          <span className={styles.value}>{sliderValue}</span>
        </div>
      )}
      <div className={`${styles.sliderContainer} ${disabled ? styles.disabled : ''}`}>
        <input
          type="range"
          min={min}
          max={max}
          value={sliderValue}
          step={step}
          onChange={handleChange}
          disabled={disabled}
          className={styles.slider}
        />
        <div className={styles.track}>
          <div 
            className={styles.fill} 
            style={{ width: `${percentage}%` }}
          />
        </div>
      </div>
    </div>
  );
};