import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import Backdrop from "@mui/material/Backdrop";
import CircularProgress from "@mui/material/CircularProgress";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Card from "@mui/material/Card";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";

function Content() {
  const [rows, createdata] = React.useState([]);
  const [open, setOpen] = React.useState(false);
  const [users, setUsers] = React.useState([]);
  const [weather, setweather] = React.useState([]);
  const [cityName, setcityName] = React.useState("");
  const fetchUserData = (evt) => {
    console.log(evt);
    fetch(
      "https://api.openweathermap.org/data/2.5/weather?q=" +
        cityName +
        "&appid=c0601df592e5c23342fe32481393f92a&units=metric&lang=en"
    )
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setUsers(data);
      });
  };
  const Weather = () => {
    fetch(
      "https://api.openweathermap.org/data/2.5/forecast?q=" +
        cityName +
        "&appid=c0601df592e5c23342fe32481393f92a&units=metric&lang=en"
    )
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setweather(data);
      });
  };

  const handleClose = () => {
    setOpen(false);
  };
  const handleOpen = () => {
    setOpen(true);
    setTimeout(handleClose, 2000);
    fetchUserData();
    //setTimeout(setOpen(false), 5000);
  };
  const handleForecast = () => {
    setOpen(true);
    setTimeout(handleClose, 2000);
    Weather();
    createdata(
      weather.list.map((data) => {
        return (
          data.dt_txt,
          data.weather[0].main,
          data.weather[0].description,
          data.main.temp,
          data.main.pressure,
          data.wind.spped,
          data.weather[0].icon
        );
      })
    );
  };
  const columns = [
    { id: "name", label: "Date and Time", minWidth: 200 },
    { id: "code", label: "Weather", minWidth: 100 },
    {
      id: "population",
      label: "Weather Description",
      minWidth: 170,
      align: "right",
      format: (value) => value.toLocaleString("en-US")
    },
    {
      id: "size",
      label: "Temperature",
      minWidth: 170,
      align: "right",
      format: (value) => value.toLocaleString("en-US")
    },
    {
      id: "density",
      label: "Pressure",
      minWidth: 170,
      align: "right",
      format: (value) => value.toLocaleString("en-US")
    },
    {
      id: "wind",
      label: "Wind Speed",
      minWidth: 170,
      align: "right",
      format: (value) => value.toLocaleString("en-US")
    },
    {
      id: "icon",
      label: "icon",
      minWidth: 170,
      align: "right",
      format: (value) => value.toLocaleString("en-US")
    }
  ];

  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  return (
    <Box marginTop="10%">
      <Typography
        variant="h6"
        noWrap
        component="div"
        sx={{ color: "white", textAlign: "center", marginBottom: "2%" }}
      >
        Enter Your City Name
      </Typography>
      <Grid container justifyContent="center" marginTop="5%">
        <TextField
          sx={{ m: 1, width: "50ch" }}
          style={{ backgroundColor: "white" }}
          id="filled-basic"
          label="CityName"
          variant="filled"
          onChange={(event) => setcityName(event.target.value)}
          value={cityName}
        />
      </Grid>
      <Stack
        style={{
          marginTop: "5%",
          alignItems: "center",
          justifyContent: "center"
        }}
        direction={{ xs: "column", sm: "row" }}
        spacing={{ xs: 1, sm: 2, md: 6 }}
      >
        <Button
          style={{
            width: "250px",
            height: "50px"
          }}
          variant="contained"
          onClick={handleOpen}
        >
          Show Current Weather
        </Button>
        <Backdrop
          sx={{ color: "white", zIndex: (theme) => theme.zIndex.drawer + 1 }}
          open={open}
          onClick={handleClose}
        >
          <CircularProgress color="inherit" />
        </Backdrop>
      </Stack>
      {typeof users.main !== "undefined" ? (
        <Grid container justifyContent="center">
          <Card
            sx={{
              maxWidth: "600px",
              margin: "5%",
              justifyContent: "center",
              border: "4px dotted red"
            }}
            display="flex"
          >
            <CardMedia
              sx={{ height: 150, width: 200, marginLeft: "60px" }}
              image={`http://openweathermap.org/img/w/${users.weather[0].icon}.png`}
              title="green iguana"
            />
            <CardContent>
              <Typography
                gutterBottom
                variant="h4"
                component="div"
                style={{ fontWeight: "bolder", textAlign: "center" }}
              >
                {cityName}
              </Typography>
              <Typography variant="h6" color="text.secondary">
                Weather Condition: {users.weather[0].main}
              </Typography>
              <Typography variant="h6" color="text.secondary">
                Wind Description: {users.weather[0].description}
              </Typography>
              <Typography variant="h6" color="text.secondary">
                Temperature: {users.main.temp} <sup>o</sup>C
              </Typography>
              <Typography variant="h6" color="text.secondary">
                Pressure: {users.main.pressure} hPa
              </Typography>
              <Typography variant="h6" color="text.secondary">
                Wind Speed: {users.wind.speed} m/s
              </Typography>
            </CardContent>
            <CardActions></CardActions>
          </Card>
        </Grid>
      ) : (
        ""
      )}
      ;
      {typeof weather.cod !== "undefined" ? (
        <Paper sx={{ width: "100%" }}>
          <TableContainer sx={{ maxHeight: 440 }}>
            <Table stickyHeader aria-label="sticky table">
              <TableHead>
                <TableRow>
                  <TableCell align="center" colSpan={2}>
                    Country
                  </TableCell>
                  <TableCell align="center" colSpan={3}>
                    Details
                  </TableCell>
                </TableRow>
                <TableRow>
                  {columns.map((column) => (
                    <TableCell
                      key={column.id}
                      align={column.align}
                      style={{ top: 57, minWidth: column.minWidth }}
                    >
                      {column.label}
                    </TableCell>
                  ))}
                </TableRow>
              </TableHead>
              <TableBody>
                {rows
                  .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                  .map((row) => {
                    return (
                      <TableRow
                        hover
                        role="checkbox"
                        tabIndex={-1}
                        key={row.code}
                      >
                        {columns.map((column) => {
                          const value = row[column.id];
                          return (
                            <TableCell key={column.id} align={column.align}>
                              {column.format && typeof value === "number"
                                ? column.format(value)
                                : value}
                            </TableCell>
                          );
                        })}
                      </TableRow>
                    );
                  })}
              </TableBody>
            </Table>
          </TableContainer>
          <TablePagination
            rowsPerPageOptions={[10, 25, 100]}
            component="div"
            count={rows.length}
            rowsPerPage={rowsPerPage}
            page={page}
            onPageChange={handleChangePage}
            onRowsPerPageChange={handleChangeRowsPerPage}
          />
        </Paper>
      ) : (
        " "
      )}
      ;
    </Box>
  );
}

export default Content;
