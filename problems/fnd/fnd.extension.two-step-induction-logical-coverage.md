# Identify what a two-step implication actually proves

*Medium · [Foundations bridge](index.md)*

For a predicate P on nonnegative integers, suppose P(0) is true and $P(n)\Rightarrow P(n+2)$ for every n≥0. Which indices in {0,1,2,3,4,5,6,7} must satisfy P under these assumptions? Return the forced set; no base case at 1 is supplied.

```answer
{"answer":{"kind":"set","expected":["0","2","4","6"],"checker_scope":"Only the requested exact result in the stated domain and units is checked; the reasoning remains a personal draft."}}
```

<details>
<summary>Hint 1</summary>

Start at the known base and apply only the provided two-step implication.

</details>

<details>
<summary>Hint 2</summary>

To show an odd index is not forced, give one predicate satisfying the assumptions but false at every odd index.

</details>

<details>
<summary>Worked solution</summary>

An induction step reaches only the residue classes for which a base case is known.

1. Repeated application from 0 forces P(2),P(4),P(6) and all further even cases.
2. The predicate “n is even” satisfies P(0) and the entire two-step implication, but is false at every odd index. Hence none of the listed odd indices is logically forced.
3. The requested set is {0,2,4,6}.

</details>
