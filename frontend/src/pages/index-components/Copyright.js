import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import * as React from "react";
import {HomePage, ProjectName} from "../const/constants";

export default function Copyright(props) {
    return (
        <Typography variant="body2" color="text.secondary" align="center" {...props}>
            {'Copyright © '}
            <Link href={HomePage} color="primary">
                {ProjectName}
            </Link>{' '}
            2024
            {'.'}
        </Typography>
    );
}
