import React from 'react'
import {Container, Typography, Button, Grid} from '@material-ui/core'
import UseStyles from './Style'
import CartItem from './CartItem/CartItem'
import {Link} from 'react-router-dom'

const Cart = ({ cart, handleUpdateQty, handleRemoveFromCart, handleEmptyCart }) =>{
const classes = UseStyles();
    
if(!cart.line_items)
    return "...loading"
   console.log(cart.line_items)

    const EmptyCart = () =>{
        return(<Typography variant="subtitle1">You have not shopped yet</Typography>)
    }

    const FilledCart = () =>{
       return( <>
            <Grid container spacing={3}>
                {cart.line_items.map((item) =>(
                    <Grid item xs={12} sm={4} key={item.id}>
                        <CartItem item={item} onUpdateCartQty={handleUpdateQty} onRemoveFromCart={handleRemoveFromCart}/>
                    </Grid>
                ))}
            </Grid>
            <div className={classes.cardDetails}>
                 <Typography variant="h4">
                     Subtotal: {cart.subtotal.formatted_with_symbol}
                 </Typography>
                 <div>
                     <Button className={classes.emptyButton} size="large" variant="contained" type="button" style ={{backgroundColor: "blue"}} onClick={handleEmptyCart}>Empty</Button>
                     <Button component={Link} to='/checkout' className={classes.checkoutButton} size="large" variant="contained" type="button" style={{backgroundColor: "red"}}>Check out</Button>
                 </div>
            </div>
        </>)
    }
    return(
        <Container>
            <div className={classes.toolbar}/>
            <Typography className={classes.title} variant="h3" gutterBottom>Your Shopping Cart</Typography>
            {!cart.line_items.length ? <EmptyCart/> : <FilledCart/> }
        </Container>
    )
}
export default Cart