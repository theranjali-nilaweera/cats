import { getRemoteCats } from './remote/remoteCatService';
import { createLog } from '../logs/logging';
import Cat from './Cat';
const log = createLog(__filename);

export const getCats = async (): Promise<any> => {
    log.info('getCats calling the remote service');
    const allCats = await getRemoteCats();
    const topCats = getFriendlyCats(allCats);
    return topCats.map((cat : Cat) => cat.breed);
};

export const getFriendlyCats = (unfilteredCats: any = []): [] => {
    const sortedFriendlyCats = (unfilteredCats || []).map(originalCat => {
        const cat = new Cat(
            originalCat.id,
            originalCat.name,
            originalCat.child_friendly,
            originalCat.stranger_friendly,
            originalCat.dog_friendly
        );
        cat.friendlyIndex = cat.calculateWeightedIndex();
        return cat;
    }).sort((catA: Cat, catB: Cat) => {
        return catB.friendlyIndex - catA.friendlyIndex;
    });
    log.info({ ...sortedFriendlyCats })
    return sortedFriendlyCats.length >= 4 ? sortedFriendlyCats.slice(0, 5) : sortedFriendlyCats;
}