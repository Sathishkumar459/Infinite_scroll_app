import React from 'react';
import axios from 'axios';

class Map1 extends React.Component{
    constructor(){
        super();
        this.state = {
            filteredusers: [],
           
        }
    }

   componentDidMount(){
    axios({
        method:'GET',
        url:'https://randomuser.me/api/?results=500',
        headers:{'Content-Type' : 'application/json'}

    })
    .then(response => { 
        this.setState({filteredusers : response.data.results})
        console.log( response.data.results)
    })
    .catch(err => console.log(err));
   }

    render(){
      const {filteredusers} = this.state;
        return(
            <div>
               {/* {filteredusers.map((value, e) =>{
               return <div key={e}>{value.gender}</div>
          
               })} */}
              
              <table border={1}>
                    <tr>
                        
                        <td>Gender</td>
                        <td>Name</td>
                        <td>Email</td>
                        <td>phone Number</td>
                    </tr>
                    {filteredusers.map((value, e) => {
                        return <tr key={e}>
                           
                            <td>{value.gender}</td>
                            <td>{value.name.first}</td>
                            <td>{value.email}</td>
                            <td>{value.cell}</td>
                        </tr>
                    })}
                </table>
            </div>
        )
    }
}

export default Map1;