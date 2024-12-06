import { UPDATE_NAME } from "../utils/constants";

export const updateProfileName = (payload) => ({
  type: UPDATE_NAME,
  payload,
});
