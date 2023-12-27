def solution(n):
    return convert( int( n ) )

def convert ( num ):
    if num == 1:
        return 0

    if num % 2 == 1:
        return 1 + convert( num  + 1 )
    else :
        return 1 + convert( num / 2 )
