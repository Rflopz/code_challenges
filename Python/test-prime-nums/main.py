def solution(i): 
	primes = getPrimes( 10005 )

	return primes[ i : i + 5 ]

# process all the prime numbers with the given limit 
def getPrimes( limit ):

	primeId = ''

	# init the first prime number
	prime = 2

	while len( primeId ) < limit: 

		primeId += str( prime )
		prime += 1

		while not isPrime( prime ):
			prime += 1

	return primeId

# check if the given number is a prime
def isPrime ( number ):
	for i in range( 2, number ):
		if number % i == 0:
				return False

	return True

