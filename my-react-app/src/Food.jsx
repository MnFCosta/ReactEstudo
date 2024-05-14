function Food() {
    const food1 = 'Watermelon';
    const food2 = 'Apple';

    return(
        <ul>
            <li>Fruits:</li>
            <li>{food1.toUpperCase()}</li>
            <li>{food2}</li>
        </ul>
    );
}   

export default Food