import React, { Component } from 'react';
import classes from './BurgerIngredient.module.css';
import PropTypes from 'prop-types';

import BurgerBottom from '../../../images/burger-bottom.png';
import BurgerTop from '../../../images/burger-top.png';

class BurgerIngredient extends Component {
    render() {
        let ingredient = null;

        switch (this.props.type) {
            case 'bread-bottom':
                // ingredient = <div className={classes.BreadBottom} />;
                ingredient = (
                    <div>
                        <img
                            className={classes.BreadBottom}
                            src={BurgerBottom}
                            alt='burger-bottom'
                        />
                    </div>
                );
                break;

            case 'bread-top':
                // ingredient = (
                //   <div className={classes.BreadTop}>
                //     <div className={classes.Seeds1} />
                //     <div className={classes.Seeds2} />
                //   </div>
                ingredient = (
                    <div>
                        <img
                            className={classes.BreadTop}
                            src={BurgerTop}
                            alt='burger-top'
                        />
                    </div>
                );
                break;

            case 'meat':
                ingredient = <div className={classes.Meat} />;
                break;

            case 'cheese':
                ingredient = <div className={classes.Cheese} />;
                break;

            case 'salad':
                ingredient = <div className={classes.Salad} />;
                break;

            case 'bacon':
                ingredient = <div className={classes.Bacon} />;
                break;

            default:
                ingredient = null;
        }
        return ingredient;
    }
}

BurgerIngredient.propTypes = {
    type: PropTypes.string.isRequired
};

export default BurgerIngredient;
