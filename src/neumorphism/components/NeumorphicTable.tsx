import styles from './NeumorphicTable.module.css';

interface TableColumn {
  key: string;
  header: string;
  render?: (value: any) => React.ReactNode;
}

interface NeumorphicTableProps {
  columns: TableColumn[];
  data: Record<string, any>[];
}

export const NeumorphicTable: React.FC<NeumorphicTableProps> = ({
  columns,
  data
}) => {
  return (
    <div className={styles.tableContainer}>
      <table className={styles.table}>
        <thead>
          <tr className={styles.headerRow}>
            {columns.map((column) => (
              <th key={column.key} className={styles.headerCell}>
                {column.header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((row, index) => (
            <tr key={index} className={styles.dataRow}>
              {columns.map((column) => (
                <td key={column.key} className={styles.dataCell}>
                  {column.render ? column.render(row[column.key]) : row[column.key]}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};