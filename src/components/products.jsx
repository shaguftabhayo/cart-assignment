import { Box, Card, Divider, Snackbar, SnackbarContent, Typography } from '@mui/material'
import React, {  useState } from 'react'
import pasta from '../components/assests/pasta.jpg'
import burgur from '../components/assests/burgut.webp'
import juice from '../components/assests/juice.jpg'

import ShareIcon from '@mui/icons-material/Share';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import CloseIcon from '@mui/icons-material/Close';


const dummyDishes = [
  {
    id: 1,
    img: pasta,
    name: "Pasta",
    price: "10"
  },
  {
    id: 2,
    img: burgur,
    name: "Burgur",
    price: "12"
  },
  {
    id: 3,
    img: juice,
    name: "MilkShake",
    price: "18"
  }
];




const Products = () => {
  const [cartList, setCartList] = useState([]);
  const [openAlert, setOpenAlert] = useState(false)

  const cartHandler = (product) => {

    const isExist = cartList.find((cart) => cart.id ===
      product.id);
    if (!isExist) {
      setCartList((prev) => [...prev, product]);



      let strCartList = JSON.stringify(cartList);
      localStorage.setItem("cartList", strCartList);
    } else {
      setOpenAlert(true);
    }
  };
  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {

      return;
    }
    setOpenAlert(false);

  };


  
  return (

    <>
      <Snackbar
        anchorOrigin={{ vertical: "top", horizontal: "right" }}
        open={openAlert}
        autoHideDuration={6000}
        onClose={handleClose}
      >

      <SnackbarContent style={{
        backgroundColor: '#bb2124',
      }}
        message={<Box>
          <span id="client-snackbar">Product is already exist in cart</span>
          <CloseIcon onClick={handleClose}/>
        </Box>}
      />
    </Snackbar>

      <Box sx={{ display: "flex", gap: "40px", }} className="container mt-3">
        {dummyDishes?.map((dishes, index) => {
          return (
            <Card key={index} sx={{ padding: "30px", cursor: "pointer", width: "250px" }}>
              <Box>
                <Box className="text-center">
                  <img className='dish-img' width={110} src={dishes.img} alt={`${dishes.name}`} />
                </Box>
                <Typography variant="h5" className='mt-3'>{dishes.name}</Typography>
                <Divider sx={{ borderColor: "#333" }} />
                <Box className="d-flex justify-content-between mt-3">
                  <ShareIcon />
                  <FavoriteIcon />
                  <ShoppingCartIcon onClick={() => { cartHandler(dishes); }} />

                </Box>
              </Box>
            </Card>
          );
        })}
      </Box>
    </>
  );
};

export default Products
