// module.exports.getDate = getDate;

exports.getDate = () => {
  const today = new Date();
  const options = {
    weekday: "long",
    day: "numeric",
    month: "long",
  };
  //   let day = today.toLocaleDateString("en-US", options);
  return today.toLocaleDateString("en-US", options);
  //   return day;
};

// module.exports.getDay = getDay;

exports.getDay = getDay;

function getDay() {
  const today = new Date();
  const options = {
    weekday: "long",
  };
  //   let day = today.toLocaleDateString("en-US", options);
  return today.toLocaleDateString("en-US", options);
  //   return day;
}
