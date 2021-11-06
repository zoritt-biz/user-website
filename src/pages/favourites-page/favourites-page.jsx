import React, {useState} from 'react';
import Favourites from '../../components/favourites/favourites';
import Footer from '../../components/footer/footer';
import NavBar from '../../components/navbar/navBar';

const FavouritesPage = () => {
  const [show, setShow] = useState(false);

  const handleNavbar = () => {
    setShow(!show);
  };

  const hideNavbar = () => {
    setShow(false);
  };
  return (
    <div>
      <NavBar show={show} handleNavbar={handleNavbar}/>
      <div onClick={hideNavbar}>
        <Favourites/>
      </div>
      <Footer/>
    </div>
  );
};

export default FavouritesPage;
