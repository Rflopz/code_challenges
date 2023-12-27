from math import sqrt, ceil, pow

def solution(i):
	# your code here

	atkin = Atkin(getLimit(i))
	primes = atkin.getPrimes()

	primeId = getPrimeId(primes, i)
	print (primeId)

# concatenate prime numbers starting by index 
# followed by the next prime numbers determinated by the @length 
def getPrimeId(primes, index, length = 5):
	primeId = ''
	for x in range( index + length ):
		if ( x >= index ):
			primeId += str( primes[ x ] )

	return primeId[ : length ]

# Limit given by Fibonacci sequence just 'cuz it's fun
def getLimit(index): 
	if index <= 100:
		return 1000
	elif index <= 200:
		return 2000
	elif index <= 300:
		return 3000
	elif index <= 500:
		return 5000
	elif index <= 800:
		return 8000
	elif index <= 1300:
		return 13000
	elif index <= 2100:
		return 21000
	elif index <= 3400:
		return 34000

	return 10000000

class Atkin:

    def __init__ ( self, limit, extra_length = 100 ):
        self.limit = limit + extra_length
        self.primes = []
        self.sieve = [False] * ( self.limit + 1 )

    def flip(self, prime):
		try:
			self.sieve[prime] = True if self.sieve[prime] == False else False
		except KeyError:
			pass

    def invalidate(self, prime):
		try:
			if self.sieve[prime] == True: self.sieve[prime] = False
		except KeyError:
			pass	

    def isPrime(self, prime):
		try:
			return self.sieve[prime]
		except KeyError:
			return False

    def getPrimes(self):
		testLimit = int( ceil( sqrt( self.limit ) ) )

		for i in range( testLimit ):
			for j in range( testLimit ):
				iPow2 = int( pow( i, 2 ) )
				jPow2 = int( pow( j, 2 ) )
                
				# n = 4 * i^2 + j^2
				n = 4 * iPow2 + jPow2
				if n <= self.limit and ( n % 12 == 1 or n % 12 == 5 ):
					self.flip( n )

				# n = 3 * i^2 + j^2
				n = 3 * iPow2 + jPow2
				if n <= self.limit and n % 12 == 7:
					self.flip( n )

				# n = 3 * i^2 - j^2
				n = 3 * iPow2 - jPow2
				if n <= self.limit and i > j and n % 12 == 11:
					self.flip( n )


		for i in range( 5, testLimit ):
			if self.isPrime( i ):
				k = int( pow( i, 2 ) )
				for j in range( k, self.limit, k ):
					self.invalidate( j )
							
		self.primes = [ 2, 3 ] + [ x for x in range( len( self.sieve ) ) if self.isPrime( x ) and x >= 5 ]
		return self.primes
