import React from "react";

class Lot extends React.Component {
    // constructor(props) {
    //     super(props);
    //     this.state = {
    //         auction: [],
    //         item: [],
    //     };
    // }

    render() {
console.log()
        return (
            <div className="lot-wrapper">
                <h1>{this.props.auction.status}</h1>
                <p>{this.props.item.title}</p>
                <p>{this.props.item.description}</p>
                <img src={this.props.item.photo} width="200" height="200" alt=""/>
            </div>
        );
    }
}

export default Lot;