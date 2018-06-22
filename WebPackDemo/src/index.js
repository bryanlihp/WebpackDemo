import _ from 'lodash';
import './style.css'
import Icon from "./BurliNE_icon.png";
import Bkgnd from "./Background.jpg";

function component() {
    var element = document.createElement('div');

    // Lodash, now implemented by this script
    element.innerHTML = _.join(['Hello', 'webpack'], ' ');
    element.classList.add('hello');

    //Add the image to div
    var icon = new Image();
    icon.src = Icon;
   
    element.appendChild(icon);
    return element;
}

document.body.appendChild(component());