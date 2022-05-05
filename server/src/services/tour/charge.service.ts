import axios from "axios";
import { User } from "../../models";
import axiosClient from "../../utils/axiosClient";

class ChargeService {
  async getCutomerId(userid: string) {
    const user = await User.findOne({
      where: {
        userid: userid,
      },
      raw: true,
    });
    if (user) {
      axios.get("https");
    } else return null;
  }
}
