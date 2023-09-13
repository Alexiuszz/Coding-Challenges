function convertCSVtoJSON(csvData) {
  const lines = csvData.split("\n");
  const headers = lines[0].split(",");

  const jsonData = lines.slice(1).map((line) => {
    const values = line.split(",");
    return headers.reduce((obj, header, index) => {
      obj[header.trim()] = values[index].trim();
      return obj;
    }, {});
  });

  return jsonData;
}
const csvData = `key1,value1
key2,value2
key3,value3
left.0,true
left.1,false
left.2,true
left.3,false
left.4,true
left.5,true
left.6,false`;

const jsonData = convertCSVtoJSON(csvData);
console.log(jsonData);
