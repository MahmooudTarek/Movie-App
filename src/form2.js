// import React, { useState } from "react";
import React, { useState } from "react";
import { useHistory } from "react-router-dom";
function Form2() {
const [User,SetUser]=useState({
  Name:"", 
  Email: "",
  password: "",
  confirmPassword:""
})
const[userErrors,SetUserError]=useState({
  UserNameErr:"", 
  UserEmailErr:"",
  passwordErr:"",
  confirmPasswordErr:""
})


const HandleUser=(e)=>{
  console.log(e.target.id,e.target.value)
  SetUser({
   ...User,
   [e.target.id]:e.target.value 
  })
  handleValidation(e.target.id,e.target.value)
}
const handleValidation=(field,value)=>{
    // let str=" "
    switch(field){
      case "Name" :
        SetUserError({
            ...userErrors,
            UserNameErr:value.length===0?"name is required":""||value.indexOf(' ') >= 0?"shouldnt contain spaces":""  
        }) 
        break;
      case "Email":
    SetUserError({
      ...userErrors,
      UserEmailErr:value.length===0?"user Email is required":""
    })
    break;
    case "password":
    SetUserError({
      ...userErrors,
      passwordErr:value.length === 0
      ? "this field is required"
      : /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/.test(value) === false
      ? "password must be greater than 8 and contains at least one lowercase and one uppercase  at least one digit and special character"
      : "",

    }) 
    break;
    case "confirmPassword":
        SetUserError({
            ...userErrors,
            confirmPasswordErr:
            value.length === 0
              ? "this field is required"
              : value !== User.password
              ? "Password Not Matched"
              : "",
            

          })
          break;
     default:
         SetUserError({
            ...userErrors,
          })

  } 
    
     

}
const history = useHistory()
function stepForward(e){
  history.push("/Movies")

}

const HandleSubmit=(e)=>{
  e.preventDefault()
  if(e.target.value===""){
    console.log(e.target.value);
    handleValidation()
  }else
  console.log(User)

}



  return(
    <>
    <h1> SIGN UP  </h1>
    <form className="text-center" onSubmit={(e)=>HandleSubmit(e)}>
    <div className="form-group row mt-5">
      <label htmlFor="inputName" className="col-sm-2 col-form-label ">UserName</label>
      <div className="col-sm-5">
        <input type="text "
         className="form-control" 
         id="Name"
          // placeholder="Email"
          aria-describedby="Usernamehelp"
         value={User.Name}
         onChange={(e)=>{HandleUser(e)}}
         />
      <div id="Usernamehelp" className="form-text text-danger">
      {userErrors.UserNameErr}

      </div>
      </div>
    </div>    
    <div className="form-group row mt-5">
      <label htmlFor="inputEmail" className="col-sm-2 col-form-label ">Email</label>
      <div className="col-sm-5">
        <input type="Email"
         className="form-control" 
         id="Email"
          // placeholder="Email"
          aria-describedby="Useremailhelp"
         value={User.Email}
         onChange={(e)=>{HandleUser(e)}}

         />
      <div id="Useremailhelp" className="form-text text-danger">
      {userErrors.UserEmailErr}

      </div>
      </div>
    </div>
    <div className="form-group row mt-5">
      <label htmlFor="inputPassword" className="col-sm-2 col-form-label texr-light">Password</label>
      <div className="col-sm-5">
        <input type="password"
         className="form-control"
          id="password"
          //  placeholder="Password"
           aria-describedby="Userpasswordhelp"
           value={User.password}
           onChange={(e)=>{HandleUser(e)}}   
           />
           <div id="Userpasswordhelp" className="form-text text-danger">
           {userErrors.passwordErr}

           </div>
      </div>
    </div>
    <div className="form-group row mt-5">
      <label htmlFor="inputconfirmpassword" className="col-sm-2 col-form-label">confirmPassword</label>
      <div className="col-sm-5">
        <input  type="Password"
         className="form-control"
          id="confirmPassword"
          //  placeholder="Password"
           aria-describedby="confirmPasswordhelp"
           value={User.confirmPassword}
           onChange={(e)=>{HandleUser(e)}}   
           />
           <div id="confirmPasswordhelp" className="form-text text-danger">
           {userErrors.confirmPasswordErr}

           </div>
      </div>
    </div>
    <button onClick={()=>{stepForward()}}  type="submit" className="btn btn-primary ">submit</button>
  </form>

    </>
  )

}
export default Form2;

///////////////////////////
