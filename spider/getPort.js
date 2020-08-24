/**
 * GetImages
 *
 * @author lihuayun
 * @date 2019-08-09
 */

const fs = require("fs")
const path = require("path")
const cheerio = require("cheerio")
const request = require("request")


// 获取url的html内容并存储在本地
function getHtml(url, savePath, selecter) {
    request.get(url, function (error, data) {
        if (error) {
            console.log(error);
            return
        }
        // console.log(data);
        // writeFile('./data/allCountry.html', JSON.stringify(data.body));

        let $ = cheerio.load(data.body);
        // console.log($('h2.title').text());
        writeFile(savePath, $(selecter));
    })
}

let baseUrl = "https://gangkou.51240.com"

// 获取所有国家的港口路径
function getAllCountry() {
    fs.readFile('./data/allCountry.html', function (err, data) {
        if (err) {
            console.log('错啦！！！', err);
        } else {
            var text = data.toString('utf-8');

            let $ = cheerio.load(text);

            // let queryRst = $("#abc");
            let countryTable = $("#main_content table").eq(1);
            let aTags = $(countryTable).find('a');

            let aTagArr = []

            $(aTags).each((i, aTag) => {
                let jqTag = $(aTag);
                let aTagObj = {
                    url: baseUrl + jqTag.attr('href'),
                    text: jqTag.text()
                }
                aTagArr.push(aTagObj)
            })
            // console.log(aTagObj);
            writeFile("./data/allCountry.json", JSON.stringify(aTagArr))
        }
    })
};

// 获取某个国家的具体港口的html
function getPortsByCountryHtml() {
    getHtml("https://gangkou.51240.com/%E5%AE%89%E5%93%A5%E6%8B%89__gangkousou/", "./data/portsByCountry.html", "#main_content table table")
}

// 从文件获取某个国家的具体港口的json
function getPortsByCountryJson() {
    fs.readFile('./data/portsByCountry.html', function (err, data) {
        if (err) {
            console.log('错啦！！！', err);
        } else {
            let text = data.toString('utf-8');
            let $ = cheerio.load(text);

            let trTags = $("tr");

            let trArr = []

            trTags.each((i, trTag) => {
                if (i < 1) {
                    return; // this is equivalent of 'continue' for jQuery loop
                }
                let trObj = {};
                let tdTags = $($(trTag).find('td'));
                tdTags.each((j, tdTag) => {
                    switch (j) {
                        case 0:
                            trObj.code = $($(tdTag).find("a")).text();
                            break;
                        case 1:
                            trObj.name = $(tdTag).text();
                            break;
                        case 2:
                            trObj.country = $(tdTag).text();
                            break;
                        case 3:
                            trObj.line = $(tdTag).text();
                            break;
                    }
                    ;
                })
                trArr.push(trObj);
                // console.log(trObj);
            })
            writeFile("./data/portsByCountry.json", JSON.stringify(trArr))
        }
    })
}


// 从网络获取某个国家的具体港口的json
function getPortsByCountryJsonByNet(url) {
    request.get(url, function (err, data) {
        if (err) {
            console.log('错啦！！！', err);
        } else {
            let $ = cheerio.load(data.body);

            let trTags = $("tr");

            let trArr = []

            trTags.each((i, trTag) => {
                if (i < 1) {
                    return; // this is equivalent of 'continue' for jQuery loop
                }
                let trObj = {};
                let tdTags = $($(trTag).find('td'));
                tdTags.each((j, tdTag) => {
                    switch (j) {
                        case 0:
                            trObj.code = $($(tdTag).find("a")).text();
                            break;
                        case 1:
                            trObj.name = $(tdTag).text();
                            break;
                        case 2:
                            trObj.country = $(tdTag).text();
                            break;
                        case 3:
                            trObj.line = $(tdTag).text();
                            break;
                    }
                    ;
                })
                trArr.push(trObj);
                // console.log(trObj);
            })
            appendFile("./data/allPort.json", JSON.stringify(trArr) + ",")
        }
    })
}


function appendFile(url, data) {
    // fs.writeFile('./data/allCountry.html', data, function (err) {
    fs.appendFile(url, data, function (err) {
        if (err) {
            console.log('错啦！！！', err);
        } else {
            console.log('ok.');
        }
    })
}

function writeFile(url, data) {
    // fs.writeFile('./data/allCountry.html', data, function (err) {
    fs.writeFile(url, data, function (err) {
        if (err) {
            console.log('错啦！！！', err);
        } else {
            console.log('ok.');
        }
    })
}

function allPorts() {
    // 解析allCountry.json
    let allCountry = fs.readFileSync("./data/allCountry.json");
    for (let country of JSON.parse(allCountry.toString('utf-8'))) {
        //  调用 getPortsByCountryJson方法
        getPortsByCountryJsonByNet(country.url);
    }
}

function contactArray() {
    let str = fs.readFileSync('./data/allPort.json');
    const source = JSON.parse(str.toString("utf8"));
    const allPort = []
    for(let country of source) {
        allPort.push(...country);
    }

    writeFile('./data/ports.json', JSON.stringify(allPort))
}

function main() {
    // getAllCountry()
    // getPortsByCountry()
    // getPortsByCountryHtml()
    // getPortsByCountryJson()
    // allPorts();
    contactArray();
    {
        "code": "BEPAR",
        "name": "帕拉库（PARAKOU）",
        "country": "贝宁",
        "line": "东非线"
    },

    {
        "code": "BEPAR",
        "name": "帕拉库",
        "ENName": "PARAKOU",
        "country": "贝宁",
        "line": "东非线"
    }
}

main()