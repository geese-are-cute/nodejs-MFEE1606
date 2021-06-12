// 引入 axios
const axios = require("axios");

axios
  .get(
    "https://www.104.com.tw/jobs/search/?cat=2007001006,2007001004,2013001006&jobsource=2018indexpoc&ro=0"
  )
  .then(function (response) {
    console.log(response);
  });
