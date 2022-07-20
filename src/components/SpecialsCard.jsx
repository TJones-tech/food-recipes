import CustomImage from "./CustomImage";
import React from 'react'

function SpecialCard({special}) {
  return (
    <div className="recipe-card">
            <CustomImage imgSrc="/img/foods/sale.jpg" pt="65%"/>
            <div className="recipe-card-info">
                <p className="recipe-title">{special.title}</p>
                <p className="recipe-desc">{special.description}</p>
                <a className="view-btn" href="#!">VIEW SIMILIAR ITEMS</a>
            </div>
        </div>
    )
}

export default SpecialCard;