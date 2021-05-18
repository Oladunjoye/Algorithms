class TrieNode {
  constructor(val) {
    this.char = val;
    this.children = [];

    for (let i = 0; i < 26; i++) {
      this.children[i] = null;
    }
    this.endWord = false;
  }
}
