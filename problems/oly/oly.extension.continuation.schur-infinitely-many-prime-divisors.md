# Force new prime divisors among polynomial values

*Hard · [Original olympiad-style problems](index.md)*

Prove that for any nonconstant polynomial $P\in\mathbb Z[x]$, infinitely many distinct primes divide its nonzero integer values. Negative values count through their absolute values.

```answer
{"answer":{"kind":"proof","expected":null,"checker_scope":"Personal proof reflection only; no automatic proof verdict, contest correctness, graded evidence or checkpoint credit."}}
```

<details>
<summary>Hint 1</summary>

Assume a finite prime list and choose an integer a with $A=P(a)\ne0$.

</details>

<details>
<summary>Hint 2</summary>

Evaluate on the progression $a+|A|Qt$, where Q is the product of the listed primes; after division by A, the new integer is one modulo Q.

</details>

<details>
<summary>Model proof</summary>

Produce a nontrivial quotient coprime to every proposed prime divisor.

1. Assume all prime divisors of nonzero values belong to a finite list with product Q. At least one exists because a nonconstant polynomial has values of arbitrarily large absolute size. Choose a with nonzero value A.
2. The difference-of-values identity makes $P(a+|A|Qt)/A$ an integer congruent to one modulo Q for every integer t.
3. As t grows positively, this quotient has unbounded absolute value, so choose it with absolute value greater than one. It has a prime divisor not dividing Q.
4. That prime also divides the corresponding nonzero value of P, contradicting the complete list. Signs of A and the quotient do not affect prime divisibility.

**Self-assessment rubric**

- Construct an integer quotient with the claimed congruence.
- Justify choosing a nonzero quotient of absolute size greater than one.
- Prove a divisor is absent from the list and still divides an actual polynomial value.
- Handle negative values without losing the argument.

</details>
