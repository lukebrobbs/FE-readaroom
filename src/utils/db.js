import sampleSize from 'lodash.samplesize';
import db from '../config.js';

const utils = {
  createTestEmotionData: () => {
    const emotionTypes = [
      'HAPPY',
      'SAD',
      'ANGRY',
      'CONFUSED',
      'DISGUSTED',
      'SURPRISED',
      'CALM'
    ];
    const topThreeEmotions = sampleSize(emotionTypes, 3);
    return topThreeEmotions.map(emotion => {
      return { Type: emotion, Confidence: Math.random() * 100 };
    });
  },
  getMatchedStudents: () => {
    const studentsRef = db.collection('students');
    return studentsRef.get();
  },
  addStudentsToSession: () => {
    const students = [];
    const studentsRef = db.collection('students');
    const sessionsRef = db.doc('sessions/ZmrKU1MgAHfNFnqF2VJe');
    studentsRef
      .get()
      .then(response => {
        response.forEach(studentData => {
          const student = { ...studentData.data(), emotions: [] };
          students.push(student);
        });
        return sessionsRef.update({ students });
      })
      .then(session => {
        console.log('update complete');
      });
  },
  addEmotions: () => {
    const sessionsRef = db.doc('sessions/ZmrKU1MgAHfNFnqF2VJe');
    setInterval(() => {
      sessionsRef
        .get()
        .then(QueryDocumentSnapshot => {
          const students = QueryDocumentSnapshot.get('students');
          const studentsWithUpdatedEmotions = students.map(student => {
            student.emotions = [
              ...student.emotions,
              ...utils.createTestEmotionData()
            ];
            return student;
          });
          return studentsWithUpdatedEmotions;
        })
        .then(data => {
          console.log('running');
          sessionsRef.update({ students: data });
        });
    }, 2000);
  }
};

export default utils;
