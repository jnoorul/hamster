/* eslint-disable */

export default function getConfig(input) {
  const config = {
    chart: {
      type: 'pie',
        options3d: {
        enabled: true,
          alpha: 45
      }
    },
    title: {
      text: 'Portfolio Composition'
    },
    subtitle: {
      text: ''
    },
    plotOptions: {
      pie: {
        innerSize: 100,
          depth: 45,
          point: {
          events: {
            click: input.onClick
          },
        }
      }
    },
    series: input.data
  };
  return config;
}


