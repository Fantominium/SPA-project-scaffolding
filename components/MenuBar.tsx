'use client'

import React from 'react';
import { Drawer, List, ListItemButton, ListItemText } from '@mui/material';
import Link from 'next/link';

const MenuBar: React.FC<{ open: boolean; toggleMenu: () => void }> = ({ open, toggleMenu }) => {
  const menuItems = [
    { text: 'Home', href: '/' },
    { text: 'Products', href: '/products' },
    { text: 'Bookings', href: '/bookings' },
    { text: 'About Us', href: '/about-us' },
  ];

  return (
    <Drawer anchor="left" open={open} onClose={toggleMenu}>
      <List>
        {menuItems.map(({ text, href }) => (
          <ListItemButton key={text} onClick={toggleMenu}>
            <Link href={href}>
              <ListItemText primary={text} />
            </Link>
          </ListItemButton>
        ))}
      </List>
    </Drawer>
  );
};

export default MenuBar;
