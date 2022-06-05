import React from "react";

import bg1 from '../bg-1.jpg';
import bg2 from '../bg-2.jpg';
import bg3 from '../bg-3.jpg';

class TrendingPanel extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <ul class="list-group list-group-flush list-group-numbered">
                <li class="list-group-item d-flex justify-content-start trending-content">
                    <img src={bg1} className="rounded float-start ms-2 me-2" width={125} height={80} alt="..." />
                    One Piece
                </li>
                <li class="list-group-item d-flex justify-content-start trending-content">
                    <img src={bg2} className="rounded float-start ms-2 me-2" width={125} height={80} alt="..." />
                    Boruto
                </li>
                <li class="list-group-item d-flex justify-content-start trending-content">
                    <img src={bg3} className="rounded float-start ms-2 me-2" width={125} height={80} alt="..." />
                    Death Note
                </li>
            </ul>
        )
    }
}

export default TrendingPanel;