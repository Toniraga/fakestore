import React from 'react'
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";

import './footerInputs.css';

const useStyles = makeStyles((theme) => ({
	root: {
		"& > *": {
			margin: theme.spacing(1),
			width: '100%'
		},
	},
}));

export default function FooterInputs() {
	const classes = useStyles();

	return (
		<form className={classes.root} noValidate autoComplete="off">
			<TextField id='standard-basic' label='Name' />

			<TextField id="standard-basic" label='E-mail' />

			<TextField id="standard-basic" label='Message' />

			<div className='footer__btn'> <button className='body-button'> SUBMIT </button> </div>
		</form>
	);
}
