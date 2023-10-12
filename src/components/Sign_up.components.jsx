import React, { Component }from 'react';
import Input from './common/input.components';

class Sign_in extends Component {
   state = {  
     user: {username:'' , password:''},
     errors: {username:'' , password:''}
   } 

      handleSubmit=(e)=>{
        console.log('hello');
        e.preventDefault();

         const userName=e.target[0].value;
         const password=e.target[1].value;
         console.log(userName ,password);
        
        if(userName === 'admin' && password === '12345'){
           this.props.history.push('/sign_in');
        }
        else{
          const errors = {...this.state.errors};
          errors.username = 'Username or password incorrect';
          errors.password = 'Username or password incorrect';

          this.setState({...this.state , errors});
        }
    }

    validInput = (name , value) =>{
        if(name==='username'){
            if(value.trim()==='')return 'Username must not be empty';
        }
        if(name==='password'){
          if(value.trim()==='')return 'Password must not be empty';
        }
        return '';
        
    }
  
    handleChange= (e) =>{
       const  name=e.currentTarget.name;
       const value=e.target.value;

       const error = this.validInput(name ,value);
       const errors = {...this.state.errors}
       

      if(error)errors[name]=error;

       const user={...this.state.user};
       user[name]=value;

       this.setState({user ,errors});

    }
  
  render() { 
    return (
      <>
      <div className="container w-50 mx-auto">
        <form onSubmit={this.handleSubmit}>
          <div class="mb-3">
            <Input 
              label="User Name"
              name="username"
              id="username"
              type="text"
              value={this.state.user.username}
              onChange={e => this.handleChange(e)}
              errors={this.state.errors}
            />
            
          </div>
          <div className="mb-3">
            <Input 
              label="Password"
              name="password"
              id="password"
              type="text"
              value={this.state.user.password}
              onChange={e => this.handleChange(e)}
              errors={this.state.errors}
            />
          </div>
          <div className="mb-3 form-check">
            <input type="checkbox" className="form-check-input" id="check" />
            <label className="form-check-label" htmlFor='check'>
              Check me out
            </label>
          </div>
          <button  type="submit" className="btn btn-primary">
              Logout
          </button>
        </form>
        </div>
      </>
    );
  }
}
 
export default Sign_in;





