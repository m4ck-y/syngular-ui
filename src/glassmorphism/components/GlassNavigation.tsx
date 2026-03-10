import { useState } from 'react';
import styles from './GlassNavigation.module.css';

interface NavItem {
  id: string;
  label: string;
  icon: string;
  active?: boolean;
}

interface GlassNavigationProps {
  items: NavItem[];
  onItemClick?: (id: string) => void;
}

export const GlassNavigation: React.FC<GlassNavigationProps> = ({
  items,
  onItemClick
}) => {
  const [activeItem, setActiveItem] = useState(items.find(item => item.active)?.id || items[0]?.id);

  const handleClick = (id: string) => {
    setActiveItem(id);
    onItemClick?.(id);
  };

  return (
    <div className={styles.navigation}>
      {items.map((item) => (
        <button
          key={item.id}
          className={`${styles.navItem} ${activeItem === item.id ? styles.active : ''}`}
          onClick={() => handleClick(item.id)}
        >
          <span className={styles.icon}>{item.icon}</span>
          <span className={styles.label}>{item.label}</span>
        </button>
      ))}
    </div>
  );
};