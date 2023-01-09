import { Box, IconButton, Button } from '@mui/material';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import HeaderSearch from './Search';
import HeaderNotifications from './Notifications';

function HeaderButtons() {
  return (
    <Box sx={{ mr: 1 }}>
      <IconButton color="primary">
        <HelpOutlineIcon />
      </IconButton>
      {/* <HeaderSearch /> */}
      <Box sx={{ mx: 0.5 }} component="span">
        <HeaderNotifications />
      </Box>
      <Button variant='contained'>Connect wallet</Button>
    </Box>
  );
}

export default HeaderButtons;
