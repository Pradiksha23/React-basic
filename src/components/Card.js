import User from './User';

function Card(){
    const cardInfo='ferrari';
    return(
        <div>
            <h2>Hello I am Card</h2>
            <User cardInfo={cardInfo} />
        </div>
    );
}

export default Card;