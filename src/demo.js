import React from "react";
import {
  ThemeProvider,
  createMuiTheme,
  makeStyles
} from "@material-ui/core/styles";
import { withStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import {
  Typography,
  Button,
  Switch,
  Box,
  FormControl,
  InputLabel,
  IconButton,
  Select,
  MenuItem,
  Chip,
  TextField,
  Card,
  CardMedia,
  CardContent,
  CardActions,
  CardHeader,
  Collapse,
  Avatar
} from "@material-ui/core";
import clsx from "clsx";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import BatteryFullOutlinedIcon from "@material-ui/icons/BatteryFullOutlined";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  chipColor: {
    backgroundColor: "#9BD3FF"
  },

  card: {
    maxWidth: 345,
    backgroundColor: "#303030",
    color: "#9BD3FF"
  },

  expand: {
    transform: "rotate(0deg)",
    marginLeft: "auto",
    transition: theme.transitions.create("transform", {
      duration: theme.transitions.duration.shortest
    })
  },

  expandOpen: {
    transform: "rotate(180deg)"
  },

  chipColorSave: {
    color: "#FFFFFF",
    backgroundColor: "#005FAB",
    borderColor: "#FFFFFF",
    borderwidth: "4px"
  },

  paper: {
    padding: theme.spacing(1),
    textAlign: "center",
    color: theme.palette.text.secondary,
    backgroundColor: "#303030"
  },
  paperHighlight: {
    backgroundColor: "#005FAB",
    color: "#FFFFFF",
    padding: "4px"
  },

  paperLiveExt: {
    color: "#FFFFFF",
    textAlign: "center",
    backgroundColor: "#303030",
    paddingBottom: "5px"
  },
  paperLivetext: {
    color: "#739EBF"
  },
  paperLiveInt: {
    color: "#DFDFDF",
    textAlign: "center",
    paddingLeft: "4px",
    paddingRight: "4px",
    backgroundColor: "#303030"
  },

  paperLight: {
    padding: "4px",
    textAlign: "center",
    backgroundColor: "#303030"
  },
  blanksheetConnected: {
    textAlign: "center",
    color: "#739EBF",
    backgroundColor: "#303030",
    padding: "7px"
  },
  blanksheetScanning: {
    textAlign: "center",
    color: "#005FAB",
    padding: "7px",
    backgroundColor: "#91BFA2"
  },
  text: {
    color: "#9BD3FF"
  },

  textWhite: {
    color: "#FFFFFF"
  },

  textField: {
    backgroundColor: "#303030",
    color: "#9BD3FF",
    borderColor: "#9BD3FF"
  },

  mapButton: {
    color: "#000000",
    backgroundColor: "#9BD3FF"
  },

  media: {
    height: 0,
    paddingTop: "56.25%" // 16:9
  },

  green: {
    backgroundColor: "#5CE361"
  },
  yellow: {
    backgroundColor: "#E2D758"
  },
  red: {
    backgroundColor: "#D14F4F"
  },
  formControlWhite: {
    margin: theme.spacing(1),
    minWidth: 120,
    borderRadius: "4px",
    borderWidth: "8px",
    boxShadow: "0px 2px 2px",
    backgroundColor: "#FFFFFF",

    "& .MuiSelect-outlined": {
      borderWidth: "8px"
    },

    "& .MuiInputLabel-formControl": {
      paddingLeft: "5px",
      paddingRight: "5px",
      borderRadius: "4px",
      borderWidth: "10px",
      color: "#005FAB"
    },

    "& .MuiSelect-select": {
      color: "#9BD3FF"
    }
  },

  inputOutlined: {
    "& label.Mui-focused": {
      color: "#9BD3FF"
    },
    "& .MuiInputLabel-outlined": {
      color: "#9BD3FF",
      borderColor: "#9BD3FF"
    },
    "& .MuiOutlinedInput-input": {
      color: "#9BD3FF",
      backgroundColor: "#353F48",
      borderRadius: "4px"
    },
    "& .MuiOutlinedInput-root": {
      "& fieldset": {
        borderColor: "transparent"
      },
      "&.MuiInputLabel-outlined": {
        color: "#9BD3FF",
        borderColor: "#9BD3FF"
      },
      "&:hover fieldset": {
        borderColor: "#9BD3FF"
      },
      "&.Mui-focused fieldset": {
        borderColor: "#9BD3FF"
      }
    }
  },

  formControl: {
    margin: "5px",
    minWidth: 110,
    borderRadius: "4px",
    borderWidth: "8px",
    borderColor: "red",
    boxShadow: "0px 2px 2px",
    backgroundColor: "#353F48",
    "&:hover": {
      outlineColor: "blue",
      outlineWidth: "6px",
      boxShadow: "0px 3px 3px"
    },

    "& .MuiSelect-select": {
      color: "#9BD3FF"
    },

    "& .MuiSelect-outlined": {
      borderColor: "red",
      borderWidth: "8px"
    },

    "& .MuiInputLabel-formControl": {
      color: "#9BD3FF",
      backgroundColor: "#353F48",
      paddingLeft: "5px",
      paddingRight: "5px",
      borderRadius: "4px"
    }
  },
  icon: {
    fill: "#9BD3FF"
  },
  selectEmpty: {
    marginTop: theme.spacing(2)
  }
}));

