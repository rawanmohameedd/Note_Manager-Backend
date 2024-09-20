CREATE TABLE users (
    user_id SERIAL PRIMARY KEY,
    username VARCHAR(50) NOT NULL,
    user_added_date DATE NOT NULL,
    password VARCHAR(255) NOT NULL,
    user_mobile VARCHAR(15)
);
CREATE TABLE notes (
    note_id SERIAL PRIMARY KEY,
    note_title VARCHAR(30) NOT NULL,
    note_content TEXT,
    note_status ENUM('pending', 'done', 'late') NOT NULL DEFAULT 'pending',
    note_creation_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
CREATE TABLE categories (
    category_id SERIAL PRIMARY KEY,
    category_name VARCHAR(50) NOT NULL,
    description TEXT,
    category_creation_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    creator INT REFERENCES users(user_id) ON DELETE CASCADE  -- 3shan ama ymsa7 el user_id yb2a mazboot w ma yb2ash null
);
CREATE TABLE reminder (
    reminder_id SERIAL PRIMARY KEY,
    reminder_name VARCHAR(30) NOT NULL,
    reminder_description TEXT,
    reminder_creation_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    reminder_type ENUM('pending', 'done', 'late') NOT NULL DEFAULT 'pending',
    reminder_creator INT REFERENCES users(user_id) ON DELETE CASCADE
);
CREATE TABLE note_category (
    note_category_id SERIAL PRIMARY KEY,
    note_id INT REFERENCES notes(note_id) ON DELETE CASCADE,
    category_id INT REFERENCES categories(category_id) ON DELETE CASCADE,
    UNIQUE (note_id, category_id) -- 3shan ma yb2ash feh duplicates
);
CREATE TABLE note_reminder (
    note_reminder_id SERIAL PRIMARY KEY,
    note_id INT REFERENCES notes(note_id) ON DELETE CASCADE,
    reminder_id INT REFERENCES reminder(reminder_id) ON DELETE CASCADE
);
CREATE TABLE note_users (
    note_users_id SERIAL PRIMARY KEY,
    note_id INT REFERENCES notes(note_id) ON DELETE CASCADE,
    users_id INT REFERENCES users(user_id) ON DELETE CASCADE
);