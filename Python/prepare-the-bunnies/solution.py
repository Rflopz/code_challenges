def solution(map):
    rows = len( map )
    cols = len( map[0] )

    result = 401

    for new_map in getMaps( map, rows, cols ):
        
        distance = getDistance(new_map, rows, cols)

        result = min( distance, result )

        if result == rows + cols - 1:
            return result
        

    return result

def showMap ( map, rows, cols ):
    for row in range( rows ):
        map_row = ''
        for col in range( cols ):
            map_row += str( map[row][col] ) + '\t'

        print( map_row )

def getDistance ( map, rows, cols ):

    d = { 1: { (0, 0) } } 

    path_length = 2

    while path_length < 401 and d[ path_length - 1 ]:
        fringe = set()

        for x in d[ path_length - 1 ]:
            expand = { n for n in neighbours( map, x, rows, cols ) if not any( n in visited for visited in d.values() ) }
            fringe = fringe | expand

        if ( rows - 1, cols - 1 ) in fringe:
            return path_length

        d[ path_length ] = fringe

        path_length += 1
    
    return 401

def neighbours ( map, position, rows, cols ): 

    i, j = position
    candidates = { (i-1,j), (i+1,j), (i,j-1), (i,j+1) }
    neighbours = set()

    for neighbour in candidates:
        i, j = neighbour
        if i >= 0 and i < rows and j >= 0 and j < cols and map[i][j] == 0:
            neighbours.add( neighbour )

    return neighbours

def getMaps ( map, rows, cols ):

    yield map 

    for r in range( rows ):
        for c in range( cols ):
            if map[r][c]:
                new_map = [ [ col for col in row ] for row in map ]
                new_map[r][c] = 0
                yield new_map
