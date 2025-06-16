import express from 'express';
import AuthRouter from "./src/routes/authRouter.js"

const app = express();
app.use(express.json());
app.use("/auth" , AuthRouter);

app.get('/',(req, res) => {

    res.json({
        message: 'Welcome to the server'
    });
});

app.listen(4300,()=> {
    console.log('Server is running on port http://localhost:4300');
});