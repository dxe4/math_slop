# Count functions forced to be permutations

*Medium · [Original olympiad-style problems](index.md)*

How many functions on a six-element labeled set satisfy $f(f(f(x)))=x$ for every element?

```answer
{"answer":{"kind":"integer","expected":"81","checker_scope":"Exact finite result only; a correct entry does not certify the accompanying argument or a contest performance."}}
```

<details>
<summary>Hint 1</summary>

The identity forces injectivity and hence bijectivity on the finite set.

</details>

<details>
<summary>Hint 2</summary>

Every permutation cycle length divides three. Count zero, one or two three-cycles.

</details>

<details>
<summary>Worked solution</summary>

Convert a function law into complete cycle types.

1. Equal function values would give equal third iterates, so the function is injective and therefore a permutation.
2. Its cycles have length one or three. There is one all-fixed permutation; one three-cycle gives $\binom63\cdot2=40$ possibilities.
3. Two three-cycles give $6!/(3^2\cdot2!)=40$. Adding the disjoint cases gives eighty-one.

</details>
