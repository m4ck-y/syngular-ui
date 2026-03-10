import styles from './NeumorphicButton.module.css';

interface NeumorphicButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'success' | 'warning' | 'danger';
  size?: 'small' | 'medium' | 'large';
  disabled?: boolean;
  onClick?: () => void;
}

export const NeumorphicButton: React.FC<NeumorphicButtonProps> = ({
  children,
  variant = 'primary',
  size = 'medium',
  disabled = false,
  onClick
}) => {
  return (
    <button 
      className={`${styles.button} ${styles[variant]} ${styles[size]} ${disabled ? styles.disabled : ''}`}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
};