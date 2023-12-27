def solution(M, F):
    goal = (int(M), int(F))
    x, y = goal
    c = 0
    while x!=y:
        if x > y:
            num_subs = (x-y)//y + ((x-y) % y > 0)
            c += num_subs
            x, y = x - num_subs * y, y
        elif y > x:
            num_subs = (y-x)//x + ((y-x) % x > 0)
            c += num_subs
            x, y = x, y - num_subs * x
        
    return str(c) if (x, y)==(1, 1) else 'impossible'