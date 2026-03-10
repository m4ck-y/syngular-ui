import React from 'react';
import styles from './FuiGlassTable.module.css';

interface FuiGlassTableColumn {
  key: string;
  header: string;
}

interface FuiGlassTableRow {
  [key: string]: React.ReactNode;
}

interface FuiGlassTableProps {
  columns: FuiGlassTableColumn[];
  data: FuiGlassTableRow[];
  className?: string;
}

const FuiGlassTable: React.FC<FuiGlassTableProps> = ({
  columns,
  data,
  className = ''
}) => {
  return (
    <div className={`${styles.fuiGlassTableWrapper} ${className}`}>
      <table className={styles.fuiGlassTable}>
        <thead>
          <tr>
            {columns.map((column) => (
              <th key={column.key}>{column.header}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((row, index) => (
            <tr key={index}>
              {columns.map((column) => (
                <td key={column.key}>{row[column.key]}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default FuiGlassTable;