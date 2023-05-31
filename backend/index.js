const express= require('express');
const {db,connectdb}=require('./database');
const app=express();
app.use(express.json());
const cors=require('cors');
app.use(cors());
const moment = require('moment-timezone');
app.get('/',(req,res)=>{
return res.send('Hello world');
});

//http://localhost:5000/register
app.post('/register',(req,res)=>{
const query='INSERT INTO assessmentplandistribution (type, weight, assessplanid) VALUES (?,?,?)';
const assessmentdata=Object.values(req.body);
db.query(query,assessmentdata,(err,result)=>{
if(err)
{
  console.log(err.message);
}
console.log('Result:',result);
return res.status(200).json({sucess:true,message:'assessment inserted successsfully'});
});
console.log(req.body);
});

//http://localhost:5000/users
app.get('/users',(req,res)=>{
const query='SELECT * FROM assessmentplandistribution';
db.query(query,(err,result)=>{
if(err) {
    console.log(err.message);
}
return res.json(result);
});
});
//http://localhost:5000/delete
app.delete('/delete',(req,res)=>{
  const id=req.body.id;
  console.log(id);
 const query=`DELETE FROM assessmentplandistribution WHERE plandistid="${id}"`;
 db.query(query,(err,result)=>{
if(err){
  console.log(err.message);
}
console.log(result);
return res.status(200).json({sucess:true,message:'Assessment is deleted successfully'});
 });
});
//http://localhost:5000/update
app.put('/update', (req, res) => {
  const { id,assessmentType, weight } = req.body;
  const query = `UPDATE assessmentplandistribution SET type = '${assessmentType}', weight = '${weight}' WHERE plandistid='${id}' `;
  db.query(query,(err,result)=>{
      if(err){
        console.log(err.message);
      }
    console.log(result);
    return res.status(200).json({success:true,message:'Assessment is updated successfully'});
    });
});
app.post('/insertquiz',(req,res)=>{
const {quiz}=req.body;
console.log({quiz});

// Insert quiz data into the quizzes table
const quizQuery = `INSERT INTO assessments (number, total_marks) VALUES (${quiz.number}, ${quiz.totalMarks})`;
console.log('quizQuery',quizQuery);
db.query(quizQuery, (quizError, quizResults) => {
  if (quizError) {
    console.error('Error inserting quiz', quizError);
    res.status(500).json({ error: 'Failed to insert quiz' });
  } else {
    // Get the inserted quiz ID
    const quizId = quizResults.insertId;
    console.log('quizID',quizId);

    // Insert question data into the questions table
    const questions = quiz.questions;
    const questionQueries = questions.map((question) => {
      return `INSERT INTO assessmentquestions (assessmentsid, number, clo, total_marks) VALUES (${quizId}, ${question.no}, ${question.clo}, ${question.marks})`;
    });
    console.log('questionQueries',questionQueries);

    db.query(questionQueries.join('; '), (questionError, questionResults) => {
      if (questionError) {
        console.error('Error inserting questions', questionError);
        res.status(500).json({ error: 'Failed to insert questions' });
      } else {
        // Get the inserted question IDs
        const questionIds = questionResults.map((result) => result.insertId);

        // Insert parts data into the parts table
        const partsQueries = [];
        questions.forEach((question, index) => {
          const parts = question.parts;
          const questionId = questionIds[index];

          parts.forEach((part) => {
            const query = `INSERT INTO assessmentparts (questionid, number, clo, total_marks) VALUES (${questionId}, ${part.no}, ${part.clo}, ${part.marks})`;
            partsQueries.push(query);
            console.log('partsquery',query);
          });
        });

        db.query(partsQueries.join('; '), (partsError) => {
          if (partsError) {
            console.error('Error inserting parts', partsError);
            res.status(500).json({ error: 'Failed to insert parts' });
          } else {
            res.status(200).json({ message: 'Quiz inserted successfully' });
          }
        });
      }
    });
  }
});
});
//http://localhost:5000/insertcourseplan
app.post('/insertcourseplan', (req, res) => {
  console.log(req.body);
  const { week, from, to, topic, activity } = req.body;

  // Prepare the SQL query to insert the data into the database
  const query = 'INSERT INTO courseplan (week, fromdate, todate, topicscovered, activity) VALUES (?, ?, ?, ?, ?)';
  
  // Convert the dates to the specified time zone (Asia/Karachi)
  const fromDate = moment(from).tz('Asia/Karachi').format('YYYY-MM-DD');
  const toDate = moment(to).tz('Asia/Karachi').format('YYYY-MM-DD');
  
  console.log(fromDate, toDate);

  // Execute the query with the converted dates
  db.query(query, [week, fromDate, toDate, topic, activity], (err, result) => {
    if (err) {
      console.error(err);
      return res.status(500).json({ success: false, message: 'Failed to insert course plan' });
    }
    console.log(result);
    return res.status(200).json({ success: true, message: 'Course plan added' });
  });
});
app.get('/getcourseplan',(req,res)=>{
  const query='SELECT * FROM courseplan';
  db.query(query,(err,result)=>{
  if(err) {
      console.log(err.message);
  }
  const formattedResult = result.map(item => ({
    ...item,
    fromdate: moment(item.fromdate).format('DD/MM/YYYY'),
    todate: moment(item.todate).format('DD/MM/YYYY')
  }));
  console.log(formattedResult);
  return res.json(formattedResult);
  });
});
app.delete('/deletecourseplan',(req,res)=>{
  const id=req.body.id;
  console.log(id);
 const query=`DELETE FROM courseplan WHERE courseplanid="${id}"`;
 db.query(query,(err,result)=>{
if(err){
  console.log(err.message);
}
console.log(result);
return res.status(200).json({sucess:true,message:'Course Plan is deleted successfully'});
 });
});
app.put('/updatecourseplan', (req, res) => {
  const { id,week,from,to,topic,activity } = req.body;
  const fromDate = moment(from).tz('Asia/Karachi').format('YYYY-MM-DD');
  const toDate = moment(to).tz('Asia/Karachi').format('YYYY-MM-DD');
  const query = `UPDATE courseplan SET week = '${week}', fromdate = '${fromDate}', todate ='${toDate}',topicscovered='${topic}',activity='${activity}'  WHERE courseplanid='${id}' `;
  db.query(query,(err,result)=>{
      if(err){
        console.log(err.message);
      }
    console.log(result);
    return res.status(200).json({success:true,message:'Updated successfully'});
    });
});
//http://localhost:5000
app.listen(5000,(req,res)=>{
  console.log('server is running on port 5000');
  connectdb();
});