const async = require('async')
const request = require('request')
const moment = require('moment')
const mysql = require('../db/mysqlQuery')
const oracle = require('../db/oracleQuery')
const common = require('../js/common')

exports.carInfo = (req, callback) => {
    const reqParams = req.params
    let reqQuerys = req.query
    if(req.method == 'POST') reqQuerys  = req.body

    const params = {}

    // oracle example
    oracle.checkApiInfo(params)
	.then(rows => {
        return callback(null, rows)
    })
	.catch(err => {
        const errObj = {
            error: err,
            message: err.message
        }
        callback(errObj,null)
    })

    // // mysql example
    // mysql.checkApiInfo(params, (error, rows) => {
    //     if(error){
    //         const errObj = {
    //             error: error,
    //             message: error.message
    //         }
    //         callback(errObj,null)
    //     }else{
    //         return callback(null, rows)
    //     }
    // })

    // // api request example
    // var reqMap = {
    //     name : 'JangTaeHee',
    //     age : 31,
    //     sex : 'male'
    // };
    // const bodyString = encodeURIComponent(JSON.stringify(reqMap))
    // const options = {
    //     url: 'url',
    //     method: 'POST',
    //     rejectUnauthorized: false,
    //     headers: {
    //         'Content-Type': 'application/x-www-form-urlencoded'
    //     },
    //     body:'request='+bodyString
    // }
    // request(options, function (error, response, body) {
    //     if(error){
    //         const errObj = {
    //             error: error,
    //             message: error.message
    //         }
    //         callback(errObj, null)
    //     }else{
    //         const resultJson = JSON.parse(decodeURIComponent(body))
    //         return callback(null, resultJson[0])
    //     }
    // })
}