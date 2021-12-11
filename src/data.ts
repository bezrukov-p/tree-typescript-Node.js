export class Data<K, V> {
    key: K;
    value: V;


    constructor(key: K, value: V) {
        this.key = key;
        this.value = value;
    }
}