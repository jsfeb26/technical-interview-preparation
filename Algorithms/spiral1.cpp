// Given a matrix of m * n elements (m rows, n columns),
// return all elements of the matrix in spiral order.
// input:
// [
//     [ 1, 2, 3 ],
//     [ 4, 5, 6 ],
//     [ 7, 8, 9 ]
// ]
// output: [1, 2, 3, 6, 9, 8, 7, 4, 5]
vector<int> Solution::spiralOrder(const vector<vector<int> > &A) {
	vector<int> result;

	int rows = A.size();
	int columns = A[0].size();
	int top = 0;
	int bottom = rows - 1;
	int left = 0;
	int right = columns - 1;

	// 0 left -> right, 1 top -> bottom, 2 right -> left, 3 bottom -> top
	int dir = 0;

	while (top <= bottom && left <= right)
	{
	    if (dir == 0)
	    {
	        for (int i = left; i <= right; i++)
	        {
	            result.push_back (A[top][i]);
	        }

	        top++;
	        dir = 1;
	    }
	    else if (dir == 1)
	    {
	        for (int i = top; i <= bottom; i++)
	        {
	            result.push_back (A[i][right]);
	        }

	        right--;
	        dir = 2;
	    }
	    else if (dir == 2)
	    {
	        for (int i = right; i >= left; i--)
	        {
	            result.push_back (A[bottom][i]);
	        }

	        bottom--;
	        dir = 3;
	    }
	    else if (dir == 3)
	    {
	        for (int i = bottom; i >= top; i--)
	        {
	            result.push_back (A[i][left]);
	        }

	        left++;
	        dir = 0;
	    }
	    //dir = (dir+1)%4;
	}
	return result;
}
