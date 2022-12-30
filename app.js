// הפעלנו את הפונקציה קונפיג של דוט אי אן וי
require('dotenv').config();
const express=require('express');
const app=express();
const port=process.env.PORT || 3030;

// הגדרנו נקודת קצה בשיטת גט שמחזירה הודעה של כל המוצרים נשלחו
app.get('/products',(req,res)=>{
    res.status(200).json({Msg:"All Products"});
});

app.listen(port,()=>{console.log('Server Started')});