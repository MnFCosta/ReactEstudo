import Header from './Header.jsx'
import Footer from './Footer.jsx'
import Food from './Food.jsx'
import Card from './Card.jsx'
import Button from './Button/Button.jsx'
import Inline  from './Inline.jsx'
import Student from './Student.jsx'
import UserGreeting from './UserGreeting.jsx'
import FruitsList from './FruitsList.jsx'
import ButtonClick from './ButtonClick.jsx'
import ProfilePicture from './ProfilePicture.jsx'

function App() {
    const fruits = [
                    {id: 1, name: 'Apple', calories: 95},
                    {id: 2, name: 'Orange', calories: 45},
                    {id: 3, name: 'Banana', calories: 105},
                    {id: 4, name: 'Coconut', calories: 159},
                ];
    
    const fruits2 = [
                    {id: 5, name: 'Strawberry', calories: 2},
                    {id: 6, name: 'Mango', calories: 202},
                ];            

    return(
      // Fragment
      <>
        <Header></Header>
        <div className='container'>
          <UserGreeting isLoggedIn={true} username="Manoer"/>
        </div>
        <div className='container'>
          <ProfilePicture/>
        </div>
        <FruitsList items={fruits}/>
        <FruitsList items={fruits2}/>
        
        <div className='container'>
          <Card/>
          <Card/>
          <Card/>
          <Card/>
        </div>
        <div className='container'>
          <Student name= "Pitoco" age={3} isStudent={true}/>
          <Student/>
          <Student/>
          <Student/>
        </div>
        <Footer/>
      </>
    );
}

export default App
