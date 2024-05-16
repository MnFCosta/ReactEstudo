function ProfilePicture (){
    const imageUrl = "./src/assets/foto.jpg";

    const handleClick = (e) => {
        alert("NYOUCH I DONT LIKE YOU");
        e.target.style.display = 'none';

    }

    return <img onClick={(e) => handleClick(e)} src={imageUrl} alt="" />
}

export default ProfilePicture