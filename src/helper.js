export default class DistrictRepository {

  constructor(data) {

    this.data = this.dataHelper(data)
    // in the array will be key value pairs 
    // the key is the school's name
    // the value is an object of all the school's 
    // data (which is a k/v pair of the year and data)
    // data needs to have no duplicates, ie no school dups
  }

  dataHelper(data) {
    return data.reduce((acc, dp) => {
      if (!acc[dp.Location]) acc[dp.Location] = {}
      acc[dp.Location] = { ...acc[dp.Location], [dp.TimeFrame]: [dp.data] }

      return acc;
    }, {})
  }

  findByName(name) {
    //will take a name
   // will return an object of key/value pairs of the years
    // and the value of the 'data'
    // use toFixed(3) to get the decimal
    // if the data return N/A, it should default to zero
    // needs to be case insensitive
  }

  findAllMatches(name) {
    // needs to be case insensitive
    // take a name
    // if there are no match, should return an empty array
    // if there is a match, return an array of matching objects of all data
    // (key with corresponding values)

    // try to reduce through the data
    // return an array



  }

}
