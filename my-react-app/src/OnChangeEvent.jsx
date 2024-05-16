import React, {useState} from 'react'

function OnChangeEvent(){
    const [name, setName] = useState('Guest');
    const [qtd, setQtd] = useState(1);
    const [comment, setComment] = useState('');
    const [payment, setPayment] = useState('');
    const [shipping, setShipping] = useState('');

    function handleNameChange(e){
        setName(e.target.value);
    }

    function handleQtdChange(e){
        setQtd(e.target.value)
    }

    function handleCommentChange(e){
        setComment(e.target.value)
    }

    function handlePaymentChange(e){
        setPayment(e.target.value)
    }

    function handleShippingChange(e){
        setShipping(e.target.value)
    }

    return(
        <div>
            <input value={name} onChange={handleNameChange}/>
            <p>Name: {name}</p>
            <input value={qtd} onChange={handleQtdChange} type='number'/>
            <p>Quantity: {qtd}</p>
            <input value={comment} onChange={handleCommentChange} placeholder = "Enter delivery instructions" type='text-area'/>
            <p>Comment: {comment}</p>
            <select value={payment} onChange={handlePaymentChange}>
                    <option value="">Select a payment type:</option>
                    <option value="VISA">VISA</option>
                    <option value="MASTERCARD">MASTERCARD</option>
                    <option value="PIX">PIX</option>
            </select>
            <p>Payment: {payment}</p>
            <label>
                 Pickup 
                 <input type="radio" value="PICKUP" checked={shipping === "PICKUP"} onChange={handleShippingChange}/>
            </label>
            <label>
                 Delivery
                 <input type="radio" value="DELIVERY" checked={shipping === "DELIVERY"} onChange={handleShippingChange}/>
            </label>
            <p>Shipping: {shipping}</p>
        </div>
    );
}

export default OnChangeEvent