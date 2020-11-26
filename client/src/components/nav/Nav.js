import React, { useContext } from 'react'
import { UserContext } from '../../context/user.context'
import { AppBar, Toolbar, Button, Typography, makeStyles, Avatar, Container, Link } from '@material-ui/core'
import SearchIcon from '@material-ui/icons/Search'

const useStyles = makeStyles((theme) => ({
    root: {
        boxShadow: theme.customShadow.xl,
    },
    toolbar: {
        display: 'flex',
        justifyContent: 'space-between'
    },
    logo: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
    }
}))

const Nav = () => {
    const classes = useStyles()
    const { user } = useContext(UserContext)
    console.log(user)

    return (
        <AppBar
            position='fixed'
            className={classes.root}
        >
            <Container>
            <Toolbar className={classes.toolbar}>
            <div className={classes.logo}>
                <SearchIcon />
                <Typography>
                    KEYWORD WEDNESDAY
                </Typography>
            </div>
            {user.length > 0 ? <Avatar className={classes.avatar} alt={user.firstName} src={user.profileImage} /> : <Link><Button color='inherit'>Login</Button></Link>}
            
            </Toolbar>
            </Container>
        </AppBar>
    )
}

export default Nav