
import * as readlineSync from "readline-sync"
import { BinaryTreeSearch } from "./binarytreesearch.js";
import { Data } from "./data.js";
import { Menu } from "./menu.js";



let tree = new BinaryTreeSearch<Number, String>();
Menu.printMenu();
let exit = false;

while (!exit){
    console.log("\n");
    let item = readlineSync.question('item: ');
    switch (item) {
        case ("1"):{
            let keystr = readlineSync.question('key(number): ');
            if (isNaN(Number(keystr))){
                console.log("incorrect input");
                continue;
            }
            let key:number = Number(keystr);
            let value = readlineSync.question('value(string): ');
            tree.add(new Data<Number, String>(key, value));
            console.log("added");
            break;
        }
        case ("2"):{
            let keystr = readlineSync.question('key(number): ');
            if (isNaN(Number(keystr))){
                console.log("incorrect input");
                continue;
            }
            let key:number = Number(keystr);
            let res = tree.remove(key);
            if (!res)
                console.log("not found");
            else{
                console.log("removed");
            }
            break;
        }
        case ("3"):{
            let keystr = readlineSync.question('key(number): ');
            if (isNaN(Number(keystr))){
                console.log("incorrect input");
                break;
            }
            let key:number = Number(keystr);
            let value: String | null = tree.search(key);
            if (value == null){
                console.log("not found");
                break;
            }
            else{
                console.log("value: " + value);
                break;
            }

        }
        case ("4"):{
            tree.printTree();
            break;
        }
        case ("5"):{
            Menu.printMenu();
            break;
        }
        case ("6"):{
            exit = true;
            break;
        }
        default:{
            console.log("incorrect input");
            break;
        }

    }
}
