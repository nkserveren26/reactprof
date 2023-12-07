import { Box } from "@mui/material"
import BusinessIcon from "@mui/icons-material/Business"
import { Typography } from "@mui/material";

export const CompanyItem = ({companyName}: {companyName: string}) => {
    return (
        <>
            <Box display="flex">
                <BusinessIcon fontSize="large" />
                <Typography variant="h6" paddingLeft={1}>{companyName}</Typography>
            </Box>
        </>
    )
}