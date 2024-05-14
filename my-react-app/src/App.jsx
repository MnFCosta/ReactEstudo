import Header from './Header.jsx'
import Footer from './Footer.jsx'
import Food from './Food.jsx'
import Card from './Card.jsx'
import Button from './Button/Button.jsx'
import Inline  from './Inline.jsx'

function App() {
    return(
      // Fragment
      <>
        <Header></Header>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Button/>
        <Inline/>
        {/* <Food/> */}
        <Footer/>
      </>
    );
}

export default App
