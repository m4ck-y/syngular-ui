import { useState } from 'react';
import styles from './NeumorphicSelect.module.css';

interface SelectOption {
  value: string;
  label: string;
}

interface NeumorphicSelectProps {
  label?: string;
  options: SelectOption[];
  value?: string;
  placeholder?: string;
  disabled?: boolean;
  onChange?: (value: string) => void;
}

export const NeumorphicSelect: React.FC<NeumorphicSelectProps> = ({
  label,
  options,
  value = '',
  placeholder = 'Select an option',
  disabled = false,
  onChange
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedValue, setSelectedValue] = useState(value);

  const selectedOption = options.find(opt => opt.value === selectedValue);

  const handleSelect = (optionValue: string) => {
    setSelectedValue(optionValue);
    setIsOpen(false);
    onChange?.(optionValue);
  };

  return (
    <div className={styles.wrapper}>
      {label && <label className={styles.label}>{label}</label>}
      <div className={`${styles.selectContainer} ${disabled ? styles.disabled : ''}`}>
        <button
          type="button"
          className={`${styles.trigger} ${isOpen ? styles.open : ''}`}
          onClick={() => !disabled && setIsOpen(!isOpen)}
          disabled={disabled}
        >
          <span className={styles.value}>
            {selectedOption ? selectedOption.label : placeholder}
          </span>
          <span className={`${styles.arrow} ${isOpen ? styles.rotated : ''}`}>▼</span>
        </button>
        
        {isOpen && (
          <div className={styles.dropdown}>
            {options.map((option) => (
              <button
                key={option.value}
                type="button"
                className={`${styles.option} ${selectedValue === option.value ? styles.selected : ''}`}
                onClick={() => handleSelect(option.value)}
              >
                {option.label}
              </button>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};