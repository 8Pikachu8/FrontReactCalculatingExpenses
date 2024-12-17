import React from "react";
import usersCSS from "./Users.module.css";
import User from "./user/User";
import axios from "axios";

class Users extends React.Component {
    constructor(props) {
        super(props);
        this.countLoad = 0;
    }

    componentDidMount() {
        const str = `/api/1.0/users?page=${this.props.currentPage}`;
        axios.get(str).then(response => {
            this.props.CallBackSetUsers(response.data.items);
            this.props.CallBackSetTotalUserCount(response.data.totalCount);
        });
    }

    componentWillUnmount() {
        this.props.CallBackSetUsers([]);
        this.props.CallBackSetTotalUserCount(0);
    }

    fetchUsers = () => {
        debugger
        this.countLoad = this.countLoad + 1;
        const str = `/api/1.0/users?page=${this.props.currentPage + this.countLoad}&count=10`;
        axios.get(str).then(response => {
            this.props.CallBackSetUsers(response.data.items);
        });
    };

    setPage = (val) => {
        const str = `/api/1.0/users?page=${val}&count=10`;
        axios.get(str).then(response => {
            this.props.CallBackSetPage(val, response.data.items);
        });
    };

    renderUsers = () => {
        return this.props.users.map(user => (
            <User
                key={user.id}
                CallBackFollow={this.props.CallBackFollow}
                CallBackUnFollow={this.props.CallBackUnFollow}
                user={user}
            />
        ));
    };

    renderItemsPages = () => {
        let listUsers = [];
        for (let i = 1; i <= Math.ceil(this.props.countUsers / 10); i++) {
            listUsers.push(i);
        }

        const arr = listUsers.map(val => (
            <div
                key={val}
                onClick={() => this.setPage(val)}
                className={this.props.currentPage === val ? usersCSS.ItemPagesSelected : usersCSS.ItemPages}
            >
                {val}
            </div>
        ));

        if (arr.length <= 10) {
            return arr;
        }

        const firstFive = arr.slice(0, 5);
        const lastFive = arr.slice(-5);
        return [...firstFive, ...lastFive];
    };

    render() {
        return (
            <div>
                <div className={usersCSS.ListPages}>
                    {this.renderItemsPages()}
                </div>
                <div className={usersCSS.users}>
                    <div ref={this.pagesDivRef} className={usersCSS.usersMaped}>
                        {this.renderUsers()}
                    </div>
                </div>
                <div className={usersCSS.buttonDiv}>
                    <button onClick={this.fetchUsers} className={usersCSS.button}>
                        Загрузить еще
                    </button>
                </div>
            </div>
        );
    }
}

export default Users;
