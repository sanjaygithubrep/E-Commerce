import React from 'react';

const Navbar = (props) => {
  console.log('props', props);
  return (
    <div style={styles.nav}>
      <div style={styles.cartIconContainer}>
        <img src="https://cdn-icons-png.flaticon.com/512/833/833314.png" style={styles.cartIcon} />
        <span style={styles.cartCount}>{props.count}</span>
      </div>
    </div>
  );
}

const styles = {
  nav: {
    height: 70,
    background:  'red',
    display: 'flex',
    justifyContent: 'flex-end',
    alignItems: 'center'
  },
  cartIcon: {
    height: 32,
    marginRight: 20
  },
  cartIconContainer: {
    position: 'relative'
  },
  cartCount:  {
    background: 'yellow',
    borderRadius: '50%',
    padding:  '4px 8px',
    position: 'absolute',
    right: 0,
    top: -9
  }
};

export default Navbar;