import axios from "axios";

export const UploadFile = async (file, type) => {
  var bodyFormData = new FormData();
  bodyFormData.append("file", file);
  bodyFormData.append("upload_preset", "j83n0nkq");
  bodyFormData.append("public_id", "333");
  bodyFormData.append("api_key", "793869286496228");
  bodyFormData.append("folder", "avatar_User");
  axios
    .post(
      `https://api.cloudinary.com/v1_1/dxphlzgvx/${type}/upload`,
      bodyFormData
    )
    .then((res) => {
      console.log(res);
      return res
    })
    .catch((err) => {
      console.log(err);
    });
};
