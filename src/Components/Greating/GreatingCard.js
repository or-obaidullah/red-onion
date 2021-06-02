import { BsArrowRightShort} from 'react-icons/bs';
import React from 'react';

const GreatingCard = (props) => {
    const {image,icon,title} = props.cardData;
    return (
        <div className="col-md-4">
            <div className="card">
                <img src={image} className="card-img-top" alt="adultBlur" />
                <div className="card-body">
                    <div className='d-flex'>
                        <span className="modeIcon d-flex justify-content-center align-items-center">{icon}</span>
                        <h5 className="card-title">{title}</h5>
                    </div>
                    <p className="card-text ml-5">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <a href="#" className="d-flex ml-5">See more <span className='rightArrow d-flex justify-content-center align-items-center ml-2'><BsArrowRightShort /></span></a>
                </div>
            </div>
        </div>
    );
};

export default GreatingCard;