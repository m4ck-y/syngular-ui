import React from 'react';
import styles from './FuiGlassSlider.module.css';

interface FuiGlassSliderProps {
  label: string;
  min?: number;
  max?: number;
  value?: number;
  onChange?: (value: number) => void;
  className?: string;
}

const FuiGlassSlider: React.FC<FuiGlassSliderProps> = ({
  label,
  min = 0,
  max = 100,
  value = 50,
  onChange,
  className = ''
}) => {
  return (
    <div className={`${styles.fuiGlassSliderGroup} ${className}`}>
      <label className={styles.fuiGlassLabel}>{label}</label>
      <input
        type="range"
        className={styles.fuiGlassSlider}
        min={min}
        max={max}
        value={value}
        onChange={(e) => onChange?.(Number(e.target.value))}
      />
      <div className={styles.rangeValues}>
        <span>{min}%</span>
        <span>{max}%</span>
      </div>
    </div>
  );
};

export default FuiGlassSlider;