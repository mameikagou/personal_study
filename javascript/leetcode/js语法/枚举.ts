
enum FileAccess {
    // constant members
    None,
    Read    ,
    Write   = 1 + 3,
    ReadWrite  = Read | Write,
    // computed member
    G = "123".length
}
console.log(FileAccess.None,FileAccess.Read,FileAccess.Write,FileAccess.ReadWrite,FileAccess.G);

enum Enum {
    A
}
let a = Enum.A;
let nameOfA = Enum[a]; // "A"
console.log(a,nameOfA);

const enum Directions {
    Up,
    Down,
    Left,
    Right
}
console.log(Directions.Right)
export{}