class CustomWalker {
    constructor(nodes) {
        this.nodes = nodes;
        this.currentIndex = 0;
    }

    get prev() {
        if (this.currentIndex > 0) {
            this.currentIndex--;
            return this.nodes[this.currentIndex];
        }
        return null; // No previous node available
    }

    // ... other methods like next, current, etc.
}

// Example usage:
const nodes = ['node1', 'node2', 'node3'];
const walker = new CustomWalker(nodes);

console.log(walker.prev); // Output: null (initially no previous node)
walker.currentIndex = 2; // Setting index to 2 (pointing to 'node3')
console.log(walker.prev); // Output: 'node2'
