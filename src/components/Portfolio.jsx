import React from 'react';
import Pie from './charts/Pie'



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


    render() {
        return (
            <Pie title="Portfolio Details by Asset Type" series={this.getPortfolioDetails()} />
           )
    }
}

export default Portfolio