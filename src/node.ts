import { Data } from "./data.js";

export class Node<K, V> {
    data: Data<K, V>;
    left: Node<K, V> | null;
    right: Node<K, V> | null;

    constructor(data: Data<K, V>, left: Node<K, V> | null, right: Node<K, V> | null) {
        this.data = data;
        this.left = left;
        this.right = right;
    }
}
