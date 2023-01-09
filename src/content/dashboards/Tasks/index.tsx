import { ChangeEvent, useState } from 'react';
import { makeStyles } from "@mui/styles";
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';
import { Icon } from '@iconify/react'
import PageHeader from './PageHeader';
import Footer from 'src/components/Footer';
import { Grid, Typography, Divider, Container, Card, Box, useTheme, Button, styled, Table, TableHead, TableBody, TableRow, TableCell, Stack, Link } from '@mui/material';
import PageTitleWrapper from 'src/components/PageTitleWrapper';

const TabsContainerWrapper = styled(Box)(
  ({ theme }) => `
      padding: 0 ${theme.spacing(2)};
      position: relative;
      bottom: -1px;

      .MuiTabs-root {
        height: 44px;
        min-height: 44px;
      }

      .MuiTabs-scrollableX {
        overflow-x: auto !important;
      }

      .MuiTabs-indicator {
          min-height: 4px;
          height: 4px;
          box-shadow: none;
          bottom: -4px;
          background: none;
          border: 0;

          &:after {
            position: absolute;
            left: 50%;
            width: 28px;
            content: ' ';
            margin-left: -14px;
            background: ${theme.colors.primary.main};
            border-radius: inherit;
            height: 100%;
          }
      }

      .MuiTab-root {
          &.MuiButtonBase-root {
              height: 44px;
              min-height: 44px;
              background: ${theme.colors.alpha.white[50]};
              border: 1px solid ${theme.colors.alpha.black[10]};
              border-bottom: 0;
              position: relative;
              margin-right: ${theme.spacing(1)};
              font-size: ${theme.typography.pxToRem(14)};
              color: ${theme.colors.alpha.black[80]};
              border-bottom-left-radius: 0;
              border-bottom-right-radius: 0;

              .MuiTouchRipple-root {
                opacity: .1;
              }

              &:after {
                position: absolute;
                left: 0;
                right: 0;
                width: 100%;
                bottom: 0;
                height: 1px;
                content: '';
                background: ${theme.colors.alpha.black[10]};
              }

              &:hover {
                color: ${theme.colors.alpha.black[100]};
              }
          }

          &.Mui-selected {
              color: ${theme.colors.alpha.black[100]};
              background: ${theme.colors.alpha.white[100]};
              border-bottom-color: ${theme.colors.alpha.white[100]};

              &:after {
                height: 0;
              }
          }
      }
  `
);
const CardStyled = styled(Card)(({ theme }) => ({
  background: 'url("/static/promotion-card-bg.png")',
  backgroundColor: 'unset',
  cursor: 'pointer',
  '&:hover': {
    backgroundColor: theme.palette.background.paper
  }
}))
const TableCellStyled = styled(TableCell)(({ theme }) => ({
  textTransform: 'unset',
  color: theme.palette.text.disabled,
  cursor: 'pointer',
  '&:hover': {
    color: theme.colors.alpha.trueWhite[100]
  }
}))

const useStyles = makeStyles({
  table: {
    "& .MuiTableCell-root": {
      borderRight: "1px solid rgba(203, 204, 210, 0.1)"
    }
  }
});

