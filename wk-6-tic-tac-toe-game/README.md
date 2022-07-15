
 # # Week-6 Project Tic-tac-toe.

#   Instruction

* Create a Tic-Tac-Toe game that allows a player to play against a computer.

#   Game Details
Tic-Tac-Toe is basically a two man game where you try to beat your opponent by matching three boxes out of the nine provided boxes, and the other tries to block your move while trying to beat you too.

#   Requirements

1. There should be a welcome view that shows a welcome, statement, the game instructions, and gives the user a choice of playing with X or O against the computer.
2. The Tic-Taco-Toe game should be played on a grid that's 3 squares by 3 squares.
3. There should be a way to display "win" for the first player who gets 3 of her marks in a row (up, down, across, or diagonally)
4. When all 9 squares are full, and no player has 3 marks in a row, the game should end in a tie.
5. If a player wins or the game ties, there should be a way to play again or reset the game.
6. There should be a way to keep track of the scores between a player and the computer.


<script> 
// Javascript program to check whether a given 
// tic tac toe board is valid or not 

// This matrix is used to find indexes 
// to check all possible winning triplets 
// in board[0..8] 

// Returns true if character 'c' wins. 
// c can be either 'X' or 'O' 
function isCWin(board, c) 
{ 
	let win = new Array(
                new Array(0, 1, 2), // Check first row. 
				new Array(3, 4, 5), // Check second Row 
				new Array(6, 7, 8), // Check third Row 
				new Array(0, 3, 6), // Check first column 
				new Array(1, 4, 7), // Check second Column 
				new Array(2, 5, 8), // Check third Column 
				new Array(0, 4, 8), // Check first Diagonal 
				new Array(2, 4, 6)
            ); // Check second Diagonal 
				
	// Check all possible winning combinations 
	for (let i = 0; i < 8; i++) 
		if (board[win[i][0]] == c && 
			board[win[i][1]] == c && 
			board[win[i][2]] == c ) 
			return true; 
	return false; 
} 

// Returns true if given board is 
// valid, else returns false 
function isValid(board) 
{ 
	// Count number of 'X' and 'O' 
	// in the given board 
	let xCount = 0; 
	let oCount = 0; 
	for (let i = 0; i < 9; i++) 
	{ 
		if (board[i] == 'X') xCount++; 
		if (board[i] == 'O') oCount++; 
	} 

	// Board can be valid only if either 
	// xCount and oCount is same or count 
	// is one more than oCount 
	if (xCount == oCount || xCount == oCount + 1) 
	{ 
		// Check if 'O' is winner 
		if (isCWin(board, 'O')) 
		{ 
			// Check if 'X' is also winner, 
			// then return false 
			if (isCWin(board, 'X')) 
				return false; 

			// Else return true xCount and 
			// yCount are same 
			return (xCount == oCount); 
		} 

		// If 'X' wins, then count of X 
		// must be greater 
		if (isCWin(board, 'X') && 
				xCount != oCount + 1) 
		return false; 

		// If 'O' is not winner, then 
		// return true 
		return true; 
	} 
	return false; 
} 

// Driver Code 
let board = new Array('X', 'X', 'O','O', 
			'O', 'X','X', 'O', 'X'); 
if(isValid(board)) 
	document.write("Given board is valid"); 
else
	document.write("Given board is not valid"); 
	
// This code is contributed 
// by Saurabh Jaiswal 
</script>
