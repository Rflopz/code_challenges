
const brackets = [
    { open: '[', close: ']' },
    { open: '{', close: '}' },
    { open: '(', close: ')' },
]

function lengthOf (text, bracket) {
    // using \\ to scape the characters to the regex
    return [...text.matchAll('\\' + bracket)].length
}

// return false if at least one of the brackets doesn't have a pair
function hasMatchingPairs(text) {
    return brackets
        .map(bracket => lengthOf(text, bracket.open) === lengthOf(text, bracket.close))
        .filter(x => x === false).length > 0 ? false : true;
}

function isBracketOpen (bracket) {
    return brackets.map(x => x.open).includes(bracket)
}

function getOpenFor (closeBracket) {
    return brackets.filter( x => x.close === closeBracket )[0].open
}

function isBalanced (brace) {
    // it'll save the pendints open brackets to close 
    let toClose = []
    
    for (let c of brace) {
        if (isBracketOpen(c))
            toClose.push(c)
        else if ( getOpenFor(c) == toClose.slice(-1) ) 
            toClose.pop()
        else 
            break
    }
    
    return toClose.length === 0
}

function matchingBraces(braces) {
    
    return braces.map( brace => {
        
        if (!hasMatchingPairs(brace))
            return 'NO'
        
        return isBalanced(brace) ? 'YES' : 'NO'
        
    })
    

}