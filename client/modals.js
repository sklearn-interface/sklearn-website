import React from 'react';
import ReactDom from 'react-dom';
import Modal from 'react-modal';

const customStyle = {
    content : {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform:'translate(-50%, -50%)'
    }
};


//Make sure to bind modal to your appElement  (http://reactcommunity.org/react-modal/accessibility/)
Modal.setAppElement('#yourAppElement')

class App extends React.Component{
    
}