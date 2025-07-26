import { Button, Stack, ButtonGroup } from "@mui/material";
import SendIcon from "@mui/icons-material/Send";

const MuiButton = () => {
  return (
    <>
      <Stack direction={`column`} spacing={8}>
        <Stack direction="row" spacing={2}>
          <Button variant="text">Text Button</Button>
          <Button variant="contained">Contained Button</Button>
          <Button variant="outlined">Contained Button</Button>
        </Stack>
        <Stack direction="row" spacing={2}>
          <Button variant="contained" color="primary">
            Primary
          </Button>
          <Button variant="contained" color="secondary">
            Secondry
          </Button>
          <Button variant="contained" color="error">
            Error
          </Button>
          <Button variant="contained" color="warning">
            Warning
          </Button>
          <Button variant="contained" color="success">
            Success
          </Button>
        </Stack>
        <Stack direction={"row"} spacing={2}>
          <Button variant="contained" size="small">
            Small
          </Button>
          <Button variant="contained" size="medium">
            Medium
          </Button>
          <Button variant="contained" size="large">
            Large
          </Button>
        </Stack>
        <Stack direction={"row"} spacing={2}>
          <Button variant="contained" startIcon={<SendIcon />}>
            Send
          </Button>
          <Button variant="contained" color="success" endIcon={<SendIcon />}>
            Send
          </Button>
          <Button aria-label="send" color="success">
            <SendIcon />
          </Button>
        </Stack>
        <Stack>
          <ButtonGroup variant="contained" color="secondary">
            <Button>Primary</Button>
            <Button>Secondary</Button>
            <Button>Error</Button>
          </ButtonGroup>
        </Stack>
      </Stack>
    </>
  );
};

export default MuiButton;
