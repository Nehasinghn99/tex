import React from 'react'
import "./Navbar.css";
import SearchIcon from '@mui/icons-material/Search';
import { Badge, Input } from '@mui/material';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';


const Navbar = () => {
  return (
    <div className="Container">
        <wrapper>
          <div className="Left">
            <div className="Logo">Amazon</div>
          </div>
          <div className="Center">Center</div>
          <div className="SearchContainer">
            <Input />
            <SearchIcon style={{color:"gray", fontSize:16}}/>
          </div>
          <div className="Language">EN</div>
          <div className="Right">
            <div className="MenuItem">REGISTER</div>
            <div className="MenuItem">SIGN IN</div>
            <div className="MenuItem">
              <Badge badgeContent={4} color="primary">
                <ShoppingCartOutlinedIcon />
              </Badge>
            </div>
          </div>
        </wrapper>
    </div>
  )
}

export default Navbar
