import { expect } from 'chai'; // Importing Chai assertion library for assertions
import sinon from 'sinon'; // Importing Sinon.js for stubbing and mocking
import Post from '../../src/models/post.js'; // Importing the Post model
import * as postController from '../../src/controllers/postController.js'; // Importing the post controller

describe('Post Controller', () => { // Describe block for grouping tests related to the post controller
    describe('createPost', () => { // Describe block for testing the createPost method
        afterEach(() => { // After each test, restore all stubbed methods using Sinon's restore method
            sinon.restore(); 
        });

        it('should create a new post', async () => { // Test case for verifying if createPost creates a new post
            const req = { body: { title: 'Test Post', content: 'Test Content' } }; // Mocked request object
            const res = { // Mocked response object
                status: sinon.stub().returnsThis(), // Stubbing the status method of the response object to return itself
                json: sinon.stub() // Stubbing the json method of the response object
            };

            const saveStub = sinon.stub(Post.prototype, 'save').resolves(req.body); // Stubbing the save method of the Post model prototype to resolve with request body

            await postController.createPost(req, res); // Calling the createPost method with mocked request and response objects

            expect(res.status.calledWith(201)).to.be.true; // Assertion: Verify if status method was called with 201 (Created) status code

            saveStub.restore(); // Restoring the saveStub after the test
        });

        it('should handle errors', async () => { // Test case for verifying if createPost handles errors correctly
            const req = { body: { title: 'Test Post', content: 'Test Content' } }; // Mocked request object
            const res = { // Mocked response object
                status: sinon.stub().returnsThis(), // Stubbing the status method of the response object to return itself
                json: sinon.stub() // Stubbing the json method of the response object
            };

            sinon.stub(Post.prototype, 'save').throws(new Error('Save error')); // Stubbing the save method of the Post model prototype to throw an error

            await postController.createPost(req, res); // Calling the createPost method with mocked request and response objects

            // Assertions: Verify if status method was called with 400 (Bad Request) status code
            expect(res.status.calledWith(400)).to.be.true;
            // Assertion: Verify if json method was called with an object containing the error message
            expect(res.json.calledWith({ error: 'Save error' })).to.be.true;
        });
    });
});
