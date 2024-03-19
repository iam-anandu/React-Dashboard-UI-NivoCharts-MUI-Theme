import { Typography, useTheme } from "@mui/material";
import { tokens } from "../theme";
import { MenuItem } from "react-pro-sidebar";
import { Link } from "react-router-dom";

const Item = ({ title, to, icon, selected, setSelected }) => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);

    return (
        <MenuItem
            onClick={() => setSelected(title)}
            component={<Link to={to} />}
            active={selected === title}
            icon={icon}
            style={{
                color: colors.grey[100],
            }}
        >
            <Typography>{title}</Typography>
        </MenuItem>
    );
};

export default Item;
