import { Icon } from '@iconify/react'
import { Box, Button,  alpha, Stack, lighten, Divider, IconButton, Typography, styled, useTheme } from '@mui/material';
import MenuTwoToneIcon from '@mui/icons-material/MenuTwoTone';
import { SidebarContext } from 'src/contexts/SidebarContext';
import CloseTwoToneIcon from '@mui/icons-material/CloseTwoTone';

const FooterWrapper = styled(Box)(
  ({ theme }) => `
        height: ${theme.footer.height};
        color: ${theme.footer.textColor};
        padding: ${theme.spacing(.5, 0)};
        right: 0;
        bottom: 0;
        z-index: 10;
        background-color: ${alpha(theme.footer.background, 0.95)};
        backdrop-filter: blur(3px);
        position: fixed;
        justify-content: space-between;
        width: 100%;
`
);

function Footer() {
  const theme = useTheme();

  return (
    <FooterWrapper
      display="flex"
      alignItems="center"
    >
      <Stack direction='row' sx={{height: '27px'}}>
        <Stack direction='row' sx={{
          pl: 1,
          ml: '1px',
          [theme.breakpoints.up('lg')]: {
            width: `${theme.sidebar.width}`
          }
        }}>
          <Button size='small' component='a' href='https://status.dydx.exchange/' target='_blank' sx={{
            '&:hover': {
              '& .MuiTypography-root': {
                color: (theme)=>theme.colors.alpha.trueWhite[100]
              }
            }
          }}>
            <Box sx={{ width: '6px', height: '6px', background: (theme)=>theme.colors.success.main, borderRadius: '50%'}}/>&nbsp;
            <Typography color='text.secondary' display='flex' alignItems='center'>
              Operational&nbsp;
              <Icon icon="ci:external-link"/>
            </Typography>
          </Button>
          <Box flexGrow={1}/>
          <Divider orientation="vertical"/>
        </Stack>
      </Stack>
    </FooterWrapper>
  );
}

export default Footer;
