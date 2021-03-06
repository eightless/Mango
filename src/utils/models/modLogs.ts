import { Schema, model } from 'mongoose';

export default model(
  'moderation-logs',
  new Schema({
    Guild: String,
    Toggled: { type: Boolean, default: false },
    Channel: String,
  })
);
