# Sum module-Hom dimensions between Jordan summands

*Hard · [Abstract algebra problems](index.md)*

A nilpotent operator over Q has Jordan block sizes $3,2,2$. Find the Q-dimension of its commuting endomorphism algebra.

```answer
{"answer":{"kind":"integer","expected":"19","checker_scope":"Exact requested finite invariant only. Graduate algebra reasoning, classification hypotheses and proofs are supplied for personal study and are not automatically certified. This new skill does not expand any existing objective contract."}}
```

<details>
<summary>Hint 1</summary>

A commuting map is a Q\[t\]-module endomorphism.

</details>

<details>
<summary>Hint 2</summary>

For two cyclic nilpotent summands of lengths a,b, determine how many coordinates of a generator image are allowed.

</details>

<details>
<summary>Worked solution</summary>

Blockwise Hom spaces count centralizer dimension without solving a large matrix system.

1. For modules Q\[t\]/(t^a) and Q\[t\]/(t^b), a homomorphism is determined by an image killed by t^a; that subspace has dimension min(a,b).
2. Thus the centralizer dimension is the sum of min(a,b) over all ordered pairs of block sizes.
3. The three row totals for lengths 3,2,2 are seven, six and six, giving dimension nineteen.

</details>
