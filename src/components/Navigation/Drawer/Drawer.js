import React from 'react';
import classes from "./Drawer.module.sass";
import Backdrop from "../../Ui/Backdrop/Backdrop";

const links = [
    'test',
    'test2',
    'test3'
]

class Drawer extends React.Component {
    renderLinks() {
        return links.map((link, index) => {
            return (
                <li key={index}>
                    <a href="#">
                        {link}
                    </a>
                </li>
            )
        })
    }

    render() {
        const cls = [classes.Drawer]
        if (!this.props.isOpen) {
            cls.push(classes.close)
        }
        return (
            <React.Fragment>
                <nav className={cls.join(' ')}>
                    <ul>
                        {this.renderLinks()}
                    </ul>
                </nav>
                {this.props.isOpen ? <Backdrop onClick={this.props.onClose}/> : null}
            </React.Fragment>
        )
    }
}

export default Drawer;