const mongoose = require('mongoose')
const Schema = mongoose.Schema

const articleSchema = new Schema({
  id: Number,
  title: String,
  desc: String,
  cover: String,
  author: String,
  createDate: {
    type: Date,
    default: Date.now()
  },
  updateDate: {
    type: Date,
    default: Date.now()
  },
  classify: String,
  tags: Array,
  content_md: String,
  content_html: String,
  state: String,
})

articleSchema.index({ id: 1 })

const Article = mongoose.model('Article', articleSchema)

module.exports = Article
