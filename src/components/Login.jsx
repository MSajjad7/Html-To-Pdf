import CssBaseline from "@material-ui/core/CssBaseline";
import {
  Container,
  Card,
  CardActions,
  CardContent,
  Button,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    minWidth: 35 + "vw",
    minHeight: 100 + "vh",
  },
}));

const Login = () => {
  const classes = useStyles();

  return (
    <>
      {/* <CssBaseline/> */}
      <Container maxWidth='sm'>
        <Card className={classes.root}>
          <CardContent></CardContent>
          <CardActions>
          </CardActions>
        </Card>
      </Container>
    </>
  );
};

export default Login;
