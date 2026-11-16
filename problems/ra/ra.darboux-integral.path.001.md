# Construct a partition with a strictly small Darboux gap

*Hard · [Real analysis](index.md)*

For $f(x)=x$ on $[0,1]$, construct any finite rational partition $0=x_{0}<x_{1}$&lt;…&lt;$x_{k}=1$ whose Darboux gap $U(P,f)-L(P,f)$ is STRICTLY less than $1/10$. Use exact comma-separated cuts in their intended order. Irregular spacing and different numbers of cells are allowed; do not assume that only a uniform grid is valid. The practice format allows $2$–$32$ cuts, at most $80$ digits per cut, $512$ digits in total and $2,048$ characters. In your optional explanation, justify the extrema over each whole closed cell and distinguish this one-tolerance construction from a proof for every $\varepsilon >0$. Standard identity-function example adapted from Jiří Lebl, Basic Analysis §5.1, Exercise 5.1.2; this construction interaction is newly authored.

*Source: Jiří Lebl, Basic Analysis: Introduction to Real Analysis, Volume I, §5.1, Exercise 5.1.2 (https://www.jirka.org/ra/html/sec\_rint.html). Adapted identity-function exercise. Euler replaces the source task with a fixed-tolerance partition construction, bounded rational entry and new explanations. CC BY-SA 4.0 is selected from the source’s dual licence for adapted components; new Euler educational material uses the same licence: https://creativecommons.org/licenses/by-sa/4.0/*

```answer
{"answer":{"kind":"darboux_partition_with_open_reasoning","expected_constraints":{"model":"identity","maximum_gap_exclusive":"1/10"},"checker_scope":"Checks a valid ordered rational partition within the declared input limits and its exact fixed-tolerance Darboux gap. All valid partitions with sum of squared cell widths<1/10 are accepted, including irregular partitions. Malformed partitions/resource excess are invalid input; valid insufficient gaps are incorrect. Optional writing and arbitrary-epsilon integrability proofs remain unassessed."}}
```

<details>
<summary>Hint 1</summary>

On a closed cell \[u,v\], the identity has infimum u and supremum v. Weight the oscillation by that cell’s own width.

</details>

<details>
<summary>Hint 2</summary>

Try your own partition. Its exact weighted gap matters; requiring every width to be strictly below the tolerance would be only a sufficient condition, not the complete answer set.

</details>

<details>
<summary>Worked solution</summary>

Construct the partition itself, then control the width-weighted oscillations over all of its cells.

1. For each closed cell \[$x_{i-1},x_{i}$\], the identity has infimum $x_{i-1}$ and supremum $x_{i}$. Its oscillation is Δ$x_{i}$, and its contribution to $U-L$ is $(Δx_{i})^{2}$. Therefore the exact gap is $\sum (Δx_{i})^{2}$.
2. Every valid ordered rational partition within the stated format is accepted exactly when this sum is strictly below $1/10$. Uniform spacing is one possible method, but is not required. For example the uniform $11$-cell partition has gap $1/11<1/10$, while the $10$-cell partition has gap exactly $1/10$ and fails the strict bound.
3. An irregular example is $0,1/20,3/20,1/4,7/20,9/20,11/20,13/20,3/4,17/20,19/20,1$. Its two end widths are $1/20$ and its nine other widths are $1/10$, giving gap $2$($1/20$)²+$9$($1/10$)²=$19/200<1/10$. Thus a checker requiring every cell width to be strictly below $1/10$ would wrongly reject this valid partition.
4. One successful fixed-tolerance partition does not establish the arbitrary-ε criterion. For the separate mathematical argument, a uniform k-cell partition has gap $1/k$. For any $\varepsilon >0$ choose an integer $k>1/\varepsilon$, yielding a gap below ε and proving integrability.
5. That general proof can use arbitrarily many mathematical cuts, beyond this editor’s $32$-cut practice limit. The checker assesses only the submitted partition at the stated tolerance, and does not assess the optional all-tolerances proof.

</details>
