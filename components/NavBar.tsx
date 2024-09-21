'use client'

import React, { useState } from 'react';
import Link from 'next/link';
import { AppBar, Toolbar, IconButton, Switch, Typography } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import { useTheme } from './ThemeProvider';
import MenuBar from '@/components/MenuBar';

const NavBar: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const { darkMode, toggleTheme } = useTheme();

  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <>
      <AppBar position="sticky" className="bg-primary-500 dark:bg-primary-700">
        <Toolbar className="flex justify-between">
          <IconButton
            edge="start"
            color="inherit"
            onClick={toggleMenu}
            aria-label={menuOpen ? 'Close Menu' : 'Open Menu'}
          >
            {menuOpen ? <CloseIcon /> : <MenuIcon />}
          </IconButton>
          <Typography variant="h6" className="cursor-pointer">
            <Link href="/">Site Title</Link>
          </Typography>
          <Switch checked={darkMode} onChange={toggleTheme} aria-label="Toggle Dark Mode" />
        </Toolbar>
      </AppBar>
      <MenuBar open={menuOpen} toggleMenu={toggleMenu} />
    </>
  );
};

export default NavBar;
