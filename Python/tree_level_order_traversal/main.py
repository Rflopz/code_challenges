"""
Node is defined as
self.left (the left child of the node)
self.right (the right child of the node)
self.info (the value of the node)
"""

def levelOrder(root, level = 0, traversal = {}):
    #Write your code here
        
    traversal[level] = traversal.get(level, '') + '%s ' % root.info
    
    if hasattr(root, 'left') and root.left is not None:
        levelOrder(root.left, level + 1, traversal)
        
    if hasattr(root, 'right') and root.right is not None:
        levelOrder(root.right, level + 1, traversal)
        
    if level == 0:
        print(''.join(x for x in traversal.values()))
        