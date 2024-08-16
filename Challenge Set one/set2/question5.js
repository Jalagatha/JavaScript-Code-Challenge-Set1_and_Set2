
//.....
function myPrefix(prefixString) {
    
    if (prefixString.length === 0) return "";

    // Start with the first string as the prefix
    let prefix = prefixString[0];

    // Iterate through the rest of the strings
    for (let i = 1; i < prefixString.length; i++) {
        // Compare the current prefix with each string in the array
        while (prefixString[i].indexOf(prefix) !== 0) {
            // Reduce the prefix by one character from the end
            prefix = prefix.slice(0, -1);
            // If the prefix is empty, there is no common prefix
            if (prefix === "") return "";
        }
    }

    return prefix;
}

console.log(myPrefix(["flower", "flow", "flight"]));

