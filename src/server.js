const express = require('express'); 
const cookieParser=require('cookie-parser');
const authRoutes=require('./src/routes/authRoutes');
const cors=require('cors');
const app = express(); 

app.use(express.json());  // parses JSON requests
app.use(cookieParser());
const corsOptions={
    origin:'http://localhost:3000',
    credential: true
};
app.use(cors(corsOptions));
app.use('./auth',authRoutes);

const PORT = 5001;
app.listen(5001, (error) => {
    if (error) {
        console.log('Error starting the server:', error);
    } else {
        console.log(`Server is running at http://localhost:${PORT}`);
    }
});