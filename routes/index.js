const express = require('express');
const router = express.Router();
const useragent = require('express-useragent');


/* GET home page. */

router.get('/', (req, res)=> {

    const soft = useragent.parse(req.headers['user-agent']);
    const ip = req.headers['x-forwarded-for'] || req.connection.remoteAddress;
    const lang = req.headers['accept-language'].split(',')[0];

    console.log( JSON.stringify(soft));
    res.end( `{"ipaddress": "${ip}", "language" : "${lang}" , "software": "${soft.platform} ${soft.os}"}`)
});

module.exports = router;
