
class Group {
    create() {
        this.values = new Set[];
        add(value) {
            if (!this.has(value)) {
                this.values.add(value);
            }
        }
        delete (value) {
            this.values.delete(value);
        }
        has(value){
            return this.values.has(value);
        }
    }
}

let group = Group.from([10, 20]);
console.log(group.has(10));

console.log(group.has(30));

group.add(10);
group.delete(10);
console.log(group.has(10));
