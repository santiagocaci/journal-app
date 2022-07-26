import PropTypes from 'prop-types';
import { Box, Toolbar } from '@mui/material';
import { NavBar, SideBar } from '../react-components';

const drawerWidth = 240;

export const JournalLayout = ({ children }) => {
  return (
    <Box
      className='animate__animated animate__fadeIn animate__faster'
      sx={{ display: 'flex' }}
    >
      {/* NavBar */}
      <NavBar drawerWidth={drawerWidth} />
      {/* SideBar */}
      <SideBar drawerWidth={drawerWidth} />

      <Box component='main' sx={{ flexGrow: 1, p: 3 }}>
        <Toolbar />
        {children}
      </Box>
    </Box>
  );
};

JournalLayout.propTypes = {
  children: PropTypes.node,
};
