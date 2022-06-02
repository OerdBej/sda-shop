import { ThemeProvider } from "@mui/system";
import { Button } from "@mui/material";
import { Container } from "@mui/system";
import { useEffect } from "react";
import theme from "./styles/theme";
import Appbar from "./components/appbar";

function App() {
  useEffect(() => {
    document.title = "SDA Web Store";
  }, []);
  return (
    <ThemeProvider theme={theme}>
      <Container maxWidth="xl" sx={{ background: "#fff" }}>
        <Appbar />
        <Button variant={"contained"}>Test</Button>
      </Container>
    </ThemeProvider>
  );
}

export default App;
