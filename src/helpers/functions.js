// Functions helper

export default {
  jsonToFormData: jsonObj => {
    var formData = new FormData();
    for (var key in jsonObj) {
      formData.append(key, jsonObj[key]);
    }
    return formData;
  }
};