const CssTextField = withStyles({
  root: {
    "& label.Mui-focused": {
      color: "#9BD3FF"
    },
    "& .MuiInputLabel-outlined": {
      color: "#9BD3FF",
      borderColor: "#9BD3FF"
    },
    "& .MuiOutlinedInput-input": {
      color: "#9BD3FF",
      backgroundColor: "#353F48",
      borderRadius: "4px"
    },
    "& .MuiOutlinedInput-root": {
      "& fieldset": {
        borderColor: "transparent"
      },
      "&.MuiInputLabel-outlined": {
        color: "#9BD3FF",
        borderColor: "#9BD3FF"
      },
      "&:hover fieldset": {
        borderColor: "#9BD3FF"
      },
      "&.Mui-focused fieldset": {
        borderColor: "#9BD3FF"
      }
    }
  }
})(TextField);

const LightSwitch = withStyles({
  switchBase: {
    color: "#DFDFDF",
    "&$checked": {
      color: "#9BFFC1"
    },
    "&$checked + $track": {
      backgroundColor: "#9BFFC1"
    }
  },
  checked: {},
  track: {}
})(Switch);

const customTheme = createMuiTheme({
  palette: {
    primary: {
      main: "#005FAB",
      contrastText: "#FFFFFF"
    },
    secondary: {
      main: "#353F48",
      contrastText: "#9BD3FF"
    },
    textSecondary: {
      color: "#9BD3FF"
    }
  }
});

