import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import GitHubIcon from '@material-ui/icons/GitHub';
import {
	Box,
	Typography,
	Button,
	Grid,
	Card,
	CardActionArea,
	CardActions,
	CardContent,
	CardMedia,
} from '@material-ui/core';
import form from '../images/projects/form.png';
import youtube from '../images/projects/youtube.png';
import twitch from '../images/projects/twitch.png';
import Navbar from './Navbar';

/* CUSTOM CSS STYLING */
const useStyles = makeStyles({
	root: {
		maxWidth: 345,
		background: '#263238',
	},
	heading: {
		color: 'tomato',
		textAlign: 'center',
		fontSize: '2.75rem',
		fontFamily: 'Play',
		padding: '1.6rem 0',
	},
	cardMedia: {
		opacity: '0.45',
		'&:hover': {
			opacity: '0.9',
			transform: 'scale(0.99)',
		},
	},
	cardHeader: {
		fontFamily: 'Cairo',
		color: 'tomato',
	},
	cardText: {
		color: 'tan',
		fontFamily: 'Play',
	},
});

const Projects = () => {
	const classes = useStyles();
	return (
		<>
			<Navbar />
			<Box component='div' style={{ height: '100vh', overflow: 'auto' }}>
				<Typography className={classes.heading}>
					Highlighted Projects
				</Typography>
				<Grid
					container
					spacing={3}
					align='center'
					style={{ padding: '1.5rem' }}
				>
					<Grid item xs={12} sm={4}>
						<Card className={classes.root}>
							<CardActionArea>
								<CardMedia
									component='img'
									alt='Form Validation'
									height='160'
									image={form}
									title='Form Validation'
									className={classes.cardMedia}
								/>
								<CardContent>
									<Typography
										gutterBottom
										variant='h5'
										component='h2'
										className={classes.cardHeader}
									>
										Form Validation
									</Typography>
									<Typography
										component='p'
										variant='body2'
										className={classes.cardText}
									>
										Simple and beautiful one-page form validation where you fill
										the input field based on a condition. HTML5 and CSS3 are
										used for the layout. All functionality and logic is written
										in Vanilla JavaScript, without any framework just using
										JavaScript DOM manipulations.
									</Typography>
								</CardContent>
							</CardActionArea>
							<CardActions>
								<Button
									variant='contained'
									size='small'
									endIcon={<GitHubIcon />}
									href='https://github.com/Ajdin89/Form-Validation'
									target='_blank'
									style={{ marginLeft: '0.9rem' }}
								>
									View more
								</Button>
							</CardActions>
						</Card>
					</Grid>

					<Grid item xs={12} sm={4}>
						<Card className={classes.root}>
							<CardActionArea>
								<CardMedia
									component='img'
									alt='Twitch clone'
									height='160'
									image={twitch}
									title='Twitch clone'
									className={classes.cardMedia}
								/>
								<CardContent>
									<Typography
										gutterBottom
										variant='h5'
										component='h2'
										className={classes.cardHeader}
									>
										Twitch Clone
									</Typography>
									<Typography
										component='p'
										variant='body2'
										className={classes.cardText}
									>
										RESTful Web application created using React and Redux based
										on CRUD operations. You have option registration with Google
										account. After registration, the user can create a stream
										and information about it. The user can also change them as
										well as delete them.
									</Typography>
								</CardContent>
							</CardActionArea>
							<CardActions>
								<Button
									variant='contained'
									size='small'
									endIcon={<GitHubIcon />}
									href='https://github.com/Ajdin89/Twitch-Clone'
									target='_blank'
									style={{ marginLeft: '0.9rem' }}
								>
									View more
								</Button>
							</CardActions>
						</Card>
					</Grid>

					<Grid item xs={12} sm={4}>
						<Card className={classes.root}>
							<CardActionArea>
								<CardMedia
									component='img'
									alt='YouTube clone'
									height='160'
									image={youtube}
									title='YouTube clone'
									className={classes.cardMedia}
								/>
								<CardContent>
									<Typography
										gutterBottom
										variant='h5'
										component='h2'
										className={classes.cardHeader}
									>
										YouTube Clone
									</Typography>
									<Typography
										component='p'
										variant='body2'
										className={classes.cardText}
									>
										A one-page Website made in React. For fetching data is used
										YouTube API key. It is divided into several sections. At the
										top is a search bar input field. In the center is the video
										currently playing and information about it. On the side is
										the next video playing list.
									</Typography>
								</CardContent>
							</CardActionArea>
							<CardActions>
								<Button
									variant='contained'
									size='small'
									endIcon={<GitHubIcon />}
									href='https://github.com/Ajdin89/YouTube-Clone'
									target='_blank'
									style={{ marginLeft: '0.9rem' }}
								>
									View more
								</Button>
							</CardActions>
						</Card>
					</Grid>
				</Grid>
			</Box>
		</>
	);
};

export default Projects;
