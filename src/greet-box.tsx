import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { makeStyles, Theme } from '@material-ui/core/styles';
import { Typography, CssBaseline, AppBar, Toolbar, Container, TextField, Grid, Button, Link } from '@material-ui/core';
import SentimentVerySatisfiedIcon from '@material-ui/icons/SentimentVerySatisfied';
import greetings from './data';

const useStyles = makeStyles((theme: Theme) => ({
    appBarColor: {
        backgroundColor: '#625750',
    },
    icon: {
        marginRight: theme.spacing(2),
    },
    headlineContent: {
        backgroundColor: theme.palette.background.paper,
        padding: theme.spacing(8, 0, 6),
    },
    gridPlaceholder: {
        marginTop: 30,
        marginBottom: 30,
    },
    footer: {
        backgroundColor: theme.palette.background.paper,
        padding: theme.spacing(3),
    },
}));

const datasetNumber = (max: number) => {
    let min: number = 0; 
    return (Math.floor(Math.random() * (+max - +min)) + +min);
}

const GreetBox = () => {
    const classes = useStyles();

    const Copyright = () => {
        return (
            <Typography variant="body2" color="textSecondary" align="center">
              {'Greet Box 2020 / Dirk Mittmann'}
            </Typography>
          );
    }

    const [name, setName] = React.useState("Greet-Box");
    const [greeting, setGreeting] = React.useState("");
    let inputName: any;
    const greetMe = () => {
        if(inputName.value) {
            setName("Hallo " + inputName.value + ",");
        } else {
            setName("Hallo Du,");
        }
        setGreeting(greetings[datasetNumber(greetings.length)]);
    }

    return (
        <React.Fragment>
            <AppBar className={classes.appBarColor} position="relative">
                <Toolbar>
                    <SentimentVerySatisfiedIcon className={classes.icon} />
                    <Typography variant="h6" noWrap>
                        Greet-Box
                    </Typography>
                </Toolbar>
            </AppBar>
            <main>
                <div className={classes.headlineContent}>
                    <Container maxWidth="sm">
                        <Typography component="h2" variant="h3" align="center" color="textPrimary" gutterBottom>
                            {name}
                        </Typography>
                        <Typography variant="h5" align="center" color="textSecondary" gutterBottom>
                            {greeting}
                        </Typography>
                        <Grid container className={classes.gridPlaceholder} spacing={2} justify="center">
                            <TextField id="outlined-basic" label="Dein Name" variant="outlined" inputRef={el => inputName = el} />
                        </Grid>
                        <Grid container className={classes.gridPlaceholder} spacing={2} justify="center">
                            <Button variant="outlined" color="primary" onClick={greetMe}>
                                Los geht's!
                            </Button>
                        </Grid>
                    </Container>
                </div>
            </main>
            <footer className={classes.footer}>
                <Copyright />
            </footer>
        </React.Fragment>
    );
};

ReactDOM.render(
    <React.Fragment>
        <CssBaseline />
        <GreetBox />
    </React.Fragment>,
    document.querySelector('#root')
);