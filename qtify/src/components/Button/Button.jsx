import React from "react";
import style from "./Button.module.css";
import Typography from "@mui/material/Typography";
const Button = ({ children }) => {
	return (
		<button className={style.button}>
			<Typography sx={{ fontFamily: "Poppins" }}>{children}</Typography>
		</button>
	);
};

export default Button;
