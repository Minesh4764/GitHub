import React,{Component} from 'react';


import Repo from "../Github/Repo";
class Repolist extends Component{

    render() {
           console.log('this is the object');
           console.log(this.props.userRepos)
        return (

        <div>
                <ul className ="list-group">
            {
                this.props.userRepos.map(repo => {
                return (
                <Repo
                  repo={repo}
                  key={repo.id}
                {...this.props}/>
                )

            })
    }
                </ul>
        </div>

    )
    }



}
export default Repolist
