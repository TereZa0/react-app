import React, { Component, useState, useEffect } from 'react'
import dummyImage from '../bg-1.jpg';

class UserList extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            UsersData: [],
            isLoaded: false,
            IndexKey: [],
        }

        const Datas = [];
    }

    async componentDidMount() {
        const url = "http://192.168.0.108:8356/Api/User/1";

        try {
            fetch(url, { mode: 'cors' })
                .then((res) => res.json())
                .then((json) => {
                    // console.log(json);
                    this.setState({
                        UsersData: json,
                        isLoaded: true
                    });

                    // if (this.state.UsersData.length > 0) {
                    //     this.setState({
                    //     });
                    // }
                    console.log(makeid());
                    console.log(this.state.UsersData);
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
                    this.state.UsersData.map((user) => {
                        return (
                            <div className="col-sm-7 mt-2 crd-container" key={makeid()}>
                                <div className="card crd-content">
                                    <img src={dummyImage} className="card-img-top" alt="..." style={{ margin: 0 }} />
                                    <div className="card-body">
                                        <p className="card-title">
                                             {user.Username}
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

export default UserList;