import { GroceryList } from "./GroceryList.js";
export class Template {
    constructor(container) {
        this.container = container;
    }
    render(item, heading, pos) {
        const li = document.createElement('li');
        const h4 = document.createElement('h4');
        h4.innerText = heading;
        li.append(h4);
        const p = document.createElement('p');
        p.innerText = item.format();
        li.append(p);
        const deleteButton = document.createElement('button');
        deleteButton.innerText = 'DELETE';
        deleteButton.style.backgroundColor = 'red';
        li.appendChild(deleteButton);
        const updateButton = document.createElement('button');
        updateButton.innerText = 'UPDATE';
        updateButton.style.backgroundColor = 'green';
        li.appendChild(updateButton);
        if (pos === 'start') {
            this.container.prepend(li);
        }
        else {
            this.container.append(li);
        }
        deleteButton.addEventListener('click', () => {
            li.remove();
        });
        updateButton.addEventListener('click', () => {
            if (item instanceof GroceryList) {
                const upItem = prompt('Enter new item: ');
                const upQuantity = prompt('Enter new quantity: ');
                const upStore = prompt('Enter new store name: ');
                if (upItem && upQuantity && upStore) {
                    const newItem = item;
                    newItem.item = upItem;
                    newItem.quantity = parseInt(upQuantity);
                    newItem.store = upStore;
                    h4.innerText = heading;
                    p.innerText = newItem.format();
                }
            }
        });
    }
}
