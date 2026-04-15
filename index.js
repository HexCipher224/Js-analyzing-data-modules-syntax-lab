//Required datejs at the top
require('datejs');

//step 1: combineUsers function creation
function combineUsers(...args) {
  //step 2:initialize return object
  const combinedObject = {
    users: []
  };

  //step 3and 4: loop through each argument and merge arrays
  args.forEach(element => {
    combinedObject.users.push(...arr);
  });

  //step 5: add today's date in M/d/yyyy format
  combinedObject.merge_date = new Date().toString("M/d/yyyy");
}

  // step 7: return object
  return combinedObject;


module.exports = {
  ...(typeof combineUsers !== 'undefined' && { combineUsers })
};