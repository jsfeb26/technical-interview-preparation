/**
 * Definition for an interval.
 * struct Interval {
 *     int start;
 *     int end;
 *     Interval() : start(0), end(0) {}
 *     Interval(int s, int e) : start(s), end(e) {}
 * };
 */

struct less_than_key
{
    inline bool operator() (const Interval& struct1, const Interval& struct2)
    {
        return (struct1.start < struct2.start);
    }
};

vector<Interval> Solution::merge(vector<Interval> &A) {
    // Do not write main() function.
    // Do not read input, instead use the arguments to the function.
    // Do not print the output, instead return values as specified
    // Still have a doubt. Checkout www.interviewbit.com/pages/sample_codes/ for more details
    sort(A.begin(), A.end(), less_than_key());

    vector<Interval> results;

    results.push_back(A[0]);

    for (int i = 1; i < A.size(); i += 1) {
        int resultsEnd = results.size() - 1;
        if (A[i].start >= results[resultsEnd].start && A[i].start <= results[resultsEnd].end) {
            if (A[i].end > results[resultsEnd].end) {
                results[resultsEnd] = Interval(results[resultsEnd].start, A[i].end);
            }
        }
        else {
            results.push_back(A[i]);
        }
    }

    return results;
}
