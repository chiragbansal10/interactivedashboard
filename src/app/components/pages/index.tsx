// // // import React from 'react';
// // // import { LineChartWidget } from '../components/widgets/LineChartWidget';
// // // import { BarChartWidget } from '../components/widgets/BarChartWidget';
// // // import { DataTableWidget } from '../components/widgets/DataTableWidget';
// // // import styles from '../styles/dashboard.module.css';

// // // const Dashboard: React.FC = () => {
// // //   return (
// // //     <div className={styles.dashboardContainer}>
// // //       <h1>Interactive Dashboard</h1>
// // //       <div className={styles.widgetsContainer}>
// // //         <LineChartWidget />
// // //         <BarChartWidget />
// // //         <DataTableWidget />
// // //       </div>
// // //     </div>
// // //   );
// // // };

// // // export default Dashboard;
// // import React from 'react';
// // import dynamic from 'next/dynamic';
// // import { DataTableWidget } from '../widget/DataTableWidget';
// // //import { DataTableWidget } from '../components/widgets/DataTableWidget';
// // import styles from '../styles/dashboard.module.css';

// // // Dynamically import chart components to prevent server-side rendering
// // const LineChartWidget = dynamic(() => import('../widgets/LineChartWidget), {
// //   ssr: false,
// // });

// // const BarChartWidget = dynamic(() => import('../widgets/BarChartWidget'), {
// //   ssr: false,
// // });

// // const Dashboard: React.FC = () => {
// //   return (
// //     <div className={styles.dashboardContainer}>
// //       <h1>Interactive Dashboard</h1>
// //       <div className={styles.widgetsContainer}>
// //         <LineChartWidget />
// //         <BarChartWidget />
// //         <DataTableWidget />
// //       </div>
// //     </div>
// //   );
// // };

// // export default Dashboard;
// import React from 'react';
// import dynamic from 'next/dynamic';
// import { DataTableWidget } from '../widgets/DataTableWidget';
// import styles from '../styles/dashboard.module.css';

// // Dynamically import chart components to prevent server-side rendering
// const LineChartWidget = dynamic(() => import('../widgets/LineChartWidget'), {
//   ssr: false,
// });

// const BarChartWidget = dynamic(() => import('../widgets/BarChartWidget'), {
//   ssr: false,
// });

// const Dashboard: React.FC = () => {
//   return (
//     <div className={styles.dashboardContainer}>
//       <h1>Interactive Dashboard</h1>
//       <div className={styles.widgetsContainer}>
//         <LineChartWidget />
//         <BarChartWidget />
//         <DataTableWidget />
//       </div>
//     </div>
//   );
// };

// export default Dashboard;
import React from 'react';
import dynamic from 'next/dynamic';
import styles from '../styles/dashboard.module.css';

// Dynamic imports for widgets
const LineChartWidget = dynamic(() => import('../widgets/LineChartWidget'), {
  ssr: false,
});

const BarChartWidget = dynamic(() => import('../widgets/BarChartWidget'), {
  ssr: false,
});

const DataTableWidget = dynamic(() => import('../widgets/DataTableWidget'), {
  ssr: false,
});

const Dashboard: React.FC = () => {
  return (
    <div className={styles.dashboardContainer}>
      <h1>Interactive Dashboard</h1>
      <div className={styles.widgetsContainer}>
        <LineChartWidget />
        <BarChartWidget />
        <DataTableWidget />
      </div>
    </div>
  );
};

export default Dashboard;
