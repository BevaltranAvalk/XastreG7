import random
import time

def bubble_sort(arr):
    n = len(arr)
    for i in range(n):
        for j in range(0, n - i - 1):
            if arr[j] > arr[j + 1]:
                arr[j], arr[j + 1] = arr[j + 1], arr[j]
    return arr


inicio = time.time()

quantidade = int(random.randint(10000, 1000000))
print("Numeros gerados:", quantidade)
num = []
for x in range(quantidade):
    num.append(random.randint(20, 2000000))

bubble_sort(num)
print(num)
fim = time.time()

print("Tempo de execução:", fim - inicio)
