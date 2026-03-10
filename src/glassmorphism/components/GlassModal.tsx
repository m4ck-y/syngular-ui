import { useState } from 'react';
import { GlassButton } from './GlassButton';
import { GlassInput } from './GlassInput';
import { GlassSelect } from './GlassSelect';
import { GlassCheckbox } from './GlassCheckbox';
import styles from './GlassModal.module.css';

interface GlassModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
}

export const GlassModal: React.FC<GlassModalProps> = ({ isOpen, onClose, title }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    role: '',
    notifications: false
  });

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    onClose();
  };

  return (
    <div className={styles.overlay} onClick={onClose}>
      <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
        <div className={styles.header}>
          <h2 className={styles.title}>{title}</h2>
          <button className={styles.closeButton} onClick={onClose}>
            ✕
          </button>
        </div>
        
        <form className={styles.form} onSubmit={handleSubmit}>
          <GlassInput
            label="Full Name"
            placeholder="Enter your full name"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          />
          
          <GlassInput
            label="Email Address"
            type="email"
            placeholder="your@email.com"
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          />
          
          <GlassSelect
            label="Role"
            options={[
              { value: 'developer', label: 'Developer' },
              { value: 'designer', label: 'Designer' },
              { value: 'manager', label: 'Manager' },
              { value: 'other', label: 'Other' }
            ]}
            value={formData.role}
            onChange={(value) => setFormData({ ...formData, role: value })}
          />
          
          <GlassCheckbox
            label="Enable email notifications"
            checked={formData.notifications}
            onChange={(checked) => setFormData({ ...formData, notifications: checked })}
          />
          
          <div className={styles.actions}>
            <GlassButton variant="ghost" onClick={onClose}>
              Cancel
            </GlassButton>
            <GlassButton type="submit" variant="primary">
              Submit
            </GlassButton>
          </div>
        </form>
      </div>
    </div>
  );
};