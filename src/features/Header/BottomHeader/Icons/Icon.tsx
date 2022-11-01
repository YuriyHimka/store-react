import React from 'react';
import './Icon.scss'

interface IIcons {
    icon: React.ClassicElement<SVGElement>
    counter: number
}

const Icon = ({ icon, counter }: IIcons) => {
    return (
        <div className="Icon">
            { icon }
            <span className="counter">{ counter }</span>
        </div>
    );
};

export default Icon;