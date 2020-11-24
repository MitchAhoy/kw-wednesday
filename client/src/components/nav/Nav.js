import React from 'react'
import { AppBar, Toolbar, Button, Typography, makeStyles } from '@material-ui/core'
import SearchIcon from '@material-ui/icons/Search'

const useStyles = makeStyles((theme) => ({
    root: {
        boxShadow: theme.customShadow.xl
    },
    logo: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
    }
}))

const Nav = () => {
    const classes = useStyles()

    return (
        <AppBar
            position='fixed'
            className={classes.root}
        >
            <Toolbar>
            <div className={classes.logo}>
                <SearchIcon />
                <Typography>
                    KEYWORD WEDNESDAY
                </Typography>
            </div>

            </Toolbar>
        </AppBar>
    )
}

export default Nav