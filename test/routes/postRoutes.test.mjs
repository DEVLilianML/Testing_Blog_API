import request from 'supertest'; // Importing Supertest for making HTTP requests
import { expect } from 'chai'; // Importing Chai assertion library for assertions
import app from '../../src/app.js'; // Importing the Express.js application
import Post from '../../src/models/post.js'; // Importing the Post model
import mongoose from 'mongoose'; // Importing Mongoose for MongoDB interaction

describe('Post Routes', () => { // Describe block for grouping tests related to the Post routes
    before(async () => { // Before hook to connect to the MongoDB database before running tests
        await mongoose.connect("mongodb://localhost:27017/backenduju"); // Connect to the test database
    });

    after(async () => { // After hook to clean up the database and close the connection after running tests
        await mongoose.connection.db.dropDatabase(); // Drop the test database
        await mongoose.connection.close(); // Close the database connection
    });

    beforeEach(async () => { // Before each test, delete all documents in the Post collection
        await Post.deleteMany({}); // Delete all documents in the Post collection
    });

    describe('POST /api/posts', () => { // Describe block for testing the POST /api/posts route
        it('should create a new post', async () => { // Test case for verifying if a new post is created successfully
            const post = { title: 'Test Post', content: 'Test Content' }; // Mocked post data
            const res = await request(app) // Make a POST request to the /api/posts endpoint using Supertest
                .post('/api/posts')
                .send(post) // Send the post data in the request body
                .expect(201); // Expecting a response with status code 201 (Created)

            expect(res.body).to.include(post); // Assertion: Verify if the response body includes the post data
        });
    });

    describe('GET /api/posts', () => { // Describe block for testing the GET /api/posts route
        it('should return all posts', async () => { // Test case for verifying if all posts are returned successfully
            const posts = [{ title: 'Test Post 1', content: 'Test Content 1' }, { title: 'Test Post 2', content: 'Test Content 2' }]; // Mocked posts data
            await Post.insertMany(posts); // Insert the mocked posts data into the database

            const res = await request(app) // Make a GET request to the /api/posts endpoint using Supertest
                .get('/api/posts')
                .expect(200); // Expecting a response with status code 200 (OK)

            // Assertions: Verify if the response body contains the expected number of posts and their content
            expect(res.body.length).to.equal(posts.length); 
            expect(res.body[0]).to.include(posts[0]);
            expect(res.body[1]).to.include(posts[1]);
        });
    });
});
