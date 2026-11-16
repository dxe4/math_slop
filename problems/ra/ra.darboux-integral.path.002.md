# Rebuild the partition around an isolated spike

*Hard · [Real analysis](index.md)*

Change the function on $[0,1]$ to $g(1/2)=1$ and $g(x)=0$ for every $x\neq 1/2$. Construct any ordered rational partition $0=x_{0}$&lt;…&lt;$x_{k}=1$ with Darboux gap $U(P,g)-L(P,g)$ STRICTLY less than $1/10$. Darboux extrema use CLOSED cells, so every endpoint belongs to each adjacent cell. Neither uniform spacing nor making $1/2$ a cut is required. Recompute the gap for this changed function instead of assuming a previously successful partition still works. Use $2$–$32$ cuts, at most $80$ digits per cut, $512$ digits total and $2,048$ characters. In your optional explanation, justify whole-cell extrema and separate this fixed tolerance from the all-ε integrability argument. Standard isolated-spike example adapted from Jiří Lebl, Basic Analysis §5.1, Exercise 5.1.6; this construction interaction is newly authored.

*Source: Jiří Lebl, Basic Analysis: Introduction to Real Analysis, Volume I, §5.1, Exercise 5.1.6 (https://www.jirka.org/ra/html/sec\_rint.html). Adapted isolated-spike exercise, specialized to the stated interval, spike and tolerance. Euler adds arbitrary-partition construction, bounded rational entry and new explanations. CC BY-SA 4.0 is selected from the source’s dual licence for adapted components; new Euler educational material uses the same licence: https://creativecommons.org/licenses/by-sa/4.0/*

```answer
{"answer":{"kind":"darboux_partition_with_open_reasoning","expected_constraints":{"model":"point_spike","spike_at":"1/2","maximum_gap_exclusive":"1/10"},"checker_scope":"Checks a valid ordered rational partition within the declared limits and the exact fixed-tolerance gap: the total width of all closed cells containing the spike. Both adjacent cells count when the spike is a cut. Any partition with that total<1/10 is accepted; no uniform grid or spike-node requirement is imposed. Optional writing and arbitrary-epsilon proofs remain unassessed."}}
```

<details>
<summary>Hint 1</summary>

Every positive-length cell contains points other than $1/2$, where the value is $0$. Which closed cells also contain the value $1$?

</details>

<details>
<summary>Hint 2</summary>

Place cuts near the spike if helpful, then check every cell containing it. If the spike itself is a cut, both adjacent cells include that endpoint.

</details>

<details>
<summary>Worked solution</summary>

Concentrate the partition where oscillation occurs. A valid construction for one function must be checked again after the function changes.

1. Every positive-length cell has infimum $0$. Its supremum is $1$ exactly when the CLOSED cell contains $1/2$; otherwise its supremum is $0$. Thus $L=0$ and the gap is the total width of all closed cells containing $1/2$.
2. If $1/2$ lies strictly inside one cell, only that cell contributes. If it is a partition cut, both adjacent cells contribute, so the gap is the distance from its left neighboring cut to its right neighboring cut. For example $0,1/2,1$ has gap $1$, not $0$ or $1/2$.
3. The partitions $0,49/100,51/100,1$ and $0,49/100,1/2,51/100,1$ both have gap $1/50<1/10$. Their large outer cells contribute zero. The spike need not be a cut; inserting it inside the same central cell does not change the total contributing width.
4. The earlier irregular partition with end widths $1/20$ and nine other widths $1/10$ has identity gap $19/200$, but its spike lies in $[9/20,11/20]$, giving spike gap $1/10$. It therefore fails this strict task. Adding $1/2$ as a cut splits that interval but leaves both adjacent widths in the total, so it still fails.
5. A uniform $11$-cell partition has spike gap $1/11$ and works. A uniform $12$-cell partition places the spike at a cut, giving gap $2/12=1/6$ and failing. These two grids are not refinements of one another: having more cells alone does not imply a smaller Darboux gap. A genuine refinement retains every old cut and cannot increase $U-L$.
6. For the separate arbitrary-ε proof, choose an integer $k>\max (2,1/\varepsilon )$. The rational partition $0,1/2-1/(2k),1/2+1/(2k),1$ has gap $1/k<\varepsilon$. This proves integrability, with integral $0$ since every lower sum is $0$. The proof uses unrestricted mathematical precision; one accepted fixed-tolerance submission does not assess it.
7. An isolated spike can be enclosed in cells of arbitrarily small total width. The next task’s dense rational–irrational oscillation occurs on every positive-length cell and cannot be localized this way. Optional written explanations remain unassessed drafts.

</details>
