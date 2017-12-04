import {GENERATE_AURAL_UPDATE, generateAuralUpdate, RESTART_GAME, restartGame, MAKE_GUESS, makeGuess} from './actions';

//In each case, we use the corresponding action creator to create an action, passing in some dummy data as the arguments. We then assert that the type of the action and payload contents are correct.

describe('generateAuralUpdate', () => {
    it('Should return the action', () => {
        const action = generateAuralUpdate();
        expect(action.type).toEqual(GENERATE_AURAL_UPDATE);
    });
});

describe('restartGame', () => {
    it('Should return the action', () => {
        const correctAnswer = 'Correct Answer';
        const action = restartGame(correctAnswer);
        expect(action.type).toEqual(RESTART_GAME);
        expect(action.correctAnswer).toEqual(correctAnswer);
    });
});

describe('makeGuess', () => {
    it('Should return the action', () => {
        const guess = 'Guess';
        const action = makeGuess(guess);
        expect(action.type).toEqual(MAKE_GUESS);
        expect(action.guess).toEqual(guess);
    });
});