export default function NestedGrid() {
  const [state, setState] = React.useState({
    checkedA: true
  });
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  const handleChange = name => event => {
    setState({ ...state, [name]: event.target.checked });
    setAge(event.target.value);
  };
  const classes = useStyles();

  const [age, setAge] = React.useState("");

  const inputLabel = React.useRef(null);
  const [labelWidth, setLabelWidth] = React.useState(0);
  React.useEffect(() => {
    setLabelWidth(inputLabel.current.offsetWidth);
  }, []);

  const handleClick = () => {
    console.info("You clicked the Chip.");
  };

  function FormRow() {
    return (
      <ThemeProvider theme={customTheme}>
        <Paper className={classes.paper}>
          <Grid
            container
            item
            xs={12}
            spacing={1}
            direction="row"
            justify="center"
            alignContent="center"
          >
            <Grid item xs={8}>
              <FormControl
                variant="outlined"
                className={classes.formControl}
                color="secondary"
              >
                <InputLabel
                  ref={inputLabel}
                  id="demo-simple-select-outlined-label"
                >
                  Beacon
                </InputLabel>
                <Select
                  labelId="demo-simple-select-outlined-label"
                  id="demo-simple-select-outlined"
                  value={age}
                  onChange={handleChange}
                  labelWidth={labelWidth}
                  inputProps={{
                    classes: {
                      icon: classes.icon
                    }
                  }}
                >
                  <MenuItem value="">
                    <em>Please Select</em>
                  </MenuItem>
                  <MenuItem value={1}>01</MenuItem>
                  <MenuItem value={2}>02</MenuItem>
                  <MenuItem value={3}>03</MenuItem>
                  <MenuItem value={4}>04</MenuItem>
                  <MenuItem value={5}>05</MenuItem>
                </Select>
              </FormControl>
              <form className={classes.root} noValidate>
                <CssTextField
                  className={classes.margin}
                  label="Hello"
                  variant="outlined"
                  id="custom-css-outlined-input"
                />
              </form>
            </Grid>
          </Grid>
        </Paper>

        <React.Fragment>
          <Paper className={classes.paper}>
            <Typography className={classes.textWhite} variant="caption">
              Here is some text in White
            </Typography>
          </Paper>
          <Paper className={classes.paper}>
            <Grid item container spacing={1}>
              <Grid
                item
                container
                xs={11}
                spacing={0}
                direction="row"
                justify="center"
              >
                <Grid item container xs={8} spacing={1} justify="center">
                  <Grid item xs={10}>
                    <Paper elevation={0} className={classes.paper}>
                      <Typography className={classes.text} variant="subtitle2">
                        SIG. STRENGTH
                      </Typography>
                      <Paper className={classes.paperHighlight}>
                        <Typography
                          className={classes.paperHighlight}
                          variant="h6"
                        >
                          -68
                        </Typography>
                      </Paper>
                      <Typography className={classes.text} variant="subtitle2">
                        2 Sec Average
                      </Typography>
                    </Paper>
                  </Grid>
                  <Grid item container spacing={1} justify="center">
                    <Grid item xs={10}>
                      <Paper
                        elevation={0}
                        className={classes.blanksheetScanning}
                      >
                        <Typography
                          className={classes.blanksheet}
                          variant="subtitle2"
                        >
                          Scanning
                        </Typography>
                      </Paper>
                    </Grid>
                    <Grid item xs={10}>
                      <Paper className={classes.blanksheet}>
                        <Typography
                          className={classes.blanksheetConnected}
                          variant="subtitle2"
                        >
                          Connected
                        </Typography>
                      </Paper>
                    </Grid>
                  </Grid>
                </Grid>
                <Grid item xs={4}>
                  <Paper className={classes.paperLiveExt}>
                    <Typography
                      className={classes.paperLivetext}
                      variant="body2"
                    >
                      LIVE SIGNAL
                    </Typography>
                    <Paper className={classes.paperHighlight}>
                      <Typography className={classes.paperLiveInt} variant="h6">
                        -67
                      </Typography>
                    </Paper>
                    <Typography className={classes.paperLiveInt} variant="h6">
                      -66
                    </Typography>
                    <Typography className={classes.paperLiveInt} variant="h6">
                      -65
                    </Typography>
                    <Typography className={classes.paperLiveInt} variant="h6">
                      -64
                    </Typography>
                    <Typography className={classes.paperLiveInt} variant="h6">
                      -63
                    </Typography>
                  </Paper>
                </Grid>
              </Grid>
              <Grid
                item
                container
                xs={12}
                spacing={5}
                direction="row"
                alignItems="center"
                justify="center"
              >
                <Grid item xs={6}>
                  <Button variant="contained" color="secondary">
                    Stop Scan
                  </Button>
                </Grid>
                <Grid item container xs={3} spacing={1}>
                  <Paper elevation={2} className={classes.paperLight}>
                    <Typography className={classes.text} variant="subtitle2">
                      LIGHT
                    </Typography>
                    <LightSwitch
                      checked={state.checkedA}
                      onChange={handleChange("checkedA")}
                      value="checkedA"
                    />
                  </Paper>
                </Grid>
              </Grid>
            </Grid>
          </Paper>
        </React.Fragment>
        <div>
          <Box paddingTop={2} />
        </div>
        <Paper className={classes.paper}>
          <Grid
            item
            container
            direction="column"
            justify="center"
            alignItems="center"
          >
            <Grid item>
              <Button variant="contained" color="secondary">
                Push Here for Cookies
              </Button>
              <div>
                <Box paddingTop={2} />
              </div>
            </Grid>
            <Grid item>
              <div>
                <FormControl
                  variant="outlined"
                  className={classes.formControl}
                  color="secondary"
                >
                  <InputLabel
                    ref={inputLabel}
                    id="demo-simple-select-outlined-label"
                  >
                    Beacon
                  </InputLabel>
                  <Select
                    labelId="demo-simple-select-outlined-label"
                    id="demo-simple-select-outlined"
                    value={age}
                    onChange={handleChange}
                    labelWidth={labelWidth}
                    inputProps={{
                      classes: {
                        icon: classes.icon
                      }
                    }}
                  >
                    <MenuItem value="">
                      <em>Please Select</em>
                    </MenuItem>
                    <MenuItem value={1}>01</MenuItem>
                    <MenuItem value={2}>02</MenuItem>
                    <MenuItem value={3}>03</MenuItem>
                    <MenuItem value={4}>04</MenuItem>
                    <MenuItem value={5}>05</MenuItem>
                  </Select>
                </FormControl>
              </div>
            </Grid>
          </Grid>
        </Paper>
        <Paper className={classes.paper}>
          <Grid
            item
            container
            spacing={2}
            direction="row"
            justify="center"
            alignItems="center"
          >
            <Grid item>
              <Button text="GREEN" className={classes.green}>
                Green
              </Button>
            </Grid>
            <Grid item>
              <Button label="YELLOW" className={classes.yellow}>
                Yellow
              </Button>
            </Grid>
            <Grid item>
              <Button label="RED" className={classes.red}>
                RED
              </Button>
            </Grid>
            <Grid item>
              <FormControl
                variant="filled"
                className={classes.formControlWhite}
              >
                <InputLabel id="demo-simple-select-filled-label">
                  Age
                </InputLabel>
                <Select
                  labelId="demo-simple-select-filled-label"
                  id="demo-simple-select-filled"
                  value={age}
                  onChange={handleChange}
                >
                  <MenuItem value="">
                    <em>None</em>
                  </MenuItem>
                  <MenuItem value={10}>Ten</MenuItem>
                  <MenuItem value={20}>Twenty</MenuItem>
                  <MenuItem value={30}>Thirty</MenuItem>
                </Select>
              </FormControl>
            </Grid>
          </Grid>
        </Paper>
        <Paper className={classes.paper}>
          <Grid item container spacing={2}>
            <Grid item>
              <Chip
                label="Clickable"
                className={classes.chipColor}
                onClick={handleClick}
              />
            </Grid>
            <Grid item>
              <Chip
                label="Clickable"
                className={classes.chipColor}
                onClick={handleClick}
              />
            </Grid>
            <Grid item>
              <Chip
                variant="outlined"
                label="Save"
                className={classes.chipColorSave}
                onClick={handleClick}
              />
            </Grid>
            <Grid
              item
              container
              spacing={1}
              direction="row"
              justify="center"
              align="center"
            >
              <Grid item>
                <form className={classes.root} noValidate>
                  <CssTextField
                    className={classes.margin}
                    label="Hello"
                    variant="outlined"
                    id="custom-css-outlined-input"
                  />
                </form>
              </Grid>
              <Grid item className={classes.mapButtonPadding}>
                <Button variant="contained" className={classes.mapButton}>
                  Map
                </Button>
              </Grid>
            </Grid>
          </Grid>
        </Paper>

        <Grid container item justify="center" alignItems="center" spacing={1}>
          <Grid item>
            <form
              className={classes.inputOutlined}
              noValidate
              autoComplete="off"
            >
              <TextField
                id="outlined-basic"
                label="Outlined"
                variant="outlined"
                style={{ width: 110 }}
              />
            </form>
          </Grid>
          <Grid item>
            <FormControl variant="outlined" className={classes.formControl}>
              <InputLabel
                ref={inputLabel}
                id="demo-simple-select-outlined-label"
              >
                Age
              </InputLabel>
              <Select
                labelId="demo-simple-select-outlined-label"
                id="demo-simple-select-outlined"
                value={age}
                onChange={handleChange}
                labelWidth={labelWidth}
                inputProps={{
                  classes: {
                    icon: classes.icon
                  }
                }}
              >
                <MenuItem value="">
                  <em>None</em>
                </MenuItem>
                <MenuItem value={10}>Ten</MenuItem>
                <MenuItem value={20}>Twenty</MenuItem>
                <MenuItem value={30}>Thirty</MenuItem>
              </Select>
            </FormControl>
          </Grid>
        </Grid>
        <Paper className={classes.paper}>
          <Grid container item>
            <Grid item>
              <Card className={classes.card}>
                <CardMedia
                  className={classes.media}
                  image="/static/images/cards/paella.jpg"
                  title="Paella dish"
                />
                <CardHeader
                  avatar={
                    <Avatar aria-label="recipe" className={classes.avatar}>
                      Icon
                    </Avatar>
                  }
                  title="Title (Tool or Person ID)"
                  subheader={
                    <Typography
                      variant="caption"
                      className={classes.paperLiveInt}
                    >
                      Beacon # and last connect
                    </Typography>
                  }
                />
                <CardContent>
                  <Typography
                    variant="body2"
                    className={classes.textWhite}
                    component="p"
                  >
                    Notes this is a lot of text to test what happens when you
                    have a lot of notes like if the person was
                  </Typography>
                </CardContent>
                <CardActions disableSpacing>
                  <Button variant="contained" color="secondary">
                    Locate
                  </Button>

                  <BatteryFullOutlinedIcon className={classes.paperLiveInt} />
                  <Typography
                    variant="caption"
                    className={classes.paperLiveInt}
                  >
                    1.5V
                  </Typography>

                  <IconButton
                    className={clsx(classes.expand, {
                      [classes.expandOpen]: expanded
                    })}
                    onClick={handleExpandClick}
                    aria-expanded={expanded}
                    aria-label="show more"
                  >
                    <ExpandMoreIcon />
                  </IconButton>
                </CardActions>
                <Collapse in={expanded} timeout="auto" unmountOnExit>
                  <CardContent>
                    <Typography paragraph>Notes Continued:</Typography>
                    <Typography className={classes.textWhite} paragraph>
                      More Notes
                    </Typography>
                  </CardContent>
                </Collapse>
              </Card>
            </Grid>
          </Grid>
        </Paper>
      </ThemeProvider>
    );
  }

  return (
    <div className={classes.root}>
      <Grid container spacing={1}>
        <Grid container item xs={12} spacing={3}>
          <FormRow />
        </Grid>
      </Grid>
    </div>
  );
}
