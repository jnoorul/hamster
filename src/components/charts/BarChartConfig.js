/* eslint-disable */

export default function getConfig(input) {
  const config = {
    chart: {
      renderTo: 'container',
      type: 'column',
      options3d: {
        enabled: true,
        alpha: 15,
        beta: 15,
        depth: 50,
        viewDistance: 25
      }
    },
    title: {
      text: 'Instruments'
    },
    subtitle: {
      text: ''
    },
    plotOptions: {
      column: {
        depth: 25
      }
    },
    series: input.data
  };
  return config;
}


