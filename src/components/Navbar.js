import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import MobilMenuSlider from '@material-ui/core/Drawer';
import {
	AppBar,
	Toolbar,
	ListItem,
	IconButton,
	ListItemText,
	ListItemIcon,
	Avatar,
	Divider,
	List,
	Typography,
	Box,
} from '@material-ui/core';
import { AssignmentInd, Home, Apps, ContactMail } from '@material-ui/icons';
import MenuIcon from '@material-ui/icons/Menu';
import photo from '../images/ajdin-photo.jpg'
import Footer from '../components/Footer'

/* CUSTOM CSS STYLES */
const useStyles = makeStyles((theme) => ({
	menuSliderContainer: {
		width: 250,
		background: '#511',
		height: '100%',
	},
	avatar: {
		display: 'block',
		margin: '2rem auto',
		width: theme.spacing(16),
		height: theme.spacing(16),
	},
	colorItem: {
		color: 'tan',
	},
	menuButton: {
		marginRight: theme.spacing(2),
		color: 'tomato',
	},
}));

/* SIDEBAR LIST */
const menuItems = [
	{
		listIcon: <Home />,
		listText: 'Home',
		listPath: '/',
	},
	{
		listIcon: <AssignmentInd />,
		listText: 'About',
		listPath: '/about',
	},
	{
		listIcon: <Apps />,
		listText: 'Portfolio',
		listPath: '/portfolio',
	},
	{
		listIcon: <ContactMail />,
		listText: 'Contact',
		listPath: '/contact',
	},
];

const Navbar = () => {
	const [state, setState] = useState({
		right: false,
	});

	/* Helper method */
	const toggleslider = (slider, open) => () => {
		setState({ ...state, [slider]: open });
	};

	const classes = useStyles();

/* SIDEBAR */
	const sideList = (slider) => (
		<Box className={classes.menuSliderContainer} component='div'>
			<Avatar className={classes.avatar} src={photo} alt='Ajdin Kmetas' />
			<Divider />
			<List>
				{menuItems.map((item, key) => (
					<ListItem button key={key} component={Link} to={item.listPath}>
						<ListItemIcon className={classes.colorItem}>
							{item.listIcon}
						</ListItemIcon>
						<ListItemText
							className={classes.colorItem}
							primary={item.listText}
						/>
					</ListItem>
				))}
			</List>
		</Box>
	);

	return (
		<>
			<Box component='nav'>
				<AppBar position='static' style={{ background: '#222' }}>
					<Toolbar>
						<IconButton
							onClick={toggleslider('right', true)}
							edge='start'
							className={classes.menuButton}
							aria-label='menu'
						>
							<MenuIcon />
						</IconButton>
						<Typography
							variant='h5'
							style={{ color: 'tan', fontSize: 35, fontFamily: 'Monoton' }}
						>
							AK
						</Typography>
						<MobilMenuSlider
							anchor='right'
							open={state.right}
							onClose={toggleslider('right', false)}
						>
							{sideList('right')}
						<Footer/>
						</MobilMenuSlider>
					</Toolbar>
				</AppBar>
			</Box>
		</>
	);
};

export default Navbar;
