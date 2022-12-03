import userData from "./data.js";

function transformData(data) {
  return data.map((user) => {
    return {
      fullName: `${user.name.first} ${user.name.last}`,
      birthday: new Date(user.dob.date).toDateString(),
    };
  });
}

console.log(transformData(userData));
