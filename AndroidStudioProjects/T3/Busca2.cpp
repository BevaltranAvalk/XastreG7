#include <iostream>
#include <chrono>

using namespace std;
using namespace std::chrono;

class TreeNode {
public:
    int val;
    TreeNode* left;
    TreeNode* right;
    TreeNode(int x) : val(x), left(nullptr), right(nullptr) {}
};

class BinaryTree {
private:
    TreeNode* root;

public:
    BinaryTree() : root(nullptr) {}

    void insert(int val) {
        if (root == nullptr) {
            root = new TreeNode(val);
            return;
        }
        TreeNode* curr = root;
        while (true) {
            if (val < curr->val) {
                if (curr->left == nullptr) {
                    curr->left = new TreeNode(val);
                    return;
                }
                else {
                    curr = curr->left;
                }
            }
            else {
                if (curr->right == nullptr) {
                    curr->right = new TreeNode(val);
                    return;
                }
                else {
                    curr = curr->right;
                }
            }
        }
    }

    void traverse(TreeNode* curr) {
        if (curr == nullptr) {
            return;
        }
        traverse(curr->left);
        cout << curr->val << " ";
        traverse(curr->right);
    }

    void inorder() {
        traverse(root);
        cout << endl;
    }
};

int main() {
    // Create binary tree and insert some values
    BinaryTree tree;
    tree.insert(5);
    tree.insert(2);
    tree.insert(7);
    tree.insert(1);
    tree.insert(3);

    // Measure execution time of inorder traversal
    auto start = high_resolution_clock::now();
    tree.inorder();
    auto stop = high_resolution_clock::now();
    auto duration = duration_cast<microseconds>(stop - start);
    cout << "Execution time: " << duration.count() << " microseconds" << endl;

    return 0;
}
