import styles from './GlassTable.module.css';

interface TableColumn {
  key: string;
  header: string;
  render?: (value: any) => React.ReactNode;
}

interface GlassTableProps {
  columns: TableColumn[];
  data: Record<string, any>[];
}

export const GlassTable: React.FC<GlassTableProps> = ({
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