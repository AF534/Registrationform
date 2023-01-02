import React,{ useState } from "react";
const Reactcontact = () => {

  const [userData, setUser] = useState({
      Name :"",
      Email:"",
      username:"",
      psw:"",
      phone:"",
    });
   let name,value;
  const getuserData = (event) =>{
     name= event.target.name;
     value=event.target.value;
     setUser({...userData, [name] : value});
     
  };
  

  const postData = async(event) =>{
     event.preventDefault();
   const {Name,Email,username,psw,phone}= userData;
   if(Name && Email && username && psw &&phone){

     const res = fetch("https://registration-form-c79c2-default-rtdb.firebaseio.com/userDatabase.json",{
      method :"POST",
      headers:{
        "Content-Type":"application/json",
      },
      body: JSON.stringify({
        Name,
        Email,
        username,
        psw,
        phone,
      }),
    }
    );
    if(res){
      setUser({
       Name :"",
      Email:"",
      username:"",
      psw:"",
      phone:"",

      })
      alert('Data store');
    }
    else{
      alert('Please fill the data');
    }
  }else{
    alert('Please fill the data');
  }
  }

  return (
    <>
      <html>
      <form  method="POST">
          <div className="container">
         
            <h1>Registration form</h1>
            <p>Please fill in this for to registration.</p>

            <label htmlFor="username"  >
              <b required>Name</b>
            </label>
            <input
              type="text"
              name="Name"
              placeholder="Enter Username"
             value={userData.Name}
             onChange = {getuserData}
            required
            autoComplete="off"
              id="users"
            />
            <span id="user" className="text-danger font-weight-bold"></span>
            <label htmlFor="email">
              <b>Email</b>
            </label>
            <input
              type="text"
            placeholder="Enter Email"
             value={userData.Email}
             onChange = {getuserData}
             name="Email"
              required
              autoComplete="off"
              id="Email"
            />
            <span id="ED" className="text-danger font-weight-bold"></span>
            <label htmlFor="Text">
              <b>Username</b>
            </label>
            <input
              type="text"
              name="username"
              placeholder="Enter Username"
            value={userData.username}
             onChange = {getuserData}
             required
              autoComplete="off"
              id="name"
            />
            <span id="names" className="text-danger font-weight-bold"></span>
            <label htmlFor="psw">
              <b>Password</b>
            </label>
            <input
              type="password"
              placeholder="Enter Password"
            value={userData.psw}
             onChange = {getuserData}
             name="psw"
              required
              autoComplete="off"
              id="Password"
            />
            <span id="ps" className="text-danger font-weight-bold"></span>
            <label htmlFor="phone">
              <b>Phone Number</b>
            </label>
            <br />

            <input
              type="text"
              name="phone"
              placeholder="812345678"
             value={userData.phone}
             onChange = {getuserData}
             required
              autoComplete="off"
              id="mobile"
            />
            <span id="mo" className="text-danger font-weight-bold"></span>
            <div className="clearfix">
              <button type="submit" className="btn" onClick={postData}>
                submit
              </button>
            </div>
     
          </div>
          </form>
      </html>
    </>
  );
};

export default Reactcontact;
