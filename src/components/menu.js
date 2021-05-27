import React from "react";
import Typography from '@material-ui/core/Typography'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import IconButton from '@material-ui/core/IconButton'
import MenuIcon from '@material-ui/icons/Menu'
import Button from '@material-ui/core/Button'


const Menum = () => {
    return (
        <AppBar color="secondary">
            <Toolbar>
                <IconButton>
                    <MenuIcon />
                </IconButton>
                <Typography variant="h6">Melih Güven</Typography>
                <Button>MENU</Button>
            </Toolbar>
        </AppBar>
    );
}

export default Menum








