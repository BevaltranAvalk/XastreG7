import random
import time
from datetime import timedelta

def generate_sequence(size):
    return [random.randint(20, 2000000) for _ in range(size)]

def quick_sort(sequence):
    if len(sequence) <= 1:
        return sequence
    pivot = sequence[0]
    left = []
    right = []
    for num in sequence[1:]:
        if num < pivot:
            left.append(num)
        else:
            right.append(num)
    return quick_sort(left) + [pivot] + quick_sort(right)

def binary_search(sequence, value):
    left = 0
    right = len(sequence) - 1
    while left <= right:
        mid = (left + right) // 2
        if sequence[mid] == value:
            return mid
        elif sequence[mid] < value:
            left = mid + 1
        else:
            right = mid - 1
    return None

# Generate 5 sequences of random integers with sizes between 10,000 and 1,000,000
sizes = [random.randint(10000, 1000000) for _ in range(5)]
sequences = [generate_sequence(size) for size in sizes]

# Test search algorithms for each sequence and user input value
search_algorithms = [ binary_search]
for sequence in sequences:
    value = int(input("Enter a number to search for: "))
    print(f"{sequence}: ")
    for algorithm in search_algorithms:
        start_time = time.monotonic()
        index = algorithm(sequence, value)
        end_time = time.monotonic()
        elapsed_time = timedelta(seconds=end_time - start_time)
        if index is not None:
            print(f"{algorithm.__name__}: {value} found at index {index} in {elapsed_time}")
        else:
            print(f"{algorithm.__name__}: {value} not found in {elapsed_time}")
