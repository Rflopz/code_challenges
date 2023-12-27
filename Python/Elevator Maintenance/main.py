def solution(l):
    sortVersions( l )
    return l 

def sortVersions ( versions ):
    versions.sort(key=lambda s: map(int, s.split('.')))



