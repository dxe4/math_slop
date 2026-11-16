# Identify a justified induction step

*Medium · [Discrete mathematics](index.md)*

The base case $n=1$ has been checked for $1+3+\cdots+(2n-1)=n^2$. Assume the identity for an arbitrary integer $k\ge1$. Select the valid argument for the next case. Options: the next case holds because it is the claim to be proved; add $2k+1$ to the induction hypothesis and use $k^2+2k+1=(k+1)^2$; check $n=2$ and stop; or add $2k-1$ again as the next odd term.

**Options**

1. The next case holds because it is the claim to be proved.
2. Add $2k+1$ to the induction hypothesis and use $k^2+2k+1=(k+1)^2$.
3. Check $n=2$ and stop.
4. Add $2k-1$ again as the next odd term.

```answer
{"answer":{"kind":"multiple_choice","expected":"successor-algebra","checker_scope":"Checks recognition of the stated algebraic induction step among four semantic alternatives; it does not certify an independently constructed proof."},"options":["circular-claim","successor-algebra","finite-check","repeat-last-term"]}
```

<details>
<summary>Hint 1</summary>

The hypothesis concerns $k$ terms; identify the additional odd term in the $(k+1)$-term sum.

</details>

<details>
<summary>Hint 2</summary>

Compare the new term with the last term $2k-1$ in the assumed sum.

</details>

<details>
<summary>Worked solution</summary>

The next case follows from the induction hypothesis by adding the next odd term and expanding a square.

1. The first $k$ odd terms have sum $k^2$ by the induction hypothesis.
2. The next odd term is $2k+1$, so the new sum is $k^2+2k+1=(k+1)^2$.
3. The arbitrary choice of $k\ge1$ and the checked base case complete the induction. The other alternatives are circular, cover only a finite case, or repeat the wrong term.

The added border has $k+(k+1)=2k+1$ cells, matching the algebraic step.

</details>
