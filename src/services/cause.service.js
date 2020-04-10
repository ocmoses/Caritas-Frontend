import { Routes } from "../constants";
import axios from "axios";
import { getToken } from "../helpers/utils";

const getAllCauses = async () => {
  return await axios
    .get(
      Routes.all_causes,

      { "Content-Type": "application/json" }
    )
    .then((res) => {
      console.log("All causes gotten", res.data.data);
      return res.data.data;
    })
    .catch((err) => {
      return err;
    });
};

const createCause = async (cause) => {
  let formData = new FormData();
  formData.append("cause_title", cause.causeTitle);
  formData.append("amount_required", parseInt(cause.amountRequired));
  formData.append("brief_description", cause.briefDescription);
  formData.append("charity_information", cause.charityInformation);
  formData.append("additional_information", cause.additionalInformation);
  formData.append("category", "Health");
  formData.append("cause_photos", [
    cause.uploadFiles.image1,
    // cause.uploadFiles.image2,
    // cause.uploadFiles.image3,
    // cause.uploadFiles.image4,
    // cause.uploadFiles.image5,
    // cause.uploadFiles.image6,
  ]);
  formData.append("cause_video", [cause.uploadFiles.video1]);
  formData.append("account_number", 1234567890);
  formData.append(
    "accept_comment_and_review",
    cause.causeOptions.enableComments
  );
  formData.append("watch_cause", cause.causeOptions.enableWatching);
  formData.append("cause_fund_visibility", cause.causeOptions.fundStatus);
  formData.append(
    "share_on_social_media",
    cause.causeOptions.socialMediaSharing
  );

  return await axios({
    method: "post",
    url: Routes.ceate_cause,
    data: formData,
    headers: {
      "Content-Type": "multipart/formdata",
      "x-auth-token": getToken(),
    },
  })
    .then((res) => {
      console.log("All causes gotten", res.data.data);
      return res.data.data;
    })
    .catch((err) => {
      return err;
    });
};

export { getAllCauses, createCause };
