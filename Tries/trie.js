class TrieNode {
  constructor(val) {
    this.char = val;
    this.children = [];

    for (let i = 0; i < 26; i++) {
      this.children[i] = null;
    }
    this.isEndWord = false;
  }

  markAsLeaf() {
    this.isEndWord = true;
  }
  unmarkAsLeaf() {
    this.isEndWord = false;
  }
}

class Trie {
  constructor() {
    this.root = new TrieNode('');
  }

  getIndex(letter) {
    //return the index to be used for the children array
    return letter.charCodeAt() - 'a'.charCodeAt();
  }

  insert(key) {
    if (key === null) {
      return false;
    }

    let current = this.root;
    let index
    key = key.toLowerCase();

    for (let level = 0; level < key.length; level++) {
     index = this.getIndex(key[level]);

      if (current.children[index] === null) {
        current.children[index] = new TrieNode(key[level]);
      }

      current = current.children[index];
    }

    current.markAsLeaf();
  }

  search(key) {}

  delete(key) {}
}
