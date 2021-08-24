//  "abcdefghijklmnopqrstuvwxyz".split("").reduce((obj, c) => ((obj[c] = {}), obj), {}),

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
    let index;
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

  search(key) {
    let current = this.root;
    let index = 0;

    for (let level = 0; level < key.length; level++) {
      index = this.getIndex(key[level]);

      if (current.children[index] === null) {
        return false;
      }

      current = current.children[index];
    }

    if (current != null && current.isEndWord) {
      return true;
    }

    return false;
  }

  delete(key) {}
}

class TrieNodeB {
  constructor(val) {
    this.val = val;
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

class TrieB {
  constructor() {
    this.root = new TrieNodeB('');
    this.current = this.root
    this.prefix = []
  }

  getIndex(val) {
    return val.charCodeAt() - 'a'.charCodeAt();
  }

  insert(key) {
    if (key === null) return false;

    let current = this.root;
    let index;
    key = key.toLowerCase();
    for (let level = 0; level < key.length; level++) {
      index = this.getIndex(key[level]);

      // console.log('****' + index);
      if (current.children[index] === null) {
        current.children[index] = new TrieNodeB(key[index]);
      }

      current = current.children[index];
    }
    current.markAsLeaf();
  }


  search(char){
    if(char == null) return false
    this.prefix.push(char)
    let temp = this.prefix.join('')
    let idx = this.getIndex(char)

    if(this.current.children[idx] === null) return []
    this.current = this.current.children[idx]


    function dfs(node,str,list = []){

      if(node.isEndWord)  list.push(str)
      if(list.length === 3) return list

      for(let [idx, child] of node.children.entries()){
        if(!child)continue
        const currentChar = String.fromCharCode(idx + 'a'.charCodeAt())
        // const currentChar = child.char
        dfs(child, str+currentChar, list)
      }

      return list
    }


    return dfs(this.current, temp)

  }
}

let trie = new TrieB();

// tr.insert('cda');
// tr.insert('mouse');
// tr.insert('bass');


// console.log(tr.root)
let word = 'mouse';
let products = ["mobile","mouse","moneypot","monitor","mousepad"]
products.forEach(word => trie.insert(word));
let result =[]
for(let i = 0; i < word.length; i++){
result[i] = trie.search(word[i])
if(!result[i].length) break;
}

console.log(result)
