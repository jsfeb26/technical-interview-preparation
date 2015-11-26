bool Solution::isPalindrome(int A) {
    // Do not write main() function.
    // Do not read input, instead use the arguments to the function.
    // Do not print the output, instead return values as specified
    // Still have a doubt. Checkout www.interviewbit.com/pages/sample_codes/ for more details

    if (A < 0) {
        return false;
    }

    string A_string = to_string(A);
    int l = 0;
    int r = A_string.length() - 1;

    while (l < r) {
        if (A_string[l] != A_string[r]) {
            return false;
        }

        l += 1;
        r -= 1;
    }

    return true;
}
