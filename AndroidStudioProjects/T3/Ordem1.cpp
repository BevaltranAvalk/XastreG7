#include <iostream>
#include <chrono> // for measuring time

using namespace std;
using namespace std::chrono;

void insertionSort(int arr[], int n) {
    int i, key, j;
    for (i = 1; i < n; i++) {
        key = arr[i];
        j = i - 1;
 
        while (j >= 0 && arr[j] > key) {
            arr[j + 1] = arr[j];
            j = j - 1;
        }
        arr[j + 1] = key;
    }
}

int main() {
    int arr[] = { 64, 25, 12, 22, 11 };
    int n = sizeof(arr) / sizeof(arr[0]);

    auto start = high_resolution_clock::now(); // start measuring time

    insertionSort(arr, n);

    auto stop = high_resolution_clock::now(); // stop measuring time
    auto duration = duration_cast<microseconds>(stop - start);

    cout << "Sorted array: ";
    for (int i = 0; i < n; i++)
        cout << arr[i] << " ";
    cout << endl;

    cout << "Time taken by function: "
         << duration.count() << " microseconds" << endl;

    return 0;
}
