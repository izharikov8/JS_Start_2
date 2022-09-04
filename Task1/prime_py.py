from datetime import datetime
import sys
max = sys.maxsize

def prime_numbers(x):
	data = []
	for el in range(2, max):
		counter = 0
		for i in range(1, el + 1):
			if el % i == 0:
				counter += 1
		if counter <= 2:
			data.append(el)
		if len(data) >= x:
			break
	return data

start = datetime.now()
print(prime_numbers(2000))
end = datetime.now()
print(f'Duration: {end - start}')