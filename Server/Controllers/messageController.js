const { request } = require("express");
const fs = require("fs");
const messagesData = require("../Models/Message");
const logger = require('./logger');

const getAll = (req, res) => {
  try{
    res.json(messagesData);
//   logger.dataLogger.log('info', 'Successfuly got list of all objects data')
  }catch(error){
    console.error(error);
    // logger.dataLogger.log('error', 'Error finding objects data')
  }
};

const getMessagesByScreenNumber = (request, respons) => {
  const results = messagesData.filter((message) =>
       message.screens.includes(request.params.screen.charAt(request.params.screen.length - 1))
     );
  try{
  respons.json(results);
//   logger.dataLogger.log('info', `Successfuly got list of all objects with subjects ${request.params.siteId}`)
  }catch(error){
    console.error(error);
    // logger.dataLogger.log('error', `Error finding objects data - subjects ${request.params.siteId}`)
  }
};

module.exports = {
    getAll,
    getMessagesByScreenNumber,
};
