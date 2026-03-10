import { useState } from 'react';
import styles from './NeumorphicRadio.module.css';

interface RadioOption {
  value: string;
  label: string;
}

interface NeumorphicRadioProps {
  name: string;
  options: RadioOption[];
  selected?: string;
  disabled?: boolean;
  onChange?: (value: string) => void;
}

export const NeumorphicRadio: React.FC<NeumorphicRadioProps> = ({
  name,
  options,
  selected = '',
  disabled = false,
  onChange
}) => {
  const [selectedValue, setSelectedValue] = useState(selected);

  const handleChange = (value: string) => {
    if (disabled) return;
    setSelectedValue(value);
    onChange?.(value);
  };

  return (
    <div className={styles.radioGroup}>
      {options.map((option) => (
        <label 
          key={option.value} 
          className={`${styles.wrapper} ${disabled ? styles.disabled : ''}`}
        >
          <div className={styles.radioContainer}>
            <input
              type="radio"
              name={name}
              value={option.value}
              checked={selectedValue === option.value}
              onChange={() => handleChange(option.value)}
              disabled={disabled}
              className={styles.hiddenInput}
            />
            <div className={`${styles.radio} ${selectedValue === option.value ? styles.selected : ''}`}>
              {selectedValue === option.value && <div className={styles.dot} />}
            </div>
          </div>
          <span className={styles.label}>{option.label}</span>
        </label>
      ))}
    </div>
  );
};