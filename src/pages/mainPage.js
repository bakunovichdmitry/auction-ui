import '../styles/mainPage.css';
import Lot from '../components/lot';


import React from 'react';


async function getLots(url = '', data = {}) {
    const response = await fetch(url, {
        method: 'GET',
        mode: 'cors',
        cache: 'no-cache',
        credentials: 'same-origin',
        headers: {
            'Content-Type': 'application/json'
        },
    });
    return await response.json();
}


class MainPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            lotsList: []
        };
    }


    componentDidMount() {
        const result = getLots("http://localhost:8000/lots/");
        result.then((value => this.setState({lotsList: value})));
    }

    render() {

        return (
            <div className="page-wrapper">
                <header>
                    HEADER
                </header>
                <div className="main-container">
                    LOTS
                    {
                        this.state.lotsList.map(item => <Lot auction={item.auction} item={item.item}/>)
                    }
                </div>
                <footer>
                    FOOTER
                </footer>
            </div>
        );
    }
}

export default MainPage;
