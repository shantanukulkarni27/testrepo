import * as React from "react"
import {
    Box,
    AppBar,
    Toolbar,
    Typography,
    TextField,
    Link
} from '@mui/material';

const Header = () => {
    return (
        <>
            <Box sx={{ flexGrow: 2, width: '100%' }}>
                <AppBar sx={{ position: 'relative' }}>
                    <Toolbar sx={{ minHeight: 110, display: 'flex', m: 2 }}>
                        <Box sx={{ display: 'flex' }}>
                            <Typography variant="h4" sx={{ ml: 2 }}>App</Typography>
                        </Box>
                        <Box sx={{ ml: 15, height: '50px' }}>
                            <TextField sx={{ background: 'white', width: '450px' }} id="outlined-basic" label="Search" variant="outlined" />
                        </Box>
                        <Box style={{ display: 'flex' }}>
                            {/* <Typography variant="h4" sx={{ml:10}}>Home</Typography> */}
                            <Link sx={{ fontSize: '35px', color: 'white', ml: 10 }} data-testid="home" component="button" variant="body2">Home</Link>
                            <Link sx={{ fontSize: '35px', color: 'white', ml: 10 }} component="button" variant="body2">Profile</Link>
                            <Link sx={{ fontSize: '35px', color: 'white', ml: 10 }}
                                component="button"
                                href="/contact"
                                variant="body2">Contact</Link>
                        </Box>
                    </Toolbar>
                </AppBar>
            </Box>
        </>
    )
}

export default Header