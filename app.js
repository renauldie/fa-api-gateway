require('dotenv').config();
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');

const indexRouter = require('./routes/index');
const usersRouter = require('./routes/users');
//media
const mediaRouter = require('./routes/media');
//college
const facultyRouter = require('./routes/faculty');
const deanRouter = require('./routes/dean');
const studyPrograms = require('./routes/studyPrograms');
const courseRouter = require('./routes/course');
//organizer
const organizerRouter = require('./routes/organizer');
const roleRouter = require('./routes/role');
const memberRouter = require('./routes/member');

const oprecRouter = require('./routes/oprec');

const app = express();

app.use(logger('dev'));
app.use(express.json({ limit: '50mb' }));
app.use(express.urlencoded({ extended: false, limit: '50mb' }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use('/', indexRouter);
app.use('/users', usersRouter);
//media
app.use('/media', mediaRouter);
//college
app.use('/faculties', facultyRouter);
app.use('/deans', deanRouter);
app.use('/study-programs', studyPrograms);
app.use('/courses', courseRouter);
//organizer
app.use('/organizers', organizerRouter);
app.use('/roles', roleRouter);
app.use('/members', memberRouter);

app.use('/oprec', oprecRouter);

module.exports = app;
