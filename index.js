require("dotenv").config();
const express = require("express");
const cors = require("cors");

const mongooseConnect = require("./shared/mongoose");

const authRouter = require("./routes/auth.routes");
const userRouter = require("./routes/user.routes");

const authUser = require("./middleware/authUser");

mongooseConnect();
const app = express();

app.use(cors());
app.use(express.json());

app.use((req, res, next) => {
    console.log(req.url);
    next();
});

app.use("/api/auth", authRouter);
app.use("/api/user", userRouter);

app.use(authUser);

app.use((req, res) => res.send({ message: "there is no endpoint" }));

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Listening to Port - ${PORT}`));
