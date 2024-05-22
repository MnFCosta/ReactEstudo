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
import Hooks from './Hooks.jsx'
import Counter from './Counter.jsx'
import OnChangeEvent from './OnChangeEvent.jsx'
import ColorPicker from './ColorPicker.jsx'
import StateObjects from './StateObjects,.jsx'
import StateArrays from './StateArrays.jsx'
import StateObjectArray from './StateObjectArray.jsx'
import Routine from './Routine.jsx'
import UseEffectHook from './UseEffectHook.jsx'
import UseEffectWindow from './UseEffectWindow.jsx'
import DigitalClock from './DigitalClock.jsx'
import UseContextA from './UseContextA.jsx'
import UseRef from './UseRef.jsx'
import Stopwatch from './Stopwatch.jsx'

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
        <div className="container">
            <Stopwatch/>
            <Stopwatch/>
            <Stopwatch/>
            <Stopwatch/>
            <Stopwatch/>
        </div>
        <div className="container">
            <DigitalClock/>
        </div>
        <div className="container">
          <ColorPicker/>
        </div>
        <div className="container">
          <Routine/>
        </div>
        <div className="container">
          <UseContextA/>
        </div>
        <div className="container">
          <Counter/>
          <StateObjects/>
          <StateArrays/>
          <StateObjectArray/>
        </div>
      </>
    );
}

export default App
