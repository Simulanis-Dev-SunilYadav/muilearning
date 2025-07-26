import { ThemeProvider, createTheme, responsiveFontSizes } from '@mui/material/styles';
import Typography from '@mui/material/Typography';

const TypographyComp = () => {
    // Create theme
    let theme = createTheme();
    theme = responsiveFontSizes(theme);
    return (
        <>
            <ThemeProvider theme={theme}>
                <Typography variant="h1" >
                    Responsive Heading 1
                </Typography>
                <Typography variant="h2">
                    Responsive Heading 2
                </Typography>
                <Typography variant="h3">
                    Responsive Heading 3
                </Typography>
                <Typography variant="h4" component='h1' gutterBottom>
                    Responsive Heading 4
                </Typography>
                <Typography variant="h5">
                    Responsive Heading 5
                </Typography>
                <Typography variant="h6">
                    Responsive Heading 6
                </Typography>
                <Typography variant="subtitle1">
                    Responsive Subtitle 1
                </Typography>
                <Typography variant="subtitle2">
                    Responsive Subtitle 2
                </Typography>
                <Typography variant="body1" gutterBottom>
                    Responsive Body 1
                </Typography>
                <Typography variant="body2">
                    Responsive Body 2 <br />
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vero, laborum at sit exercitationem hic minima rerum illum veniam quisquam incidunt maiores quasi fugit similique ad reprehenderit eos iste magni eveniet?
                </Typography>
            </ThemeProvider>
        </>
    )
}

export default TypographyComp