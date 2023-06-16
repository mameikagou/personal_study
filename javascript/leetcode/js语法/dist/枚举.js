"use strict";
exports.__esModule = true;
var FileAccess;
(function (FileAccess) {
    // constant members
    FileAccess[FileAccess["None"] = 0] = "None";
    FileAccess[FileAccess["Read"] = 1] = "Read";
    FileAccess[FileAccess["Write"] = 4] = "Write";
    FileAccess[FileAccess["ReadWrite"] = 5] = "ReadWrite";
    // computed member
    FileAccess[FileAccess["G"] = "123".length] = "G";
})(FileAccess || (FileAccess = {}));
console.log(FileAccess.None, FileAccess.Read, FileAccess.Write, FileAccess.ReadWrite, FileAccess.G);
var Enum;
(function (Enum) {
    Enum[Enum["A"] = 0] = "A";
})(Enum || (Enum = {}));
var a = Enum.A;
var nameOfA = Enum[a]; // "A"
console.log(a, nameOfA);
console.log(3 /* Right */);
