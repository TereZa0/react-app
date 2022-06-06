import React, { Component, useState, useEffect } from 'react'
import dummyImage from '../bg-1.jpg';

class UserList extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            UsersData: [],
            isLoaded: false,
            IndexKey: [],
            dataKey: makeid()
        }

        const Datas = [];
    }

    async componentDidMount() {
        const url = "http://192.168.0.108:8356/Api/User/1";

        try {
            fetch(url, { mode: 'cors' })
                .then((res) => res.json())
                .then((json) => {
                    var secureJson = EncryptJson(json,this.state.dataKey);

                    this.setState({
                        UsersData: secureJson,
                    });

                    console.log(this.state.UsersData);

                    if (this.state.UsersData !== null) {
                        this.setState({
                            isLoaded: true
                        });
                    }
                    // console.log(makeid());
                    // console.log(this.state.UsersData);
                });
        }
        catch (err) {
            throw err;
        }
    }

    render() {

        const RefreshData = () => {
            const url = "http://192.168.0.108:8356/Api/User/1";

            try {
                fetch(url, { mode: 'cors' })
                    .then((res) => res.json())
                    .then((json) => {
                        if (json !== null) {
                            this.setState({
                                UsersData: json
                            });
                        }
                        console.log("Data Refreshed");
                    });
            }
            catch (err) {
                throw err;
            }
        }

        if (this.state.isLoaded === false) {
            return (
                <div className="spinner-border text-info mt-2" role="status">
                    <span className="visually-hidden">Loading...</span>
                </div>
            );
        }
        return (
            <div className="row">
                {
                    DecriptJson(this.state.UsersData,this.state.dataKey).map((user) => {
                        return (
                            <div className="col-sm-7 mt-2 crd-container" key={makeid()}>
                                <div className="card crd-content">
                                    <img src={dummyImage} className="card-img-top" alt="..." style={{ margin: 0 }} />
                                    <div className="card-body">
                                        <p className="card-title">
                                            {user.Username}
                                        </p>
                                        <p className="card-text">
                                            Episode NAN
                                        </p>
                                        <p className="card-text">
                                            <small className="text-muted timestamp-counter offset-md-8">
                                                {timeDifference(1654442520000, 1651764120000)}
                                            </small>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        )
                    })}
            </div>
        );
    }
}

function makeid() {
    var text = "";
    var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

    for (var i = 0; i < 8; i++)
        text += possible.charAt(Math.floor(Math.random() * possible.length));

    return text;
}

function timeDifference(current, previous) {

    var msPerMinute = 60 * 1000;
    var msPerHour = msPerMinute * 60;
    var msPerDay = msPerHour * 24;
    var msPerMonth = msPerDay * 30;
    var msPerYear = msPerDay * 365;

    var elapsed = current - previous;

    if (elapsed < msPerMinute) {
        return Math.round(elapsed / 1000) + ' seconds ago';
    }

    else if (elapsed < msPerHour) {
        return Math.round(elapsed / msPerMinute) + ' minutes ago';
    }

    else if (elapsed < msPerDay) {
        return Math.round(elapsed / msPerHour) + ' hours ago';
    }

    else if (elapsed < msPerMonth) {
        return Math.round(elapsed / msPerDay) + ' days ago';
    }

    else if (elapsed < msPerYear) {
        return Math.round(elapsed / msPerMonth) + ' months ago';
    }

    else {
        return Math.round(elapsed / msPerYear) + ' years ago';
    }
}

const EncryptJson = (dataTarget, dataKey) => {
    const cryptoJS = require("crypto-js");
    
    return cryptoJS.AES.encrypt(JSON.stringify(dataTarget),dataKey).toString();
}

const DecriptJson = (dataTarget, dataKey) => {
    const cryptoJS = require("crypto-js");

    var extractedData = cryptoJS.AES.decrypt(dataTarget,dataKey);
    return JSON.parse(extractedData.toString(cryptoJS.enc.Utf8));
}

export default UserList;