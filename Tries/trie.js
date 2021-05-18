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

  insert(key, value) {
    
  }

  search(key) {}

  delete(key) {}
}
