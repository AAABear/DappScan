var request = require('request');
const https = require("https");

var result = [];

function getAllDapps() {
    for (var id = 1; id <= 500; id++) {
        var url = "https://dapp.review/api/dapp/dapp/" + id;
        request(url, function (error, response, body) {
        //    console.log('error:', error); // Print the error if one occurred
        //    console.log('statusCode:', response && response.statusCode);

            if (response.statusCode == 404) {
            //    console.log(id);
                return;
            }

            var data = JSON.parse(body);

            var item = {
                "Address": data.contracts[0].address,
                "Name": data.title
            }
            console.log(item);
        });
    }
}

getAllDapps();