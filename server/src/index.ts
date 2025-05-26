import express from "express";
import dotenv from "dotenv";
import bodyParser from "body-parser";
import cors from "cors";
import helmet from "helmet";
import morgan from "morgan";
import cookieParser from "cookie-parser"
/* ROUTE IMPORTS */
import dashboardRoutes from "./routes/dashboardRoutes";
import productRoutes from "./routes/productRout";
import userRoutes from "./routes/userRoute";
import expenseRoutes from "./routes/expenseRoute";
import path from 'path'

/* CONFIGURATIONS */
dotenv.config();
const __dirname = path.resolve();
const app = express();
app.use(express.json());
app.use(helmet());
app.use(cookieParser())
app.use(helmet.crossOriginResourcePolicy({ policy: "cross-origin" }));
app.use(morgan("common"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());

/* ROUTES */
app.use("/dashboard", dashboardRoutes); // http://localhost:8000/dashboard
app.use("/products", productRoutes); // http://localhost:8000/products
app.use("/users", userRoutes); // http://localhost:8000/users
app.use("/expenses", expenseRoutes); // http://localhost:8000/expenses


 app.use(express.static(path.join(__dirname, '/client/out')));

    app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'client', 'out', 'index.html'));
    })

    app.use((err: { statusCode: number; message: string; },req:any,res:any,next:any)=>{
        const statusCode = err.statusCode || 500;
        const message = err.message || "Internal server error";
        return res.status(statusCode).json({
            success:false,
            statusCode,
            message,
        })
    })
/* SERVER */
const port = Number(process.env.PORT) || 3001;
app.listen(port, "0.0.0.0", () => {
  console.log(`Server running on port ${port}`);
});
