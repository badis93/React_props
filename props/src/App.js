import './App.css';
import Profile from './Profile/Profile.js';
import myProfile from './Profile/myProfile.jpg';

function App() {
  let fullName = "Badis";
  let bio = "hand";
  let profession = "engineer";
 const handleName = () => {
 console.log("go my code");
 
  }
  return (
    <div className="App">
     <Profile 
    
     fullName ={fullName} 
     bio ={bio} 
     profession ={profession}
     handleName = {handleName}
     >

     <img src={myProfile} alt="myProfile" />
       </Profile>
    </div>
  );
}

export default App;
