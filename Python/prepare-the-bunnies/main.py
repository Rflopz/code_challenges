def solution(map):
    # Your code here
    rows = len( map )
    if rows < 2:
        return 1

    cols = len( map[ 0 ] )
    if cols < 2:
        return 1

    walls = getWalls( map, rows, cols )

    results = []

    if len( walls ) <= 0:
        walls.append([0, 0])

    while len( walls ) > 0:

        new_map = [ x[:] for x in map ]

        wall = walls.pop(0)
        new_map[ wall[0] ][ wall[1] ] = 0

        matrix = Matrix( new_map, rows, cols )

        steps = matrix.getDistance([0, 0])
        matrix.showMap()

        print('\r\n -- \r\n')

        results.append( steps )

    return min( results )

def getWalls ( map, rows, cols ):
    walls = []
    for row in range( rows ):
        for col in range( cols ):
            if ( map[row][col] == 1 ):
                map[row][col] = '|'
                walls.append([row, col])

    return walls

class Matrix:

    def __init__ ( self, map, rows, cols ):
        self.map = [ x[:] for x in map ]
        self.rows = rows
        self.cols = cols 
        self.visited = [ [ False for c in range(cols) ] for x in range( rows ) ]
        self.visited[0][0] = True

    def showMap ( self ):
        for row in range( self.rows ):
            map_row = ''
            for col in range( self.cols ):
                map_row += str( self.map[row][col] ) + '\t'

            print( map_row )

    def getDistance ( self, start, end = None ): 
        self.position = start
        self.finish = end if ( end != None ) else [ self.rows - 1 , self.cols - 1 ]
        self.map[ self.finish[0] ][ self.finish[1] ] = 0
        self.expandNeighbours( 1 )

        steps = self.map[ self.finish[0] ][ self.finish[ 1 ] ] + 1

        return steps

    def expandNeighbours ( self, lvl ):

        neighbours = []

        if self.canMove( self.down(), lvl ):
            neighbours.append( self.down() )

        if self.canMove( self.right(), lvl ):
            neighbours.append( self.right() )

        if self.canMove( self.up(), lvl ):
            neighbours.append( self.up() )

        if self.canMove( self.left(), lvl ):
            neighbours.append( self.left() )

        for neighbour in neighbours:
            self.move( neighbour )
            self.expandNeighbours( lvl + 1 )
            
    
    def canMove ( self, pos, content = None ) :
        # can't move through the walls 
        if pos[0] < 0 or pos[1] < 0:
            return False

        # out of index range
        if pos[0] > self.rows - 1 or pos[1] > self.cols - 1:
            return False

        # it's avaiable to move and it haven't been visited yet 
        if self.map[ pos[0] ][ pos[1] ] != '|' and self.visited[ pos[0] ][ pos[1] ] == False:
            if content != None:
                self.map[ pos[0] ][ pos[1] ] = content
            return True

        return False 

    def move ( self, pos ) :
        self.position = pos
        self.visited[ pos[0] ][ pos[1] ] = True


    def down ( self ):
        return [ self.position[ 0 ] + 1, self.position[ 1 ] ] 

    def up ( self ):
        return [ self.position[ 0 ] - 1, self.position[ 1 ] ] 

    def left ( self ):
        return [ self.position[ 0 ], self.position[ 1 ] - 1 ] 

    def right ( self ):
        return [ self.position[ 0 ], self.position[ 1 ] + 1 ] 