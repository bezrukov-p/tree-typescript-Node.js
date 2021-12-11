import { Data } from "./data.js";
import { Node } from "./node.js";

export class BinaryTreeSearch<K, V> {
    private root: Node<K, V> | null;


    constructor() {
        this.root = null;
    }

    isEmpty(): boolean{
        return this.root == null;
    }

    add(data: Data<K, V>): boolean{
        if (this.search(data.key) == null){
            this.root = this.insert(this.root, data);
            return true;
        }
        return false;
    }

    private insert(x: Node<K, V> | null, data: Data<K, V>): Node<K, V> | null{
        if (x == null)
            return new Node<K, V>(data, null, null);
        else if (data.key < x.data.key)
            x.left = this.insert(x.left, data);
        else if (data.key > x.data.key)
            x.right = this.insert(x.right, data)
        return x;
    }

    search(key: K): V | null{
        return this.searchRecursive(this.root, key);
    }

    private searchRecursive(x : Node<K, V> | null, k : K): V | null{
        if (x == null) {
            return null;
        }
        else if (k == x.data.key){
            return x.data.value;
        }
        if (k < x.data.key)
            return this.searchRecursive(x.left, k);
        else
            return this.searchRecursive(x.right, k);
    }

    remove(key: K): boolean{
        if (this.search(key)) {
            this.root = this.delete(this.root, key);
            return true;
        }
        return false;

    }

    private delete(x: Node<K, V> | null, key: K): Node<K, V> | null{
        if (x == null)
            return x;
        if (key < x.data.key)
            x.left = this.delete(x.left, key);
        else if (key > x.data.key)
            x.right = this.delete(x.right, key);
        else if (x.left != null && x.right != null){
            x.data.key = this.minimum(x.right).data.key;
            x.right = this.delete(x.right, x.data.key);
        }
        else{
            if (x.left != null)
                x = x.left;
            else if (x.right != null)
                x = x.right;
            else
                x = null;
        }
        return x;
    }

    private minimum(x: Node<K, V>): Node<K, V>{
        if (x.left == null)
            return x;
        return this.minimum(x.left)
    }

    private maximum(x: Node<K, V>): Node<K, V>{
        if (x.right == null)
            return x;
        return this.maximum(x.right);
    }

    printTree(): void{
        this.inorderTraversal(this.root);
    }

    private inorderTraversal(x: Node<K, V> | null): void{
        if (x != null){
            this.inorderTraversal(x.left);
            console.log(x.data.key + " : " + x.data.value);
            this.inorderTraversal(x.right);
        }
    }
}