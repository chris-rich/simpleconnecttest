let AWS = require('aws-sdk');
const ddb = new AWS.DynamoDB.DocumentClient();

exports.handler = async (event) => {

    return { "message": "Successfully executed" };
    try {
        let data = await ddb.get({
            TableName: "authors",
            Key: {
                id: "1"
            }
        }).promise();

    } catch (err) {
        // error handling goes here
    };
};