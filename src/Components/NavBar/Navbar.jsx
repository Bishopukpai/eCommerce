import React from 'react'
import {AppBar, Toolbar, IconButton, Badge, MenuItem, Menu, Typography} from '@material-ui/core'
import {AssessmentTwoTone, CallMissedSharp, ShoppingCart, Store} from '@material-ui/icons'

import logo from '../../Assets/store.png'
import {Link, useLocation} from 'react-router-dom'

import useStyles from './style'

const Navbar = ({totalItems}) =>{
    const Location = useLocation();
    const classes = useStyles();
    return(
        <>
          <AppBar position="fixed" className={classes.appBar} color="inherit">
            <Toolbar>
                <Typography component={Link} to="/" variant='h6' className={classes.title} color="inherit">
                    <img src ={logo} alt="bishopCommerce" height="25px" className={classes.image}/>
                    Bishop's Shop
                </Typography>
                <div className={classes.grow}/>
                {Location.pathname === '/' && (
                <div className={classes.button}>
                    <IconButton component={Link} to="/cart" ariel-label="show-cart items" color="inherit">
                        <Badge badgeContent={totalItems} color="primary">
                            <ShoppingCart/>
                        </Badge>
                    </IconButton>
                </div>)}
            </Toolbar>
          </AppBar>  
        </>
    )
}
export default Navbar