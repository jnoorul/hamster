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
    };

    getAssetAllocationSeriesBreakdown = () => {
        return [
                {
                    name: 'Stocks',
                    colorByPoint: true,
                    data: [{
                        name: 'MSFT',
                        y: 56.33
                    }, {
                        name: 'AAPL',
                        y: 24.03
                    }, {
                        name: 'AMZ',
                        y: 10.38
                    }, {
                        name: 'Others',
                        y: 4.77,
                        drilldown: 'Others'
                    }]
                }
               ]
    };


    getAssetAllocationDrilldownBreakdown = () => {
        return {
            series: [
                {
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
        }
    };


    render() {
        return (
            <div>
            <Pie title="Portfolio Details by Asset Type" series={this.getPortfolioDetails()} />
                <Column title="Stocks Breakdown" assetClass="Stock" series={this.getAssetAllocationSeriesBreakdown()} drilldown={this.getAssetAllocationDrilldownBreakdown()} />
             </div>
           )
    }
}

export default Portfolio