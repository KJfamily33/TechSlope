## Usage

##### [www.propertyusage.com/api/usage](http://www.propertyusage.com/api/usage)

**Method:** GET

**Accepted parameters:** String “address” [required], Boolean “details” [assumed false]

**Header parameters:** String “key”

**Returned Type:** JSON

**Return:** *Assuming all fields non-null, where “type” is commercial type*

```{ match: string, usages: [ {“type”: int}, {“type”: int}, ...], details: { population: int, dailyTraffic: int, crimeRate: float, medianIncome: float, unemploymentRate: float, povertyRate: float, competing: { count: int, business: [ {name: string, lat: float, lon: float}, ... ] }, complementing: { count: int,  business: [ {name: string, lat: float, lon: float}, ... ] }, opportunityZone: {name: string, link: string, details: string, geoID: int, geoShape: shp } , enterpriseZone: {name: string, link: string, details: string, geoID: int, geoPoly: json}  } }```

[View Structure Here](https://jsoneditoronline.org/?id=38a8fb67cdd24c2b8c7d713ea5c07c89)

**Example:**

Get usage and details for “1003 Grand Ave. Grand Junction”


[www.propertyusage.com/api/usage?address=1003%20Grand%20Ave.%20Grand%20Junction&details=true](http://www.propertyusage.com/api/usage?address=1003%20Grand%20Ave.%20Grand%20Junction&details=true)

  
```{ match: “1003 Grand Ave. Grand Junction, CO”, usages: [ {“Health Care”: .8}, {“Office”: .2}, ...], details: { population: 2045, dailyTraffic: 5000, crimeRate: 1.1, medianIncome: 68.94, unemploymentRate: 5.2, povertyRate: 28.90, competing: { count: 1, business: [ {name: “Paladina Health Clinic”, lat: 39.069010, lon: -108.561330}] }, opportunityZone: {name: “Mesa 2”, link: “[https://www.cdfifund.gov/Pages/Opportunity-Zones.aspx](https://www.cdfifund.gov/Pages/Opportunity-Zones.aspx)”, details: “Low-Income Community: NMTC”, censusTract: 08077000200, geoPoly: json} } }```

[View Structure Here](https://jsoneditoronline.org/?id=ecd994e4f6b749cbb195efbd72842feb)

## Zone

##### [www.propertyusage.com/api/zone](http://www.propertyusage.com/api/usage)

**Method:** GET

**Accepted parameters:** String “address” [required], Boolean “details” [assumed false]

**Header parameters:** String “key”

**Returned Type:** JSON

**Return:** *Assuming all fields non-null*

```{ match: string, zone: [ {name: string, details: { description: string, geoPoly: json}}, ...] }```

**Example:**

Get zoning and details for “2521 Weslo Ct.”

##### [www.propertyusage.com/api/zone?address2521%20Weslo%20ct.](http://www.propertyusage.com/api/usage)
 
```{ match: “2521 Welso Ct. Grand Junction, CO”, zone: [ {name: “I0-1”, details: { description: “Light industrial”, geoPoly: null}], futureZone: [ {I0-2: “Medium industrial”}]}```
