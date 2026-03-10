import React, { useState } from 'react';
import styles from './FuiGlassAccordion.module.css';

interface FuiGlassAccordionProps {
  title: string;
  children: React.ReactNode;
  defaultOpen?: boolean;
  className?: string;
}

const FuiGlassAccordion: React.FC<FuiGlassAccordionProps> = ({
  title,
  children,
  defaultOpen = false,
  className = ''
}) => {
  const [isOpen, setIsOpen] = useState(defaultOpen);

  return (
    <div className={`${styles.fuiGlassAccordionItem} ${isOpen ? styles.active : ''} ${className}`}>
      <div 
        className={styles.fuiGlassAccordionHeader}
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className={styles.title}>{title}</span>
        <span className={styles.icon}>{isOpen ? '−' : '+'}</span>
      </div>
      <div className={styles.fuiGlassAccordionContent}>
        <div className={styles.fuiGlassAccordionBody}>
          {children}
        </div>
      </div>
    </div>
  );
};

export default FuiGlassAccordion;