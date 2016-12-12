import React,{Component} from 'react';

class Search extends Component {
 onSubmit (e) {
     e.preventDefault();
     console.log(e);
     let username = this.refs.username.value.trim();

     this.props.onFormSubmit(username);
       this.refs.username.value ='';
 }
    render() {
         return (
            <div>
                 <form onSubmit ={this.onSubmit.bind(this)}>
                   <label> Search ur users </label>
                <input type ="text" ref="username"  className="form-control"/>
t
                  </form>
                 </div>

         )



    }


}
export default  Search