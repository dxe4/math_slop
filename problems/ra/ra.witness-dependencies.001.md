# Choose N without looking at a later n

*Easy · [Real analysis](index.md)*

For the fixed sequence $a_{n}=7/n$ and proposed limit $0, a$ convergence argument begins: let $\varepsilon >0$ be given; choose a positive integer N; let $n\geq N$ be arbitrary. Which rule describes the allowed dependencies of N? Select the mathematically correct statement from the four alternatives.

**Options**

1. N may depend on the later arbitrary n.
2. One N must work for all positive ε.
3. N may depend on ε and fixed givens, but not on the later arbitrary n.
4. N must be selected before ε is specified and may then depend on the later n.

```answer
{"answer":{"kind":"multiple_choice","expected":"the_later_arbitrary","checker_scope":"Checks the selected mathematical statement among four authored alternatives under the stated hypotheses; does not assess a freely written proof."},"options":["n_may_depend_on","one_n_must_work","the_later_arbitrary","n_must_be_selected"]}
```

<details>
<summary>Hint 1</summary>

A choice can use data already fixed in the argument.

</details>

<details>
<summary>Hint 2</summary>

The claim must cover every index after one chosen threshold.

</details>

<details>
<summary>Worked solution</summary>

A whole-tail threshold is chosen once for the supplied tolerance.

1. The tolerance ε and sequence are fixed before N is chosen, so N may use them.
2. The index n is quantified afterward and ranges over the whole tail; N cannot be selected separately for each such n.
3. Therefore C is the valid dependency rule.

</details>
