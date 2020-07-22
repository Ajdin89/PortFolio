import React from 'react';
import { makeStyles, withStyles } from '@material-ui/styles';
import { Typography, TextField, Button, Grid, Box } from '@material-ui/core';
import SendIcon from '@material-ui/icons/Send';
import Navbar from './Navbar';

/* CUSTOM CSS STYLING */
const InputField = withStyles({
	root: {
		'& label.Mui-focused': {
			color: 'tomato',
		},
		'& label': {
			color: 'tan',
		},
		'& .MuiOutlinedInput-root': {
			'& fieldset': {
				borderColor: 'tan',
			},
			'&:hover fieldset': {
				borderColor: 'tan',
			},
			'&.Mui-focused fieldset': {
				borderColor: 'tan',
			},
		},
	},
})(TextField);

const useStyles = makeStyles((theme) => ({
	form: {
		top: '50%',
		left: '50%',
		transform: 'translate(-50%, -50%)',
		position: 'absolute',
	},
	button: {
		marginTop: '1rem',
		color: 'tomato',
		borderColor: 'tomato',
	},
}));

const Contact = () => {
	const classes = useStyles();
	return (
		<Box component='div'>
			<Navbar />
			<Grid container justify='center'>
				<Box component='form' className={classes.form}>
					<Typography
						variant0='h5'
						style={{
							color: 'tomato',
							textAlign: 'center',
							textTransform: 'upperCase',
						}}
					>
						Hire / Contact me
					</Typography>
					<InputField
						fullWidth={true}
						label='Username'
						variant='outlined'
						inputProps={{ style: { color: '#fff' } }}
						margin='dense'
						size='medium'
					/>
					<InputField
						fullWidth={true}
						label='E-mail'
						variant='outlined'
						inputProps={{ style: { color: '#fff' } }}
						margin='dense'
						size='medium'
					/>
					<InputField
						fullWidth={true}
						label='Company Name'
						variant='outlined'
						inputProps={{ style: { color: '#fff' } }}
						margin='dense'
						size='medium'
					/>
					<InputField 
						id="outlined-textarea"
					fullWidth={true}
						label="Message"
						multiline
						rows={5}
						inputProps={{ style: { color: '#fff' } }}
						variant="outlined"
						margin="dense"
					>
					</InputField>
					<Button
						className={classes.button}
						variant='outlined'
						fullWidth={true}
						endIcon={<SendIcon />}
					>
						Send
					</Button>
				</Box>
			</Grid>
		</Box>
	);
};

export default Contact;
