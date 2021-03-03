import { v4 as uuidv4 } from 'uuid';

export default class List {
    constructor() {
        this.items = [];
    }
    addItem(count, unit, ingredient) {
        const item = {
            id: uuidv4().replaceAll('-',''),
            count,
            unit,
            ingredient
        }
        this.items.push(item);
        return item;
    }

    deleteItem(id) {
        const index = this.items.findIndex(el => el.id === id)
        // [2,4,8] splice(1,1) -> returns 4, original array is [2,8] -mutates array
        // [2,4,8] slice(1,1) -> returns 4, original array is [2,4,8] - doesnt mutate array
        this.items.splice(index, 1);
    }

    updateCount(id, newCount) {
        this.items.find(el => el.id === id).count = newCount;
    }
}