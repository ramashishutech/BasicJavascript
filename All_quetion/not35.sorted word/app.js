
	// Javascript program to sort an Array of
	// Strings according to their lengths
	
	// Function to print the sorted array of string
	// void printArraystring(string,int);

	// Function to Sort the array of string
	// according to lengths. This function
	// implements Insertion Sort.
	function sort(s, n)
	{
		for (let i = 1 ; i < n; i++)
		{
			let temp = s[i];
            console.log(temp);

			// Insert s[j] at its correct position
			let j = i - 1;
            console.log(j);
			while (j >= 0 && temp.length < s[j].length)
            console.log((j >= 0 && temp.length < s[j].length));
			{
				s[j + 1] = s[j];
                console.log(s[j + 1] = s[j]);
				j--;
			}
			s[j + 1] = temp;
            console.log(s[j + 1] = temp);
		}
	}

	// Function to print the sorted array of string
	function printArraystring(str, n)
	{
		for (let i = 0; i < n; i++)
			console.log(str[i]+" ");
	}
	
	let arr = ["ashish","am","kumar","i"];
	let n = arr.length;

	// Function to perform sorting
	sort(arr,n);
	// Calling the function to print result
	printArraystring(arr, n);

// This code is contributed by vaibhavrabadiya117.

