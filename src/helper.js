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
      let { Data, Location, TimeFrame } = dp
      let schoolData
      
      if( Number.isInteger(Data) ) {
        schoolData = Data
      } else {
        schoolData = !isNaN(Data) ? parseFloat(Data.toFixed(3)) : 0;
      }

      if ( !acc[Location.toUpperCase()] ) {
        acc[Location.toUpperCase()] = { location: Location.toUpperCase(), data: {} } 
      }

      acc [Location.toUpperCase()].data = { ...acc[Location.toUpperCase()].data, [TimeFrame]: schoolData }

      return acc;
    }, [])

  }

  findByName(name) {
    if (!name) return undefined

    let dataKeys = Object.keys(this.data);
    let foundSchool = dataKeys.find(school => {
      return school === name.toUpperCase();
    })

    return this.data[foundSchool]
  }

  findAllMatches(name) {
    let dataKeys = Object.keys(this.data);
    
    if (!name) {
      return dataKeys.map(school => this.data[school.toUpperCase()])
    }

    return dataKeys.filter(school => {
      return school.includes(name.toUpperCase());
    }).map( school => this.data[school])
  }

}
