import Header from './Header.jsx'
import Footer from './Footer.jsx'
import Food from './Food.jsx'
import Card from './Card.jsx'
import Button from './Button/Button.jsx'
import Inline  from './Inline.jsx'
import Student from './Student.jsx'

function App() {
    return(
      // Fragment
      <>
        <Header></Header>
        <Card/>
        <Student name= "Pitoco" age={3} isStudent={true}/>
        <Student name= "Chatuco" age={2} isStudent={true}/>
        <Student name= "Pluto" age={50} isStudent={false}/>
        <Student/>
        <Button/>
        <Inline/>
        {/* <Food/> */}
        <Footer/>
      </>
    );
}

export default App
