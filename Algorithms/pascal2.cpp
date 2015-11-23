vector<int> Solution::getRow(int A) {
    // Do not write main() function.
    // Do not read input, instead use the arguments to the function.
    // Do not print the output, instead return values as specified
    // Still have a doubt. Checkout www.interviewbit.com/pages/sample_codes/ for more details
    vector<vector<int>> pascalsTriangle;

    for (int i = 0; i <= A; i = i + 1) {
        vector<int> row;

        if (i == 0) {
            row = { 1 };
        }
        else if (i == 1) {
            row = { 1, 1 };
        }
        else {
            for (int j = 0; j <= i; j = j + 1) {
                if (j == 0) {
                    row.push_back(1);
                }
                else if (j == i) {
                    row.push_back(1);
                }
                else {
                    row.push_back(pascalsTriangle[i - 1][j] + pascalsTriangle[i - 1][j - 1]);
                }
            }
        }

        pascalsTriangle.push_back(row);
    }

    return pascalsTriangle[A];
}
