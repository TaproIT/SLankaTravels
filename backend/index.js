import express from "express";
import cors from "cors";
import dotenv from "dotenv";


dotenv.config();
const app = express();
const port = process.env.PORT || 8000;


app.use(
    cors({
        origin: [process.env.BASE_PROD_URL, process.env.BASE_LOCAL_URL],
        credentials: true,
        methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
        allowedHeaders: [
            "Content-Type",
            "Authorization",
            "X-Requested-With",
            "X-Socket-ID",
        ],
    })
);

app.get('/', (req, res) => {
    res.send('Api is working')
});

//DATABASE CONNECTION
// mongoose.set('strictQuery', false);
// const connectDB = async () => {
//     try {
//         await mongoose.connect(process.env.MONGO_URL);
//         console.log("MongoDB Database is connected");
//     } catch (error) {
//         console.error("Database connection failed:", error);
//         process.exit(1);
//     }
// };


//middleware
// app.use(express.json());
// app.use(cookieParser());

// // app.use(cors(corsOptions));
// app.use('/api/v1/auth', authRoute);
// app.use('/api/v1/users', userRoute);
// app.use('/api/v1/doctors', doctorRoute);
// app.use('/api/v1/reviews', reviewRoute);
// app.use('/api/v1/bookings', bookingRoute);


app.listen(port, () => {
    // connectDB();
    console.log("Server is runing on port" + port);
});

