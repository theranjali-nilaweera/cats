import {createLog} from './../logs/logging';
import {getFriendlyCats} from './catService';
import {allCats,friendlyCats} from './cats.mock';
import Cat from './Cat';
const log = createLog(__filename);

describe('catService.spec', () => {
    let remoteCatServiceMock;

    it('WHEN all cats are given SHOULD find top friendly cats', async () => {
        // arrange
        const remoteCats = [...allCats];
        const sortedFriendlyCats = [...friendlyCats];
        let result = new Array<any>();
        // act
        result = getFriendlyCats(remoteCats);

        // assert
        expect(result.length).toBe(3);
        expect(result[0]).toBeDefined;
        expect(result[0].breed).toBe(sortedFriendlyCats[0].breed);
        expect(result[1].breed).toBe(sortedFriendlyCats[1].breed);
        expect(result[2].breed).toBe(sortedFriendlyCats[2].breed);
    });
});
