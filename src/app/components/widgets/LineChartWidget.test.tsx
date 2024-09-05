// // // import { render } from '@testing-library/react';
// // // import { LineChartWidget } from '../components/widgets/LineChartWidget';

// // // test('renders LineChartWidget', () => {
// // //   const { container } = render(<LineChartWidget />);
// // //   expect(container).toBeInTheDocument();
// // // });
// // import React from 'react';
// // import { render } from '@testing-library/react';
// // // import { LineChartWidget } from '../components/widgets/LineChartWidget


// // // components/widgets/LineChartWidget'; // Adjust the path as needed
// // const LineChartWidget = dynamic(() => import('../widgets/LineChartWidget'), {
// //   ssr: false,
// // });

// // test('renders LineChartWidget', () => {
// //   const { container } = render(<LineChartWidget />);
// //   expect(container).toBeInTheDocument();
// // });
// // import React from 'react';
// // import { render } from '@testing-library/react';
// // import { LineChartWidget } from './LineChartWidget';

// // test('renders LineChartWidget', () => {
// //   const { container } = render(<LineChartWidget />);
// //   expect(container).toBeInTheDocument();
// // });
//  import React from 'react';
// import { render } from '@testing-library/react';
// import { LineChartWidget } from './LineChartWidget';
// import '@testing-library/jest-dom'; // Extends jest with additional matchers

// test('renders LineChartWidget', () => {
//   const { container } = render(<LineChartWidget />);
//   expect(container).toBeInTheDocument(); // Check that the component renders correctly
// });
import React from 'react';
import { render } from '@testing-library/react';
import { LineChartWidget } from './LineChartWidget';
import '@testing-library/jest-dom'; // Extends jest with additional matchers
beforeAll(() => {
  global.ResizeObserver = class {
    observe() {}
    unobserve() {}
    disconnect() {}
  };
});

test('renders LineChartWidget', () => {
  const { container } = render(<LineChartWidget />);
  expect(container).toBeInTheDocument(); // Check that the component renders correctly
});
