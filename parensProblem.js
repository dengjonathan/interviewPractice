Input: number of pairs of parens
Output: permutations of well form parens Array<string>
Contraints:
O(n^2), O(n^2)

Examples:
1 => ['()'] // 1 nest
2 => ['(())', '()()'] // 2 nest, 1 nest
 ["((()))", 3 nest
  "(()())", 2
  "(())()", 2
  "()(())", 2 
  "()()()"] 1
4 =>
4 nest (((())))
3 nest ((()))()
	()((()))
	2  solutions
2 nest (())()()
	()(())()
	()()(()) //7 possible solution
  (()())()
  (()()())
  ()(()())
  (())(())
1nest()()()()

for [1...n]:
	generate all possible combinations for that amount of nesting

base case n=1 => ['()']
recursive

// ex n = 2
 create all permutations where you add a paren to the f(n-1)
 ['(())', '()()']
['()(())', '(())()']
// n=3
//['((()))', '(()())', '((()))', '((()))']
['(()())', 

function parenPermutation(n) {
	//base case
  if (n === 1) {
  	return ['()'];
  }
  return addPermutation(parenPermutation(n-1));
}

()()
(())

()()()
(())()
()(())
()()()
()(())
(()())
((()))
(())()

--> left parens 2, right parens 3, n = 3
((
()