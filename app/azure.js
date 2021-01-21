const endpoints = {
    getLabsEndpoint: "https://management.azure.com/subscriptions/d5e481ac-7346-47dc-9557-f405e1b3dcb0/providers/Microsoft.LabServices/labaccounts?api-version=2018-10-15",
    getStorageEndpoint: "https://simpleportal.blob.core.windows.net/professors/test.txt",
    graphMeEndpoint: "https://graph.microsoft.com/v1.0/me/"
};

function callAzure(endpoint, token, callback) {
    const headers = new Headers();
    const bearer = `Bearer ${token}`;

    headers.append("Authorization", bearer);

    options = {
        method: "GET",
        headers: headers
    }

    console.log(`request made to {endpoint} at: ` + new Date().toString());

    fetch(endpoint, options)
        .then(response => response.json())
        .then(response => callback(response, endpoint))
        .catch(error => callback(error, endpoint));
}