function DashboardTasks() {
  const theme = useTheme();

  const [currentTab, setCurrentTab] = useState<string>('analytics');

  const tabs = [
    { value: 'analytics', label: 'Analytics Overview' },
    { value: 'taskSearch', label: 'Task Search' }
  ];

  const handleTabsChange = (_event: ChangeEvent<{}>, value: string): void => {
    setCurrentTab(value);
  };
  const classes = useStyles();

  return (
    <>
      <Box>
        <Table className={classes.table}>
          <TableBody >
            <TableRow>
              <TableCell colSpan={2} align="left" sx={{width: '30%'}}>
                <Typography variant='body2' color='text.secondary' sx={{pb: 1}}>Portfolio Value</Typography>
                <Typography variant='h3' sx={{ color: (theme)=>theme.colors.alpha.trueWhite[100] }}>$0.00</Typography>
                <Typography variant='body2' component='div' color='text.secondary' display='flex'>
                  <Typography variant='body2' color='text.secondary' sx={{display: 'inline-flex', color: 'success.main'}}>
                    <ArrowDropUpIcon fontSize='small'/>
                    $0.00 (0.00%)
                  </Typography>&nbsp;
                  Past Week
                </Typography>
              </TableCell>
              <TableCell rowSpan={3} sx={{width: '100%', background: 'url("/static/chart-background.png")', textAlign: 'center'}}>
                <Box>
                  <Card sx={{ width: 268, m: 'auto', p: 2 }}>
                    <Typography variant='body2' mb={1}>Connect your Ethereum wallet to<br/> deposit funds & start trading.</Typography>
                    <Button variant='contained'>Connect wallet</Button>
                  </Card>
                </Box>
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell align="left">
                <Box>
                  <Typography variant='body2' color='text.secondary'>Margin Usage</Typography>
                  -
                </Box>
              </TableCell>
              <TableCell align="left">
                <Box>
                  <Typography variant='body2' color='text.secondary'>Free Collateral</Typography>
                  -
                </Box>
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell align="left">
                <Box>
                  <Typography variant='body2' color='text.secondary'>Leverage</Typography>
                  -
                </Box>
              </TableCell>
              <TableCell align="left">
                <Box>
                  <Typography variant='body2' color='text.secondary'>Buying Power</Typography>
                  -
                </Box>
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
        {/* <PageHeader /> */}
        <Grid container sx={{mt: 3}} spacing={3} px={2}>
          <Grid item xs={4}>
            <CardStyled sx={{ m: 'auto', p: 2 }}>
              <Stack spacing={1}>
                <Typography variant='h4' fontSize='1.3rem'>Stop market orders</Typography>
                <Typography variant='body2' color='text.secondary'>Stop market and take profit market orders are here! Quickly and easily set triggers to limit your losses and lock in profits.</Typography>
                <Stack direction='row'>
                  <Typography variant='body2' color='info.main' flexGrow={1} display='flex'>
                    Trade <ArrowForwardIcon fontSize='small'/>
                  </Typography>
                  <Link 
                    href='#'
                    target="_blank"
                    color="text.secondary"
                    sx={{display: 'flex', alignItems: 'center'}}
                  >
                    Learn more <Icon icon="ci:external-link"/>
                  </Link>
                </Stack>
              </Stack>
            </CardStyled>
          </Grid>
          <Grid item xs={4}>
            <CardStyled sx={{ m: 'auto', p: 2 }}>
              <Stack spacing={1}>
                <Typography variant='h4' fontSize='1.3rem'>Stop market orders</Typography>
                <Typography variant='body2' color='text.secondary'>Stop market and take profit market orders are here! Quickly and easily set triggers to limit your losses and lock in profits.</Typography>
                <Stack direction='row'>
                  <Typography variant='body2' color='info.main' flexGrow={1} display='flex'>
                    Trade <ArrowForwardIcon fontSize='small'/>
                  </Typography>
                  <Link 
                    href='#'
                    target="_blank"
                    color="text.secondary"
                    sx={{display: 'flex', alignItems: 'center'}}
                  >
                    Learn more <Icon icon="ci:external-link"/>
                  </Link>
                </Stack>
              </Stack>
            </CardStyled>
          </Grid>
          <Grid item xs={4}>
            <CardStyled sx={{ m: 'auto', p: 2 }}>
              <Stack spacing={1}>
                <Typography variant='h4' fontSize='1.3rem'>Trading leagues</Typography>
                <Typography variant='body2' color='text.secondary'>
                  Trading leagues are now live! Climb the rankings and earn your share of the 
                  <Typography variant='subtitle2'>$100K weekly prize pool</Typography>
                </Typography>
                <Stack direction='row'>
                  <Typography variant='body2' color='info.main' flexGrow={1} display='flex'>
                    Leagues <ArrowForwardIcon fontSize='small'/>
                  </Typography>
                  <Link 
                    href='#'
                    target="_blank"
                    color="text.secondary"
                    sx={{display: 'flex', alignItems: 'center'}}
                  >
                    Learn more <Icon icon="ci:external-link"/>
                  </Link>
                </Stack>
              </Stack>
            </CardStyled>
          </Grid>
        </Grid>
        <Table sx={{borderTop: '1px solid rgba(203, 204, 210, 0.1)', my: 2}}>
          <TableHead>
            <TableRow>
              <TableCellStyled>Market</TableCellStyled>
              <TableCellStyled>Index Price</TableCellStyled>
              <TableCellStyled>24h Change</TableCellStyled>
              <TableCellStyled>1h Funding</TableCellStyled>
              <TableCellStyled>Open Interest</TableCellStyled>
              <TableCellStyled>24h Volume</TableCellStyled>
              <TableCellStyled>24h Trades</TableCellStyled>
            </TableRow>
          </TableHead>
          <TableBody>
            {
              Array(50).fill(0).map((item, _i)=>(
                <TableRow hover key={_i}>
                  <TableCell>
                    <Stack direction='row'>
                      <Box component='img' src='https://trade.dydx.exchange/currencies/eth.svg' sx={{ width: '20px', mr: 1 }}/>
                      <Stack>
                        <Typography variant="caption" color='text.primary'>
                          Ethereum
                        </Typography>
                        <Typography variant="caption">
                          ETH-USD
                        </Typography>
                      </Stack>
                    </Stack>
                  </TableCell>
                  <TableCell>
                    <Typography variant="caption" color='text.primary'>
                      $1,102.3
                    </Typography>
                  </TableCell>
                  <TableCell>
                    <Stack>
                      <Typography variant="caption" color='success.main'>
                        <ArrowDropUpIcon fontSize='small'/> 3.94%
                      </Typography>
                      <Typography variant="caption" pl='5px'>
                        $42.0
                      </Typography>
                    </Stack>
                  </TableCell>
                  <TableCell>
                    <Typography variant="caption" color='error.main'>
                      -0.000931%
                    </Typography>
                  </TableCell>
                  <TableCell>
                    <Stack>
                      <Typography variant="caption" component='div' color='text.primary'>
                        79,739.89 <Typography variant="caption" component='div' color='text.primary' sx={{backgroundColor: (theme)=>theme.palette.background.paper, display: 'inline', borderRadius: '2px', p: '4px'}}>ETH</Typography>
                      </Typography>
                      <Typography variant="caption">
                        $87,885,676.9
                      </Typography>
                    </Stack>
                  </TableCell>
                  <TableCell>
                    $186,068,240
                  </TableCell>
                  <TableCell>
                    31,656
                  </TableCell>
                </TableRow>
              ))
            }
          </TableBody>
        </Table>
      </Box>
    </>
  );
}

export default DashboardTasks;
