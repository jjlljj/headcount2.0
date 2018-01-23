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
      let schoolData = !isNaN(Data) ? Math.round(Data * 1000)/1000 : 0

      if (!acc[Location]) acc[Location] = { location: Location.toUpperCase(), data: {} }

      acc[Location].data = { ...acc[Location].data, 
        [TimeFrame]: schoolData }

      return acc;
    }, {})
  }

  findByName(name) {
    if (!name) return undefined

    let dataKeys = Object.keys(this.data);

    let foundSchool = dataKeys.find( school => {
      return school.toUpperCase() === name.toUpperCase();
    })

    return this.data[foundSchool]
  }

  findAllMatches(name) {

    let dataKeys = Object.keys(this.data)

    return dataKeys.reduce((acc, school) => {
      if (!name) {
        acc.push(this.data[school])
      } else if (school.toUpperCase().includes(name.toUpperCase())) {
        acc.push(this.data[school])
      }
      return acc;
    }, [])
  }
}
