import { ThemeProvider } from "@mui/system";
import { Button } from "@mui/material";
import { Container } from "@mui/system";
import { useEffect } from "react";
import theme from "./styles/theme";

function App() {
  useEffect(() => {
    document.title = "SDA Web Store";
  }, []);
  return (
    <ThemeProvider theme={theme}>
      <Container maxWidth="xl" sx={{ background: "#fee" }}>
        <Button variant={"contained"}>Test</Button>
      </Container>
    </ThemeProvider>
  );
}

export default App;
