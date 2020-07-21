import React from 'react';
import { Typography, Box, Paper, Grid, CardMedia } from '@material-ui/core';
import { makeStyles } from '@material-ui/core';
import html from '../images/logo/html.png';
import css from '../images/logo/css.png';
import js from '../images/logo/js.png';
import react from '../images/logo/react.png';
import node from '../images/logo/node.png';
import express from '../images/logo/express.png';
import mongodb from '../images/logo/mongoDB.png';
import git from '../images/logo/git.png';
import Navbar from './Navbar';

/* CUSTOM CSS STYLING */
const useStyle = makeStyles((theme) => ({
	paper: {
		padding: theme.spacing(3.8),
		textAlign: 'center',
		borderRadius: '50%',
	},
	heading: {
		color: 'tomato',
		fontSize: '2.75rem',
		textAlign: 'center',
		padding: '1.3rem 0',
		fontFamily: 'Play',
	},
	gridItem: {
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
	},
	box: {
		textAlign: 'center',
		padding: '1rem',
	},
	title: {
		color: 'tan',
		textAlign: 'center',
		fontFamily: 'Source Code Pro',
		paddingBottom: '0.6rem',
	},
	media: {
		width: theme.spacing(10),
		height: theme.spacing(10),
	},
}));

const About = () => {
	const classes = useStyle();
	return (
		<>
			<Navbar />
			<Box
				component='div'
				style={{
					height: '100vh',
					width: '100%',
					overflowX: 'hidden',
				}}
			>
				<Typography className={classes.heading}>
					Technology Stack
				</Typography>
				<Grid container spacing={1} style={{ margin: 'auto' }}>
					<Grid item xs={6} md={3} className={classes.gridItem}>
						<Box component='div' className={classes.box}>
							<Typography variant='h5' className={classes.title}>
								HTML5
							</Typography>
							<Paper className={classes.paper} square>
								<CardMedia
									component='img'
									src={html}
									alt='Html'
									className={classes.media}
								/>
							</Paper>
						</Box>
					</Grid>
					<Grid item xs={6} md={3} className={classes.gridItem}>
						<Box component='div' className={classes.box}>
							<Typography variant='h5' className={classes.title}>
								CSS3
							</Typography>
							<Paper className={classes.paper} square>
								<CardMedia
									component='img'
									src={css}
									alt='CSS3'
									className={classes.media}
								/>
							</Paper>
						</Box>
					</Grid>
					<Grid item xs={6} md={3} className={classes.gridItem}>
						<Box component='div' className={classes.box}>
							<Typography variant='h5' className={classes.title}>
								JavaScript
							</Typography>
							<Paper className={classes.paper} square>
								<CardMedia
									component='img'
									src={js}
									alt='JavaScript'
									className={classes.media}
								/>
							</Paper>
						</Box>
					</Grid>
					<Grid item xs={6} md={3} className={classes.gridItem}>
						<Box component='div' className={classes.box}>
							<Typography variant='h5' className={classes.title}>
								React
							</Typography>
							<Paper className={classes.paper} square>
								<CardMedia
									component='img'
									src={react}
									alt='React'
									className={classes.media}
								/>
							</Paper>
						</Box>
					</Grid>
					<Grid item xs={6} md={3} className={classes.gridItem}>
						<Box component='div' className={classes.box}>
							<Typography variant='h5' className={classes.title}>
								Node.js
							</Typography>
							<Paper className={classes.paper} square>
								<CardMedia
									component='img'
									src={node}
									alt='Node'
									className={classes.media}
								/>
							</Paper>
						</Box>
					</Grid>
					<Grid item xs={6} md={3} className={classes.gridItem}>
						<Box component='div' className={classes.box}>
							<Typography variant='h5' className={classes.title}>
								Express
							</Typography>
							<Paper className={classes.paper} square>
								<CardMedia
									component='img'
									src={express}
									alt='Express'
									className={classes.media}
								/>
							</Paper>
						</Box>
					</Grid>
					<Grid item xs={6} md={3} className={classes.gridItem}>
						<Box component='div' className={classes.box}>
							<Typography variant='h5' className={classes.title}>
								MongoDB
							</Typography>
							<Paper className={classes.paper} square>
								<CardMedia
									component='img'
									src={mongodb}
									alt='MongoDB'
									className={classes.media}
								/>
							</Paper>
						</Box>
					</Grid>
					<Grid item xs={6} md={3} className={classes.gridItem}>
						<Box component='div' className={classes.box}>
							<Typography variant='h5' className={classes.title}>
								Git
							</Typography>
							<Paper className={classes.paper} square>
								<CardMedia
									component='img'
									src={git}
									alt='GitHub'
									className={classes.media}
								/>
							</Paper>
						</Box>
					</Grid>
				</Grid>
			</Box>
		</>
	);
};

export default About;
