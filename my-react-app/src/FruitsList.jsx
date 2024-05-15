function FruitsList(props){
    const itemList = props.items;


    //fruits.sort((a, b) => a.name.localeCompare(b.name)); //Ordem alfabética
    //fruits.sort((a, b) => b.name.localeCompare(a.name)); //Oredem alfabética reversa
    //fruits.sort((a,b) => a.calories - b.calories); //Ordem Numérica ascendente           
    itemList.sort((a,b) => b.calories - a.calories); //Ordem Numérica descendente   
    
    const lowCalorieFruits = itemList.filter(fruit => fruit.calories < 100)
    const highCalorieFruits = itemList.filter(fruit => fruit.calories >= 100)
    
    const listLowCalories = lowCalorieFruits.map(fruit => <li key={fruit.id}>{fruit.name} {fruit.calories}kcal</li>);
    const listHighCalories = highCalorieFruits.map(fruit => <li key={fruit.id}>{fruit.name} {fruit.calories}kcal</li>);

    return(
        <div className="container">
            <div className="fruit-container">
                <h1>LOW CALORIE FRUITS</h1>
                <ul className="fruits-list">
                    {listLowCalories}
                </ul>
            </div>

            <div className="fruit-container">
                <h1>HIGH CALORIE FRUITS</h1>
                <ul className="fruits-list">
                    {listHighCalories}
                </ul>
            </div> 
        </div>
    )
}

export default FruitsList;