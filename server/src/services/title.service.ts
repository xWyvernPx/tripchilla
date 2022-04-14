import Title, { ITitle } from "../models/user/title.model";

interface ITitleService {
}
class TitleService implements ITitleService {
    async createUpdateTitle(title : ITitle) {
        try {
            const rs = await Title.upsert({...title});
            return rs;
        }
        catch(err) {
            console.log(err)
            return {message : err}
        }
    }
}
export default new TitleService();