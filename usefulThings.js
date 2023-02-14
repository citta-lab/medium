 /**
  Remove properties from given object without altering the original object
  Appraoch 1: using filter, reduce 
  Appraoch 2: using spread operator 
  */


const userProperties = {
  name: "bob",
  age: 23,
  education: "masters",
  job: "teacher"
};

<!-- Appraoch 1 --> 

/** pure functional way */
const removeProperties = (obj, key) => {
  /** step 1: remove interested key from given obj */
  return (
    Object.keys(obj)
      .filter((objKey) => {
        return objKey !== key;
      })
      /** step 2: iterative over returned key array, fetch respective values from old obj */
      .reduce((newObj, cur) => {
        newObj[cur] = obj[cur];
        return newObj;
      }, {})
  );
};

console.log(removeProperties(userProperties, "name"));  // {age: 23, education: "masters", job: "teacher"}
console.log(userProperties); // {name: "bob", age: 23, education: "masters", job: "teacher"}

<!-- Appraoch 2 -->
/**
 * 1. What if we want to remove more keys ? then Appraoch 1 function needs to change to handle that 
 */

const { name, ...restWithoutName } = userProperties;
const { name : _name, age, ...restWithoutNameAndAge } = userProperties;
console.log(restWithoutName); // {age: 23, education: "masters", job: "teacher"}
console.log(restWithoutNameAndAge); // {education: "masters", job: "teacher"}


