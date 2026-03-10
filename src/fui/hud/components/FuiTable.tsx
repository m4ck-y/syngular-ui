import React from 'react';
import styles from './FuiTable.module.css';

interface TableColumn<T = unknown> {
  key: string;
  header: string;
  render?: (value: unknown, row: T) => React.ReactNode;
}

interface TableProps<T = unknown> {
  columns: TableColumn<T>[];
  data: T[];
  rowNum?: boolean;
  className?: string;
}

export const FuiTable = ({ 
  columns, 
  data, 
  rowNum = true,
  className 
}: TableProps) => {
  return (
    <table className={`${styles.table} ${className || ''}`}>
      <thead>
        <tr>
          {rowNum && <th>#</th>}
          {columns.map((col) => (
            <th key={col.key}>{col.header}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {data.map((row, index) => (
          <tr key={index}>
            {rowNum && <td className={styles.rowNum}>{String(index + 1).padStart(3, '0')}</td>}
            {columns.map((col) => (
              <td key={col.key}>
                {col.render 
                  ? col.render((row as Record<string, unknown>)[col.key], row) 
                  : String((row as Record<string, unknown>)[col.key] ?? '')}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

interface InfoRowProps {
  label: string;
  value: string | React.ReactNode;
  className?: string;
}

export const FuiInfoRow: React.FC<InfoRowProps> = ({ label, value, className }) => {
  return (
    <div className={`${styles.infoRow} ${className || ''}`}>
      <span className={styles.infoLabel}>{label}</span>
      <span className={styles.infoValue}>{value}</span>
    </div>
  );
};
