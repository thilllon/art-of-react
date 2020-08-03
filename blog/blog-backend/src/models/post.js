// PostSchema: 스키마 객체
// Post: 모델 객체
import mongoose from 'mongoose';
const { Schema } = mongoose;
const PostSchema = new Schema({
  title: String,
  body: String,
  tags: [String], // 문자열로 이루어진 배열
  publishedDate: {
    type: Date,
    default: Date.now, // 현재날짜 기본값
  },
});
const schemaName = 'Post';
const schemaInstance = PostSchema;
const collectionName = 'post_collection';
const Post = mongoose.model(schemaName, schemaInstance);
export default Post;
