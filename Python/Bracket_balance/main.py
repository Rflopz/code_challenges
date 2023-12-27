import re

# can be added more brackets in future
brackets = {
    1: ["{", "}"],
    2: ["[", "]"],
    3: ["(", ")"],
}

# def len_of_match(str, char)

def has_pair(bracket_open, bracket_close, string):
    return len(re.findall( '\\' + bracket_open, string)) == len(re.findall('\\' + bracket_close, string))

def evaluate_pairs(text):
    return [ has_pair(val[0], val[1], text) for val in brackets.values() ]

def isBalanced(s):
    
    # if at least one of the brackets doesn't have a pair, it has missing brackets
    has_missing_branckets = len([ x for x in evaluate_pairs(s) if x is False ]) != 0

    if has_missing_branckets:
        return 'NO'


    return 'YES'
    
# print(isBalanced('{{([])}}'), 'expected YES')
print(isBalanced('{{)[](}}'), 'expected NO')