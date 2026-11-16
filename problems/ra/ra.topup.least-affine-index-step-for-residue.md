# Choose a minimal affine index map isolating one phase

*Medium · [Real analysis](index.md)*

For $a_n=\cos(2\pi n/3)$, seek n\_k=pk+1 for k&gt;=1, with positive integer p, so every n\_k is congruent to 1 modulo 3. Return least\_p and limit of the resulting constant subsequence.

```answer
{"answer":{"kind":"record_of_rationals","expected":{"least_p":"3","limit":"-1/2"},"checker_scope":"Checks only the requested fixed numerical result, finite set or declared interval. Universal epsilon arguments, hypotheses and analytic proofs are not automatically certified, and no new same-version required slot is introduced."}}
```

<details>
<summary>Hint 1</summary>

Compare the residues of consecutive selected indices.

</details>

<details>
<summary>Hint 2</summary>

Evaluate the cosine at the selected phase.

</details>

<details>
<summary>Worked solution</summary>

An affine index progression fixes a residue phase only when its step respects that modulus.

1. Every pk+1 is one modulo three exactly when p is divisible by three, so the least positive step is three.
2. The resulting indices 4,7,10,... are positive and strictly increasing.
3. At each index the cosine equals cos(2pi/3)=-1/2, so that is the subsequential limit.

</details>
