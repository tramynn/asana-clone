INSERT INTO users (email, username, hash, profile_pic)
VALUES ($1, $2, $3, 'https://www.cmcaindia.org/wp-content/uploads/2015/11/default-profile-picture-gmail-2.png')
RETURNING *;