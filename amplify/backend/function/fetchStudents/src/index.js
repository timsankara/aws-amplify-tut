

exports.handler = async (event) => {

    let students = [
        "Sam",
        "Jack",
        "Jill"
    ]

    const response = {
        statusCode: 200,
        //  Uncomment below to enable CORS requests
        headers: {
            "Access-Control-Allow-Origin": "*",
            "Access-Control-Allow-Headers": "*"
        },
        body: JSON.stringify({ students }),
    };

    return response;
};
