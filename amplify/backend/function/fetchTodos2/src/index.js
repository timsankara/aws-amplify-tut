

exports.handler = async (event) => {

    let todos = [
        "Brush Teeth",
        "Commute to school",
        "Learn AWS Amplify",
        "Deploy Awesome App to AWS",
        "Celebrate with friends cause this is awesome"
    ]

    const response = {
        statusCode: 200,
        //  Uncomment below to enable CORS requests
        headers: {
            "Access-Control-Allow-Origin": "*",
            "Access-Control-Allow-Headers": "*"
        },
        body: JSON.stringify({ todos }),
    };

    return response;
};
