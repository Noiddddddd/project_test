const { pgTable, serial, varchar, timestamp } = require('drizzle-orm/pg-core');

const photosTable = pgTable('photos', {
  id: serial('id').primaryKey(),
  image_url: varchar('image_url', { length: 255 }),
  image_key: varchar('image_key', { length: 255 }),
  uploaded_at: timestamp('uploaded_at').defaultNow()
});

module.exports = { photosTable };
