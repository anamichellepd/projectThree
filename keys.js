const { IamAuthenticator } = require('ibm-watson/auth');

exports.ibm = {
    version: '2017-10-13',
    authenticator: new IamAuthenticator({
        apikey: "DNy42HsXr94JdnUH3Jgpfh4GzJ8YczmMYR_NZuZe6bG8",
    }),
    url: "https://api.us-south.personality-insights.watson.cloud.ibm.com/instances/dd921357-9836-407d-b8ff-88ddd4eb4c8f"
}