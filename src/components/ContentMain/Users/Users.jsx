import React from "react";
import usersCSS from "./Users.module.css";
import User from "./user/User";
import LoaderSpiner from "./../../../assets/LoaderSpiner.svg"
import TupeSpiner from "./../../../assets/tube-spinner.svg"
import { redirect } from "react-router-dom";

class Users extends React.Component {

    state = {
        listPages: [],
        currentListPage: Math.ceil(this.props.currentPage / 10) ,
        currentItemPage: this.props.currentPage,
        usersPerPage : 10,
        arr: []
    }

    getStartIndex = () => (this.state.currentListPage - 1) * this.state.usersPerPage;

    getEndIndex = () => this.getStartIndex() + this.state.usersPerPage;

    componentDidMount(prevProps, prevState) {
        
        this.setState({
                arr: this.renderItemsPages()
            });
        
    }

    componentDidUpdate(prevProps, prevState) {
        
        if (prevProps.countUsers !== this.props.countUsers) {
            
            this.setState({
                arr: this.renderItemsPages()
            });
        }
        if(prevState.currentListPage !== this.state.currentListPage){
            this.setState({
                arr: this.renderItemsPages()
            });
        }
        if(prevProps.currentPage !== this.props.currentPage){
            this.setState({
                arr: this.renderItemsPages()
            });
        }
        
    }

    renderUsers = () => {
        
        return this.props.users.map(user => (
            <User
                key={user.id}
                user={user}
                toogleIsFollowing = {this.props.toogleIsFollowing}
                SetFollowingOnUser = {this.props.SetFollowingOnUser}
                DeleteFollowingOnUser = {this.props.DeleteFollowingOnUser}
            />
        ));
    }

    renderItemsPages = () => {
            const templistpage = []
            for (let i = 1; i <= Math.ceil(this.props.countUsers / 10); i++) {
                templistpage.push(i);
            }


            const temparr = this.props.mappingArray(templistpage)
    
            if (temparr.length <= 10) {
                return temparr;
            }
            
            const firstFive = temparr.slice(this.getStartIndex(), this.getEndIndex());
            const lastFive = temparr.slice(-5);
            return [...firstFive,":", ...lastFive];
    }
    
    left = () => {
        this.setState({
            currentListPage: this.state.currentListPage - 1
        })
    }

    right = () => {
        this.setState({
            currentListPage: this.state.currentListPage + 1
        })
    }
 
    

    render() { return <div>
                {this.props.isFetching === true? <img className={usersCSS.img} src = {LoaderSpiner}  alt="ФОТО" />: null}
                <div style={{
                        display: "flex",
                        flexDirection: "row", // Или 'column'
                        justifyContent: "center", // Выравнивание по горизонтали
                        alignItems: "flex-start", // Выравнивание по вертикали
                        gap: "10px", // Отступы между элементами
                        
                    }}>
                    <button onClick={this.left}>{"<="}</button>
                    <div className={usersCSS.ListPages}>
                        {this.state.arr}
                    </div>
                    <button onClick={this.right}>{"=>"}</button>
                </div>
                <div className={usersCSS.users}>
                    <div  className={usersCSS.usersMaped}>
                        {this.renderUsers()}
                    </div>
                </div>
                <div className={usersCSS.buttonDiv}>
                    {this.props.isFetchingLoader ? <button onClick={this.props.fetchUsers} className={usersCSS.button}>
                        Загрузить еще
                    </button>: <img className={usersCSS.imgLoader}  src = {TupeSpiner}  alt="ФОТО" />}
                    
                </div>
            </div>
    }
}


export default Users;
