import React from 'react';
import styles from '../../styles/widgets.module.css';

const data = [
  { id: 1, name: 'Item 1', value: '100' },
  { id: 2, name: 'Item 2', value: '200' },
  { id: 3, name: 'Item 3', value: '300' },
];

export const DataTableWidget: React.FC = () => {
  return (
    <table className={styles.dataTable}>
      <thead>
        <tr>
          <th>ID</th>
          <th>Name</th>
          <th>Value</th>
        </tr>
      </thead>
      <tbody>
        {data.map(item => (
          <tr key={item.id}>
            <td>{item.id}</td>
            <td>{item.name}</td>
            <td>{item.value}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};
