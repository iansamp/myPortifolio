import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import styles from "./Portfolio.module.css";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { Title } from "./styled/Title.style";

export default function Portfolio() {
  const darkTheme = createTheme({
    palette: {
      mode: "dark",
    },
  });

  return (
    <div id="Portfolio" className={styles.portfolio}>
      <Title>Portfólio</Title>
      <div className={styles.components}>
        <ThemeProvider theme={darkTheme}>
          <Card sx={{ maxWidth: 325 }}>
            <CardMedia
              component="img"
              alt="imagem"
              height="170"
              image="../public/img/gerenciador.png"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Costs
              </Typography>
              <Typography variant="body2" color="text.secondary">
                O projeto Gerenciador de Projetos é uma aplicação web que visa
                facilitar a organização, acompanhamento e gerenciamento de
                projetos.
              </Typography>
            </CardContent>
            <CardActions>
              <a
                className={styles.a}
                href="https://github.com/iansamp/GerenciadorProjetos"
                target="_blank"
              >
                GitHub
              </a>
              <a className={styles.a} href="" target="_blank">
                Site
              </a>
            </CardActions>
          </Card>
        </ThemeProvider>

        {/* ------------------------------------------------------------------------- */}

        <ThemeProvider theme={darkTheme}>
          <Card sx={{ maxWidth: 325 }}>
            <CardMedia component="img" alt="imagem" height="140" image="" />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Lizard
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Lizards are a widespread group of squamate reptiles, with over
                6,000 species, ranging across all continents except Antarctica
              </Typography>
            </CardContent>
            <CardActions>
              <a className={styles.a} href="" target="_blank">
                GitHub
              </a>
              <a className={styles.a} href="" target="_blank">
                Site
              </a>
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
                Lizards are a widespread group of squamate reptiles, with over
                6,000 species, ranging across all continents except Antarctica
              </Typography>
            </CardContent>
            <CardActions>
              <a className={styles.a} href="" target="_blank">
                GitHub
              </a>
              <a className={styles.a} href="" target="_blank">
                Site
              </a>
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
                Lizards are a widespread group of squamate reptiles, with over
                6,000 species, ranging across all continents except Antarctica
              </Typography>
            </CardContent>
            <CardActions>
              <a className={styles.a} href="" target="_blank">
                GitHub
              </a>
              <a className={styles.a} href="" target="_blank">
                Site
              </a>
            </CardActions>
          </Card>
        </ThemeProvider>
      </div>
    </div>
  );
}
