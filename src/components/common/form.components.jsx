import React, { Component } from 'react';


class Form extends Component {
    state = { 
        data: {},
        errors: {}
     } 

    
    // doSubmit=(e)=>{
    //     console.log('hello');
    //     e.preventDefault();

    //      const userName=e.target[0].value;
    //      const password=e.target[1].value;
    //      console.log(userName ,password);
        
    //     if(userName === 'admin' && password === '12345'){
    //        this.props.history.push('/movies');
    //     }
    //     else{
    //       const errors = {...this.state.errors};
    //       errors.username = 'Username or password incorrect';
    //       errors.password = 'Username or password incorrect';

    //       this.setState({...this.state , errors});
    //     }
    // }

    handleSubmit = (e) =>{
        e.preventDefault();

        this.doSubmit();

    }

    handleChange= ({currentTarget:input}) =>{
        const data = {...this.state.data};
        data[input.name]=input.value;

        const errors = {...this.state.errors}

       const error = this.validInput(input.name ,input.value);
      
       

      if(error)errors[input.name]=error;
      else delete errors[input.name];

       this.setState({data , errors: errors || {} });

    }


    validInput = (name , value) =>{
        if(name==="username"){
            if(value.trim()==='')return 'Username must not be empty';
        }
        if(name==='password'){
          if(value.trim()==='')return 'Password must not be empty';
        }
        return '';
        
    }
  
    

  
}
 
export default Form;