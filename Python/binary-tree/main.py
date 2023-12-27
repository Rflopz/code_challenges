def solution(h, q):
    nums = list( range( 1, 2 ** h ) ) 
    tree = postorder( h, nums ) 
    
    return [ searchParent( x, tree ) for x in q ]

def postorder( h, num ):

    if h == 1:
        return Node( num.pop() )

    node = Node()
    node.root = num.pop()
    node.right = postorder( h - 1, num )
    node.left = postorder( h - 1, num )
    return node

def searchParent ( search, node, parent = -1 ):

    if ( node == None ):
        return node

    if ( node.root == search ):
        return parent

    searchRight = searchParent( search, node.right, node.root )
    if ( searchRight != None ):
        return searchRight

    searchLeft = searchParent( search, node.left, node.root )
    if (searchLeft != None ):
        return searchLeft

    return None

class Node:
    def __init__ ( self, root=None ):
        self.root = root
        self.left = self.right = None

    def __str__ ( self ):
        return ':' + str( self.root ) + '\r\nl:' + str( self.left ) + ' r:' + str( self.right )  + '\r\n' 
