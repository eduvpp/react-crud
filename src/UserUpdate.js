import React, { useState, useEffect } from "react";
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import { useParams } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
    paper: {
        marginTop: theme.spacing(8),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    avatar: {
        margin: theme.spacing(1),
        backgroundColor: theme.palette.secondary.main,
    },
    form: {
        width: '100%', // Fix IE 11 issue.
        marginTop: theme.spacing(3),
    },
    submit: {
        margin: theme.spacing(3, 0, 2),
    },
}));

export default function UserUpdate() {
    const classes = useStyles();

    const { id } = useParams();
    console.log(id)
    useEffect(() => {
        fetch("http://localhost:3000/users/atualizar/" + id)
            .then(res => res.json())
            .then(
                (result) => {
                    setEmail(result.user.email)
                    setName(result.user.name)
                    setUser(result.user.user)
                    setPhone(result.user.phone)
                    setBdage(result.user.bdage)
                    setPass(result.user.pass)

                }
            )
    }, [id])

    const handleSubmit = event => {
        event.preventDefault();
        var data = {
            'email': email,
            'name': name,
            'user': user,
            'phone': phone,
            'bdage': bdage,
            'pass': pass,
        }
        fetch('http://localhost:3000/users/atualizar/:' + id, {
            method: 'PATCH',
            headers: {
                Accept: 'application/form-data',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        })
            .then(res => res.json())
            .then(
                (result) => {
                    alert(result['message'])
                    if (result['status'] === 'ok') {
                        window.location.href = '/';
                    }
                }
            )
    }

    const [email, setEmail] = useState('');
    const [name, setName] = useState('');
    const [user, setUser] = useState('');
    const [phone, setPhone] = useState('');
    const [bdage, setBdage] = useState('');
    const [pass, setPass] = useState('');


    return (
        <Container maxWidth="xs">
            <div className={classes.paper}>
                <Typography component="h1" variant="h5">
                    Usuário
                </Typography>
                <form className={classes.form} onSubmit={handleSubmit}>
                    <Grid container spacing={2}>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                autoComplete="email"
                                name="email"
                                variant="outlined"
                                required
                                fullWidth
                                id="email"
                                label="Digite o email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                autoFocus
                            />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                variant="outlined"
                                required
                                fullWidth
                                id="name"
                                label="name"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                variant="outlined"
                                required
                                fullWidth
                                id="user"
                                label="User"
                                value={user}
                                onChange={(e) => setUser(e.target.value)}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                variant="outlined"
                                required
                                fullWidth
                                id="phone"
                                label="Celular"
                                value={phone}
                                onChange={(e) => setPhone(e.target.value)}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                variant="outlined"
                                required
                                fullWidth
                                id="bdage"
                                label="Idade"
                                value={bdage}
                                onChange={(e) => setBdage(e.target.value)}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                variant="outlined"
                                required
                                fullWidth
                                id="pass"
                                label="Senha"
                                value={pass}
                                onChange={(e) => setPass(e.target.value)}
                            />
                        </Grid>
                    </Grid>
                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        color="primary"
                        className={classes.submit}
                    >
                        Atualizar
                    </Button>
                </form>
            </div>
        </Container>
    );
}