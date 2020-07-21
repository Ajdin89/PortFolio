import React from 'react';
import { makeStyles } from '@material-ui/core';
import { BottomNavigation, BottomNavigationAction } from '@material-ui/core';
import Facebook from '@material-ui/icons/Facebook';
import Instagram from '@material-ui/icons/Instagram';
import LinkedIn from '@material-ui/icons/LinkedIn';

/* CUSTOM CSS STYLES */
const useStyles = makeStyles({
	root: {
		'& .MuiBottomNavigationAction-root': {
			minWidth: 0,
			maxWidth: 250,
		},
		'& .MuiSvgIcon-root': {
			fill: 'tan',
			'&:hover': {
				fill: 'tomato',
				fontSize: '1.8rem',
			},
		},
	},
});

const Footer = () => {
	const classes = useStyles();
	return (
		<div>
			<BottomNavigation width='auto' style={{ background: '#222' }}>
				<BottomNavigationAction
					style={{ padding: 0 }}
					icon={<Facebook />}
					className={classes.root}
					href='https://www.facebook.com/ajdin.kmetas1'
					target='_blank'
				/>
				<BottomNavigationAction
					style={{ padding: 0 }}
					icon={<Instagram />}
					className={classes.root}
					href='https://www.instagram.com/aydiin.k/'
					target='_blank'
				/>
				<BottomNavigationAction
					style={{ padding: 0 }}
					icon={<LinkedIn />}
					className={classes.root}
					href='https://ba.linkedin.com/in/ajdin-kmeta%C5%A1-277417123'
					target='_blank'
				/>
			</BottomNavigation>
		</div>
	);
};

export default Footer;
