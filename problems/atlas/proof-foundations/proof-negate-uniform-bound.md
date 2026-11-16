# Negating a uniform bound

*Difficulty 1 of 5 · [Proof foundations](index.md) · exercise 1 of 5*

Negate the statement: For every real number $x$, there exists a positive integer $n$ such that $n > x$. Write the negation without using the phrase 'it is not the case'.

<details>
<summary>Hint 1</summary>

Reverse each quantifier in order

</details>

<details>
<summary>Hint 2</summary>

The negation of $n > x$ is $n \le x$

</details>

<details>
<summary>Worked solution</summary>

The original has the form: for every $x$, there exists $n$ with property $P(x,n)$. Its negation is: there exists $x$ such that for every positive integer $n$, $P(x,n)$ fails. Therefore the negation is: There exists a real number $x$ such that every positive integer $n$ satisfies $n \le x$. Notice that negating does not merely swap the inequality; both quantifiers change.

**Answer.** There exists a real $x$ such that every positive integer $n$ satisfies $n \le x$.

</details>

*Tags: quantifiers, negation*
