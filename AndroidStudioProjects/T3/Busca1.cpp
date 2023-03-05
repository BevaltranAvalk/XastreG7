#include <iostream>
#include <chrono>
using namespace std;

int binarySearch(int arr[], int left, int right, int x) {
    while (left <= right) {
        int mid = left + (right - left) / 2;
        if (arr[mid] == x)
            return mid;
        else if (arr[mid] < x)
            left = mid + 1;
        else
            right = mid - 1;
    }
    return -1;
}

int main() {
    int arr[] = { 2, 3, 4, 10, 40 };
    int n = sizeof(arr) / sizeof(arr[0]);
    int x = 10;

    auto start = chrono::high_resolution_clock::now();
    int result = binarySearch(arr, 0, n - 1, x);
    auto stop = chrono::high_resolution_clock::now();

    if (result == -1)
        cout << "Element not found" << endl;
    else
        cout << "Element found at index " << result << endl;

    auto duration = chrono::duration_cast<chrono::microseconds>(stop - start);
    cout << "Time taken by function: " << duration.count() << " microseconds" << endl;

    return 0;
}
