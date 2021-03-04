require('dotenv').config();
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');

const indexRouter = require('./routes/index');
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
const periodRouter = require('./routes/period');
//user
const usersRouter = require('./routes/users');
const refreshTokenRouter = require('./routes/refreshTokens');
const oprecRouter = require('./routes/oprec');

const verifyToken = require('./middleware/verifyToken');

const app = express();

app.use(logger('dev'));
app.use(express.json({ limit: '50mb' }));
app.use(express.urlencoded({ extended: false, limit: '50mb' }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use('/', indexRouter);
//media
app.use('/media', mediaRouter);
//college
app.use('/faculties', facultyRouter);
app.use('/deans', verifyToken, deanRouter);
app.use('/study-programs', studyPrograms);
app.use('/courses', courseRouter);
//organizer
app.use('/organizers', verifyToken, organizerRouter);
app.use('/roles', verifyToken, roleRouter);
app.use('/members', verifyToken, memberRouter);
app.use('/periods', verifyToken, periodRouter);

//user
app.use('/users', usersRouter);
app.use('/refresh-tokens', refreshTokenRouter);
app.use('/oprec', oprecRouter);

module.exports = app;
