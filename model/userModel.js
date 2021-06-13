import mongoose from 'mongoose';

const blogSchema = new mongoose.Schema({
    title: {
        type: String,
        require: true,
        trim: true,
    },

    content: {
        type: String,
        require: true,
        trim: true,
    }
})

const Blog = new mongoose.model('BlogCollection', blogSchema);

export default Blog;