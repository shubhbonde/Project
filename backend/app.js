const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');


const admin_resident_routes = require('./routes/admin-routes/admin-resident-route');
const admin_guard_routes = require('./routes/admin-routes/admin-guard-route');
const admin_noticeboard_routes = require('./routes/admin-routes/admin-noticeboard-route');
const admin_route = require('./routes/admin-routes/admin-route')
const HttpError = require('./models/http-error')

const app = express();
app.use(bodyParser.json());


app.use('/admin/resident', admin_resident_routes);
app.use('/admin/guard', admin_guard_routes);
app.use('/admin/noticeboard', admin_noticeboard_routes);
app.use('/admin', admin_route)
app.use((req, res, next) => {
    const error = new HttpError('could not found this route');
    throw error;
})

app.use((error, req, res, next) => {
    if (res.headerSend) {
        return next(error)
    }
    res.status(error.code || 500);
    res.json({
        message: error.message || 'unknown error'
    })
})

mongoose.connect('mongodb+srv://projectgroup:qwerty1234@cluster0.0gjckbx.mongodb.net/resident?retryWrites=true&w=majority').then(() => {
    app.listen(5000);
}).catch(err => {
    console.log(err)
})
