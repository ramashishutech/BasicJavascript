 //Javascript program to remove
// vowels from a String
function remVowel(str)
{
	let vawels = [ 'a', 'e', 'i', 'o', 'u','A', 'E', 'I', 'O', 'U' ];
			
	let result = "";
	
	for(let i = 0; i < str.length; i++)
	{
		
		if (!vawels.includes(str[i]))
		{ console.log(!vawels.includes(str[i]))
			result += str[i];
			
		}
	}
alert(result);

}remVowel(prompt("enter the string"))