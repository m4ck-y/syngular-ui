import React from 'react';
import styles from './FuiGlassTooltip.module.css';

interface FuiGlassTooltipProps {
  children: React.ReactNode;
  tip: string;
  className?: string;
}

const FuiGlassTooltip: React.FC<FuiGlassTooltipProps> = ({
  children,
  tip,
  className = ''
}) => {
  return (
    <span className={`${styles.fuiGlassTooltip} ${className}`} data-tip={tip}>
      {children}
    </span>
  );
};

export default FuiGlassTooltip;