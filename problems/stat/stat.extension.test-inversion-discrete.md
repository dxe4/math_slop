# Test inversion discrete

*Easy · [Statistics and probability](index.md)*

For parameter candidates $0,1,2,3$, a testing rule at the observed data $x$ accepts precisely candidates $1$ and $2$. The inverted confidence set contains exactly the accepted candidates. How many parameter values does it contain?

```answer
{"answer":{"kind":"integer","expected":"2","checker_scope":"Checks only the requested exact finite answer under the stated model; it does not certify the reasoning or modeling assumptions."}}
```

<details>
<summary>Hint 1</summary>

Translate the acceptance decisions into a set of parameter candidates.

</details>

<details>
<summary>Hint 2</summary>

Count the elements of that set, rather than the number of all candidates.

</details>

<details>
<summary>Worked solution</summary>

Test inversion retains the nonrejected parameter values.

1. The inverted set is $C(x)=\{\theta:\text{the test of }\theta\text{ accepts at }x\}$.
2. The stated acceptance decisions give $C(x)=\{1,2\}$.
3. This set contains $2$ parameter values. The observations of acceptance alone do not specify a coverage level.

</details>
