// Example 1: Using 'var'
var x = 10;
var x = 100; // Redeclaration allowed with 'var'
console.log(x); // Output: 100

// Example 2: Using 'let'
let y = 10;
let y = 100; // Error: Cannot redeclare 'y' using 'let'
console.log(y);

// Example 3: Block scope with 'var'
{
    var z = 10;
    console.log(z); // Output: 10
}
console.log(z); // Output: 10 (var is function-scoped, not block-scoped)

// Example 4: Block scope with 'let'
{
    let a = 10;
    console.log(a); // Output: 10
}
console.log(a); // Error: 'a' is not defined outside the block

// Example 5: Multiple 'let' declarations in different blocks
{
    let b = 10;
    console.log(b); // Output: 10
}
{
    let b = 11;
    console.log(b); // Output: 11
}
{
    let b = 12;
    console.log(b); // Output: 12
}

// Example 6: Using 'var' before declaration
console.log(c); // Output: undefined (Hoisting occurs with 'var')
var c = 10;

// Example 7: Using 'let' before declaration
console.log(d); // Error: Cannot access 'd' before initialization
let d = 10;
