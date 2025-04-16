import React from "react";
import style from "./Button.module.css";
import Typography from "@mui/material/Typography";
const Button = ({ children }) => {
	return (
		<div className={style.button}>
			<Typography sx={{ fontFamily: "Poppins" }}>{children}</Typography>
		</div>
	);
};

export default Button;
