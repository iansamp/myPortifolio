import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import styles from './Portfolio.module.css'
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { Title } from './styled/Title.style'


export default function Portfolio() {

  const darkTheme = createTheme({
    palette: {
      mode: 'dark',
    },
  })

  return (
    <div id='Portfolio' className={styles.portfolio}>
        <Title>Portfólio</Title>
      <div className={styles.components}>
        <ThemeProvider theme={darkTheme}>
          <Card sx={{ maxWidth: 325 }}>
            <CardMedia
              component="img"
              alt="imagem"
              height="140"
              image="/static/images/cards/contemplative-reptile.jpg"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Lizard
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Lizards are a widespread group of squamate reptiles, with over 6,000
                species, ranging across all continents except Antarctica
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="small">Site</Button>
              <Button size="small">GitHub</Button>
            </CardActions>
          </Card>
        </ThemeProvider>

        {/* ------------------------------------------------------------------------- */}

        <ThemeProvider theme={darkTheme}>
          <Card sx={{ maxWidth: 325 }}>
            <CardMedia
              component="img"
              alt="imagem"
              height="140"
              image="/static/images/cards/contemplative-reptile.jpg"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Lizard
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Lizards are a widespread group of squamate reptiles, with over 6,000
                species, ranging across all continents except Antarctica
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="small">Site</Button>
              <Button size="small">GitHub</Button>
            </CardActions>
          </Card>
        </ThemeProvider>

        {/* ------------------------------------------------------------------------- */}

        <ThemeProvider theme={darkTheme}>
          <Card sx={{ maxWidth: 325 }}>
            <CardMedia
              component="img"
              alt="imagem"
              height="140"
              image="/static/images/cards/contemplative-reptile.jpg"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Lizard
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Lizards are a widespread group of squamate reptiles, with over 6,000
                species, ranging across all continents except Antarctica
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="small">Site</Button>
              <Button size="small">GitHub</Button>
            </CardActions>
          </Card>
        </ThemeProvider>

        {/* ------------------------------------------------------------------------- */}

        <ThemeProvider theme={darkTheme}>
          <Card sx={{ maxWidth: 325 }}>
            <CardMedia
              component="img"
              alt="imagem"
              height="140"
              image="/static/images/cards/contemplative-reptile.jpg"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Lizard
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Lizards are a widespread group of squamate reptiles, with over 6,000
                species, ranging across all continents except Antarctica
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="small">Site</Button>
              <Button size="small">GitHub</Button>
            </CardActions>
          </Card>
        </ThemeProvider>

      </div>
    </div>
  );
}