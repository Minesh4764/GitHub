import React,{Component} from 'react';
import ReactDom from 'react-dom';
import Profile from './Github/Profile';
import Repolist from './Github/Repolist';
//import Search from '../components/Github/Search';
import Search from './Github/Search';
class App extends Component{
    constructor(props) {
        super(props);
        this.state = {
            username : "minesh20872",
            userData :[],
            userRepos:[],
            perPage: 5
        }

    }

// get user data from Github
    getUserData() {

        $.ajax({
            url: "https:/api.github.com/users/" + this.state.username + "?client_id=" + this.props.clientId + "&client_secret=" + this.props.clientSecret,

            datatype:'json',
            cache:false,
            success:function (data) {
                console.log(data);
                this.setState({userData:data})

            }.bind(this),
            error:function(xhr,status,err) {
                this.setState({username:null})
                alert(err);
            }.bind(this)
        });

    }
    // get user repot from Github
    getUserrepos() {

        $.ajax({
            url: "https:/api.github.com/users/" + this.state.username + "/repos?per_page"+this.state.perPage +"&client_id=" + this.props.clientId + "&client_secret=" + this.props.clientSecret+"&sort=created",

            datatype:'json',
            cache:false,
            success:function (data) {
                console.log('this is the first time');
                this.setState({userRepos:data})

            }.bind(this),
            error:function(xhr,status,err) {
                this.setState({username:null})
                alert(err);
            }.bind(this)
        });

    }

    handleFormSubmit(username) {
       // alert(username);

        this.setState({username:username},function(){
      console.log(this.state.username);
            this.getUserData();
            this.getUserrepos();


        });


      }


  componentDidMount() {
        this.getUserData();
        this.getUserrepos();
  }
  render() {
      return (
         <div>
                <Search onFormSubmit = {this.handleFormSubmit.bind(this)}/>
                 <Profile {...this.state}/>


         </div>


      )

  }


}
App.propTypes = {
    clientId : React.PropTypes.string,
    clientSecret : React.PropTypes.string,

};
App.defaultProps ={

    clientID :"dfae578e9bec7b7a7e98",
    clientSecret:"c78c18b7e1e62614fd7967e646a72bbc1b329680"
}


export default App