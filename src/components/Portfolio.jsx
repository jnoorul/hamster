import React from 'react';
import Pie from './charts/Pie'
import Column from './charts/Column'



class Portfolio extends React.Component {
    constructor(props) {
        super(props);

    }

    getPortfolioDetails = () => {
        return [
        {
            name: 'Assets',
                data: [
            { name: 'Stocks', y: 56.33 },
            {
                name: 'Fixed Income Products',
                y: 24.03,
                sliced: true,
                selected: true,
            },
            { name: 'ETFS', y: 10.58 },
            { name: 'Bonds', y: 5.68 },
        ],
        },
    ];
    }

    getAssetAllocationBreakdown = () => {
        return [
            {
                name: 'Stocks',
                colorByPoint: true,
                data: [{
                    name: 'MSFT',
                    y: 56.33,
                    drilldown: 'Others'
                }, {
                    name: 'AAPL',
                    y: 24.03,
                    drilldown: 'Others'
                }, {
                    name: 'AMZ',
                    y: 10.38,
                    drilldown: 'Others'
                }, {
                    name: 'Others',
                    y: 4.77,
                    drilldown: 'Others'
                }],
            drilldown: {
                series: [{
                    name: 'Others',
                    id: 'Others',
                    data: [
                        [
                            'ABC',
                            1.2
                        ],
                        [
                            'CDE',
                            1.1
                        ],
                        [
                            'DEF',
                            1
                        ],
                        [
                            'TET',
                            .9
                        ]
                    ]
                }],
            }}]
    }


    render() {
        return (
            <div>
            <Pie title="Portfolio Details by Asset Type" series={this.getPortfolioDetails()} />
                <Column title="Stocks Breakdown" series={this.getAssetAllocationBreakdown()} />
             </div>
           )
    }
}

export default Portfolio