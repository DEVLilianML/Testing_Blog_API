{
    "clientName": "Thunder Client",
    "collectionName": "AA Test",
    "collectionId": "c7ef37cb-d342-4e68-bdf1-bb4cdcc2b39c",
    "dateExported": "2024-05-30T13:27:40.048Z",
    "version": "1.2",
    "folders": [
        {
            "_id": "87d3998f-b8ea-4235-9dd6-8bfac6825eef",
            "name": "posts",
            "containerId": "",
            "created": "2024-05-30T12:19:12.389Z",
            "sortNum": 10000
        }
    ],
    "requests": [
        {
            "_id": "8567a924-63ea-46fa-b5db-9684aca0b1cc",
            "colId": "c7ef37cb-d342-4e68-bdf1-bb4cdcc2b39c",
            "containerId": "87d3998f-b8ea-4235-9dd6-8bfac6825eef",
            "name": "get all posts",
            "url": "http://127.0.0.1:3000/api/posts",
            "method": "GET",
            "sortNum": 10000,
            "created": "2024-05-30T12:19:23.664Z",
            "modified": "2024-05-30T12:20:19.361Z",
            "headers": []
        },
        {
            "_id": "1a92aba4-2cef-4552-aec7-97aa5def24d6",
            "colId": "c7ef37cb-d342-4e68-bdf1-bb4cdcc2b39c",
            "containerId": "87d3998f-b8ea-4235-9dd6-8bfac6825eef",
            "name": "create post",
            "url": "http://127.0.0.1:3000/api/posts",
            "method": "POST",
            "sortNum": 20000,
            "created": "2024-05-30T12:19:36.559Z",
            "modified": "2024-05-30T12:21:11.197Z",
            "headers": [],
            "body": {
                "type": "json",
                "raw": "{\n  \"title\": \"post 1\",\n  \"content\": \"post 1 content\"\n}",
                "form": []
            }
        },
        {
            "_id": "454c78fd-be43-4ad2-aeb2-0a46cff87f2e",
            "colId": "c7ef37cb-d342-4e68-bdf1-bb4cdcc2b39c",
            "containerId": "87d3998f-b8ea-4235-9dd6-8bfac6825eef",
            "name": "get a post",
            "url": "http://127.0.0.1:3000/api/posts/66586f3777d8ab3b53edd5d8",
            "method": "GET",
            "sortNum": 30000,
            "created": "2024-05-30T12:19:49.267Z",
            "modified": "2024-05-30T12:21:48.816Z",
            "headers": []
        },
        {
            "_id": "62647b02-6fa4-4fb2-a0e1-16a1dc8f2c91",
            "colId": "c7ef37cb-d342-4e68-bdf1-bb4cdcc2b39c",
            "containerId": "87d3998f-b8ea-4235-9dd6-8bfac6825eef",
            "name": "update a post",
            "url": "http://127.0.0.1:3000/api/posts/66586f3777d8ab3b53edd5d8",
            "method": "PUT",
            "sortNum": 40000,
            "created": "2024-05-30T12:19:58.972Z",
            "modified": "2024-05-30T12:22:14.886Z",
            "headers": [],
            "body": {
                "type": "json",
                "raw": "{\n  \"title\" : \"post 1 updated\"\n}",
                "form": []
            }
        },
        {
            "_id": "e9205918-b2e0-405f-aa3d-07b625011edd",
            "colId": "c7ef37cb-d342-4e68-bdf1-bb4cdcc2b39c",
            "containerId": "87d3998f-b8ea-4235-9dd6-8bfac6825eef",
            "name": "delete a post",
            "url": "http://127.0.0.1:3000/api/posts/66586f3777d8ab3b53edd5d8",
            "method": "DELETE",
            "sortNum": 50000,
            "created": "2024-05-30T12:20:05.630Z",
            "modified": "2024-05-30T12:22:24.733Z",
            "headers": []
        }
    ],
    "ref": "r7lHzBk8aTxRA8BK4uNYgrlgUCGaBf_F4S_bsAzLFH3yBxNYgQQmfHJ5PFNGykhToB0n0lVdGYLbDWVGLyDokA"
}