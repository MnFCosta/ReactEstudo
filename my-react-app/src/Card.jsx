import profilePic from './assets/foto.jpg'

function Card(){
    return(
        <div className='card'>
            <img  className='card-image' src={profilePic} alt="profile-pic" />
            <h2 className='card-title'>Manoer</h2>
            <p className='card-text'> um piazão ai</p>
        </div>
    );

}

export default Card