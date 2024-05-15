import Header from './Header.jsx'
import Footer from './Footer.jsx'
import Food from './Food.jsx'
import Card from './Card.jsx'
import Button from './Button/Button.jsx'
import Inline  from './Inline.jsx'
import Student from './Student.jsx'
import UserGreeting from './UserGreeting.jsx'

function App() {
    return(
      // Fragment
      <>
        <Header></Header>
        <UserGreeting isLoggedIn={true} username="Manoer"/>
        <UserGreeting/>
        <Card/>
        <Student name= "Pitoco" age={3} isStudent={true}/>
        <Student/>
        <Footer/>
      </>
    );
}

export default App
