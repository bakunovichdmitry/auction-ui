import React from 'react';
import Button from "@mui/material/Button";

async function getLot(url = '', data = {}) {
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

async function buyItem(url = '', data = {}) {
    console.log('true');
    const response = await fetch(url, {
        method: 'POST',
        mode: 'cors',
        cache: 'no-cache',
        credentials: 'same-origin',
        headers: {
            'Authorization': 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNjM1MTY3NTQ5LCJqdGkiOiI3NGU1NzMxNzQ1MmM0YzE2OTRjN2FmMjExMzY4ODAzZiIsInVzZXJfaWQiOjF9.9fli-oipmbWCYGwqmEr3SA8vC1g28OPYOgu4DVhU5cw',
            'Content-Type': 'application/json',
        },
        body: ''
    });
    return await response.json();
}


class LotDetailPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            title: '',
            description: '',
            status: null,
            current_price: null,
        };

    }


    componentDidMount() {
        const result = getLot("http://localhost:8000/lots/795fb040-1201-46f3-97bb-f852e643120e/");
        console.log(result);
        result.then((value => this.setState(
            {
                title: value.item.title,
                description: value.item.description,
                status: value.auction.status,
                current_price: value.auction.current_price
            }
            )));
    }


    render() {

        return (
            <div className="page-wrapper">
                <header>
                    HEADER
                </header>
                <div className="main-container">
                    LOT
                    <p>{this.state.title}</p>
                    <p>{this.state.description}</p>
                    <p>{this.state.status}</p>
                    <p>{this.state.current_price}</p>
                    <Button onClick={ ()=> buyItem("http://localhost:8000/auctions/386e246e-c64f-4889-b39b-4e093b817643/buy-it-now/") }>
                        Buy in now
                    </Button>
                </div>
                <footer>
                    FOOTER
                </footer>
            </div>
        );
    }
}

export default LotDetailPage;