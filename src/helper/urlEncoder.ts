function encodeUrl() {
    //Call a random number (in the range 0..1) to a base36 string (lowercase a-z plus 0-9) and remove some trailing values to create 9 unique character
    return (Math.random().toString(36).slice(8) + Math.random().toString(36).toUpperCase().slice(8))
}

