import {createLog} from './../logs/logging';
import {getCats} from './catService';
import { getRemoteCats } from './remote/remoteCatService';
import {allCats,friendlyCats} from './cats.mock';
const log = createLog(__filename);
jest.mock('./remote/remoteCatService');

describe('catService.spec', () => {
    let remoteCatServiceMock;

    it('WHEN all cats are given SHOULD find top friendly cats', async () => {
        // arrange
        (getRemoteCats as jest.Mock).mockResolvedValue(allCats);

        // act
        const result = await getCats();

        // assert
        expect(result.length).toBe(3);
        expect(result[0]).toBeDefined;
        expect(result[0]).toBe(friendlyCats[0].breed);
        expect(result[1]).toBe(friendlyCats[1].breed);
        expect(result[2]).toBe(friendlyCats[2].breed);
    });
});
