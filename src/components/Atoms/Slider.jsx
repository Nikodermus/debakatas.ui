import React from 'react';

const Slider = ({ className, title, img = [], withPlus = false }) => (
    <div className={`${className} slider np-element`}>
        <h3 className="slider__title">{title}</h3>
        <ul className="slider-list">
            {img.map((i) => (
                <li className="np-element slider-list__item">
                    <img src={i} alt="" />
                </li>
            ))}
            {withPlus && (
                <li>
                    <button
                        type="button"
                        className="slider__btn np-btn np-circle-sm"
                    >
                        +
                    </button>
                </li>
            )}
        </ul>
    </div>
);

export default Slider;
