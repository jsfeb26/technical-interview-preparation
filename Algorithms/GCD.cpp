int Solution::gcd(int A, int B) {
    // Do not write main() function.
    // Do not read input, instead use the arguments to the function.
    // Do not print the output, instead return values as specified
    // Still have a doubt. Checkout www.interviewbit.com/pages/sample_codes/ for more details

    // edge cases
    if (A == 0) {
        return B;
    }
    // edge cases
    if (B == 0) {
        return A;
    }

    int max = 0;
    if (A < B) {
        max = A;
    }
    else {
        max = B;
    }

    int GCD = 1;
    for (int i = 2; i <= max; i = i + 1) {
        if (A % i == 0 && B % i == 0) {
            GCD = i;
        }
    }

    return GCD;
}
