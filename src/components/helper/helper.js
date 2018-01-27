export default class DistrictRepository {

  constructor(data) {
    this.data = this.dataHelper(data);
  }


  dataHelper(data) {
    return data.reduce((acc, dp) => {
      let { Data, Location, TimeFrame } = dp;

      let schoolData = !isNaN(Data) ? Math.round(Data * 1000)/1000 : 0;

      if (!acc[Location.toUpperCase()]) {
        acc[Location.toUpperCase()] = { 
          location: Location.toUpperCase(), data: {} 
        };
      }

      acc[Location.toUpperCase()].data = { ...acc[Location.toUpperCase()].data, 
        [TimeFrame]: schoolData };


      return acc;
    }, {});
  }

  findByName(name) {
    if (!name) return undefined;

    let dataKeys = Object.keys(this.data);
    let foundSchool = dataKeys.find(school => {
      return school === name.toUpperCase();
    });

    return this.data[foundSchool];
  }

  findAllMatches(name) {
    let dataKeys = Object.keys(this.data);
    
    if (!name) {
      return dataKeys.map(school => this.data[school.toUpperCase()]);
    }

    return dataKeys.filter(school => {
      return school.includes(name.toUpperCase());
    }).map( school => this.data[school]);
  }

  findAverage(name) {
    if (!name) return undefined;
    let schoolDataPoints = Object.values(this.data[name.toUpperCase()].data);

    let number = schoolDataPoints.length;
    let total = schoolDataPoints.reduce((acc, num) => {
      acc += num;

      return acc; 
    }, 0);

    return Math.round( (total / number) * 1000)/1000;
  }

  compareDistrictAverages(name1, name2) {
    let districtAv1 = this.findAverage(name1);
    let districtAv2 = this.findAverage(name2);

    let compared = Math.round( (districtAv1 / districtAv2) * 1000)/1000;
    
    return { [name1.toUpperCase()]: districtAv1, 
      [name2.toUpperCase()]: districtAv2, 
      compared };
  }  
}
