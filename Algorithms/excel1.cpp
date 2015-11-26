int Solution::titleToNumber(string A) {
    // Do not write main() function.
    // Do not read input, instead use the arguments to the function.
    // Do not print the output, instead return values as specified
    // Still have a doubt. Checkout www.interviewbit.com/pages/sample_codes/ for more details
    int result = 0;
    int i = A.length()-1;
    int t = 0;
    while(i >= 0){
        char curr = A.at(i);
        result = result + (int) pow(26, t) * (curr-'A'+1);
        t++;
        i--;
    }

    return result;
}
