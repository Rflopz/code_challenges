'''
class Node:
      def __init__(self,info): 
          self.info = info  
          self.left = None  
          self.right = None 
           

       // this is a node of the tree , which contains info as data, left , right
'''
def height(root, n = 0):
    
    left, right = 0, 0
    
    if hasattr(root, 'left') and root.left is not None:
        left = height(root.left, n + 1)
        
    if hasattr(root, 'right') and root.right is not None:
        right = height(root.right, n + 1)
    
    
    if left == 0 and right == 0:
        return n
    
    return left if left > right else right
    
