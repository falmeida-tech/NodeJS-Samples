const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/playground', {useNewUrlParser: true})
    .then(() => console.log('Connected to MongoDB...'))
    .catch(err => console.error('Could not connect to MongoDB...',err));

const courseSchema = new mongoose.Schema({
    name: String,
    author: String,
    tags: [String],
    date: {type: Date, default:Date.now},
    isPublished: Boolean
});

async function createCourse(){
    const Course = mongoose.model('Course',courseSchema);
    const course = new Course({
        name: 'Angular Course',
        author: 'Mosh',
        tags: ['angular','frontend'],
        isPublished: true
    });
    
    const result = await course.save();
    console.log(result);
}

//createCourse();

async function getCourses(){
    const Course = mongoose.model('Course',courseSchema);
    const courses = await Course.find({name: 'Node.js Course',isPublished:true});
    console.log(courses);
}

getCourses();