const express=require("express");
const app= express();
const methodOverride = require("method-override");
const session = require("express-session");

const userLogged = require("./middlewares/deAplicacion/userLogged")

/* middleware de aplicacion de session */
app.use(session({secret: "secreto"/* , resave: true, saveUninitialized: true */ }));

/* middleware de aplicacion de usuarios */
app.use(userLogged)


app.use(methodOverride("_method"));

/* carpeta public como estatica */
const path=require("path");
const publicpath= path.resolve(__dirname, "../public");
app.use(express.static(publicpath));

/* configuracion del template engine */
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '/views'));

/* Tomar información del body */
app.use(express.urlencoded({extended: false}));
app.use(express.json());

/* creacion del puerto 3030 */
app.listen(3030, ()=>console.log("puerto creado en: http://localhost:3030/"));

/* importando enrutadores */
const mainRouter = require("./routes/mainRoute");
const productRouter = require("./routes/productRoute");
const usersRouter = require("./routes/usersRoute");

app.use("/", mainRouter);
app.use("/products", productRouter);
app.use("/users", usersRouter);

