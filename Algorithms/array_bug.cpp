// The following code is supposed to rotate the array A by B positions.
// A : [1 2 3 4 5 6]
// B : 1
// However, there is a small bug in the problem. Fix the bug and submit the problem.
vector<int> Solution::rotateArray(vector<int> &A, int B) {
    int rotateAmount = B % A.size();

	vector<int> ret;

	for (int i = rotateAmount; i < A.size(); i++) {
		ret.push_back(A[i]);
	}

	for (int i = 0; i < rotateAmount; i++) {
	    ret.push_back(A[i]);
	}
	return ret;
}
