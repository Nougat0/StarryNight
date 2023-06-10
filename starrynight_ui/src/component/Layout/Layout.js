import { Box, ThemeProvider, createTheme } from "@material-ui/core";
import Header from "./Header";
import Content from "./Content";

export default function Layout({children}) {
    const theme = createTheme({
        palette: {
            primary: {
                main: "#0A3D67",
            },
        },
    });

    return (
        <ThemeProvider theme={theme}>
                <Box sx={{ display: "flex", flexDirection: "column", height: "100vh" }}>
                   <Header/>
                   <Content children={children} />
                </Box>
        </ThemeProvider>
    );
}