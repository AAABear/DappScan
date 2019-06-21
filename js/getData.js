
function getDailyInfo() {
    $.getJSON('http://10.131.239.236:8080/api/getDailyInfo', function (data) {
        $("#totalDapps").html(data.totalDapps);
        $("#dailyUsers").html(data.dailyActiveUser);
        $("#dailyTransactions").html(data.dailyTransactions);
        $("#dailyVolumes").html(data.dailyVolumes);
    
        console.log(data);
    });
}

function addRankingItem(id, name, balance, userAmount, userChangeRate, volumeAmout, volumeChangeRate, txAmount) {

    

    $("#rankItem").append(
        "<div class='ranking-item'>" + 
            "<div class='flex-body flex-row'>" + 
                "<div class='column-flex column-id' data-heading='ID'>" + id + "</div>" + 
                "<div class='column-flex column-name' title='" + name + "'>" + 
                    "<span>" + 
                        "<a href='#'>"+ name + "</a>" + 
                    "<span>" + 
                    "<div class='table-additional-data'></div>" + 
                "</div>" + 
                "<div class='column-flex' data-heading='Balance'>" + 
                    "<div>" + 
                        "<span class='icon-ethereum'></span>" + 
                        "<span>" + balance + "</span>" + 
                    "</div>" + 
                "</div>" + 
                "<div class='column-flex' data-heading='Users 24h'>" + 
                    "<span>" + userAmount + "</span>" + 
                    "<div class='table-additional-data'>" +
                        userChangeRate + 
                    "</div>" + 
                "</div>" + 
                "<div class='column-flex' data-heading='Volume 24h'>" + 
                    "<div>" + 
                        "<span class='icon-ethereum'></span>" + 
                        "<span>" + volumeAmout + "</span>" + 
                        "<div class='table-additional-data'>" + 
                            volumeChangeRate + 
                        "</div>" + 
                    "</div>" + 
                "</div>" + 
                "<div class='column-flex' data-heading='Tx 24h'>" + 
                    "<div>" + 
                        "<span>" + txAmount + "</span>" + 
                    "</div>" + 
                "</div>" + 
            "</div>" + 
        "</div>"
    );
}

function getDappList() {
    $.getJSON('http://10.131.239.236:8080/api/getAllDapps', function (data) {
        console.log(data);

        for (var id = 0; id < data.length; id++) {

            var userChangeRate, volumeChangeRate;
            if (data[id].userChangeRate.label === "negative") {
                userChangeRate =  "<span class='percentage-change minus-change'>" + data[id].userChangeRate.status + "%</span>";
            }
            else {
                userChangeRate =  "<span class='percentage-change plus-change'>" + data[id].userChangeRate.status + "%</span>";
            }

            if (data[id].volumeChangeRate.label === "negative") {
                volumeChangeRate = "<span class='percentage-change minus-change'>" + data[id].volumeChangeRate.status + "%</span>";
            }
            else {
                volumeChangeRate = "<span class='percentage-change plus-change'>" + data[id].volumeChangeRate.status + "%</span>";
            }

            addRankingItem(id+1, 
                data[id].name, 
                data[id].balance, 
                data[id].totalUser, 
                userChangeRate,
                data[id].totalVolumes, 
                volumeChangeRate, 
                data[id].totalTxs);
        }
    }); 
}
