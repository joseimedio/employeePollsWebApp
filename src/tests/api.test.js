import { saveQuestion} from "../utils/api";


describe('saveQuestion', () => {
    const author = "Author";

    it('will throw an error if the wrong input in provided.', async () => {
        try {
            await saveQuestion({author})
        } catch (err) {
            expect(err).toEqual("Please provide optionOneText, optionTwoText, and author");
        }
    });
});

