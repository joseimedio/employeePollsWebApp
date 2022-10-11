import { _saveQuestion, _saveQuestionAnswer} from "../utils/_DATA";


describe('_saveQuestion', () => {
    const author = "Author";
    const optionOneText = "a";
    const optionTwoText = "b";

    const input = {
        author,
        optionOneText,
        optionTwoText,
    };

    it('will return an object with five properties: id, author, optionOne, optionTwo, timestamp. All of them properly populated.', async () => {
        var result = await _saveQuestion(input);
        expect(Object.keys(result)).toEqual(["id", "timestamp", "author", "optionOne", "optionTwo"]);
        expect(result.id).not.toEqual("");
        expect(result.timestamp).not.toEqual("");
        expect(result.author).not.toEqual("");
        expect(result.optionOne.text).not.toEqual("");
        expect(result.optionOne.votes).toEqual([]);
        expect(result.optionTwo.text).not.toEqual("");
        expect(result.optionTwo.votes).toEqual([]);
    });
    it('will throw an error if the wrong input in provided.', async () => {
        try {
            await _saveQuestion({author})
        } catch (err) {
            expect(err).toEqual("Please provide optionOneText, optionTwoText, and author");
        }
    });
});

describe('_saveQuestionAnswer', () => {
    it ('will return <true> if the right input is provided.', async () => {
        var result = await _saveQuestionAnswer({
            authedUser: "mtsamis",
            qid: "8xf0y6ziyjabvozdd253nd",
            answer: "optionTwo",
        })

        expect(result).toBeTruthy();
    });

    it('will throw an error if the wrong input in provided.', async () => {
        try {
            await _saveQuestionAnswer({
                authedUser: "test",
            })
        } catch (err) {
            expect(err).toEqual("Please provide authedUser, qid, and answer");
        }
    });


});