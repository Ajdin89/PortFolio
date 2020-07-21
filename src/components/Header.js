import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Typography, Avatar, Grid, Box } from '@material-ui/core';
import Typed from 'react-typed';
import photo from '../images/ajdin-photo.jpg';

/* CUSTOM CSS STYLES */
const useStyles = makeStyles((theme) => ({
	avatar: {
		width: theme.spacing(24),
		height: theme.spacing(24),
		margin: theme.spacing(1),
	},
	title: {
		color: 'tomato',
	},
	subtitle: {
		color: 'tan',
		marginBottom: '3rem',
	},
	typedContainer: {
		position: 'absolute',
		top: '50%',
		left: '50%',
		transform: 'translate(-50%, -50%)',
		width: '100vw',
		textAlign: 'center',
		zIndex: 1,
	},
}));

const Header = () => {
	const classes = useStyles();
	return (
		<Box className={classes.typedContainer}>
			<Grid container justify='center'>
				<Avatar className={classes.avatar} src={photo} alt='Ajdin Kmetas' />
			</Grid>
			<Typography className={classes.title} variant='h4'>
				<Typed
					strings={['Ajdin Kmetas']}
					typeSpeed={50}
					style={{ textTransform: 'uppercase', fontFamily: 'Play' }}
				/>
			</Typography>
			<br />
			<Typography className={classes.subtitle} variant='h5'>
				<Typed
					strings={['Web Design', 'Web Development', 'MERN Stack']}
					style={{ fontFamily: 'Source Code Pro' }}
					typeSpeed={100}
					backSpeed={80}
					loop
				/>
			</Typography>
		</Box>
	);
};

export default Header;
