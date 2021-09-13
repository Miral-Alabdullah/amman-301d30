'use strict';

const catModel = require('../models/cat.model');


const getCats = (request, response) => {

  catModel.find((error, catsData) => {
    response.json(catsData)
  });

};

const createCat = (request, response) => {

  // console.log("Request Data Object===========");
  // console.log(request.body);
  // console.log("==============================");
  /**
   * Example Request Body Data
   * { 
   *  cat_name: "Nimnim",
   *  cat_breed:"White OrangeTabby"
   * 
   * }
   */
  const { cat_name, cat_breed, cat_img } = request.body;


  const newCat = new catModel({
    cat_name, cat_breed, cat_img
  });

  newCat.save();

  response.json(newCat);

}

const deleteCat = (request, response) => {
  console.log(request.params);
  const catId = request.params.cat_id;

  catModel.deleteOne({ _id: catId }, (error, deletedData) => {

    response.json(deletedData);
  });

}

module.exports = {
  getCats,
  createCat,
  deleteCat
}
