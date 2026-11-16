# Construct two entire subsequences

*Medium · [Real analysis](index.md)*

Let $a_{n}=(-1)^n$ for positive integer n. Construct two index maps $k_{j}=pj+q$ and $\ell _{j}=rj+s$, with integer coefficients and $j=1,2$,…, such that both maps give positive, strictly increasing original indices, a\_{$k_{j}$}=$1$ for every j, and a\_{$\ell _{j}$}=$-1$ for every j. Enter any four coefficients p,q,r,s satisfying all these conditions. Negative offsets are allowed when every selected index stays positive. In your optional explanation, justify the whole maps, not just their first few terms. Use index maps of the declared affine form.

```answer
{"answer":{"kind":"affine_subsequence_pair_with_open_reasoning","expected_constraints":{"modulus":2,"first_residue":0,"second_residue":1},"checker_scope":"Checks exact integer coefficients against the necessary and sufficient conditions for the two declared affine index maps to be positive, strictly increasing, and always even or odd respectively. Optional prose is unassessed. It does not verify an unrestricted proof, arbitrary nonlinear index maps, or general subsequence mastery."}}
```

<details>
<summary>Hint 1</summary>

For $k_{j}=pj+q$, inspect its first index and the difference k\_{$j+1$}$-k_{j}$. Then ask which parity every selected index must have.

</details>

<details>
<summary>Hint 2</summary>

A constant parity must survive each step. Check both the step and the offset, and remember that a negative offset can still give a positive first index.

</details>

<details>
<summary>Worked solution</summary>

Construct the index maps by controlling their start, step, and every selected index. The first few terms alone do not establish an infinite subsequence.

1. For $k_{j}=pj+q$, strict increase for all j requires $p>0$. Its first index is $p+q$; with $p>0$, all indices are positive exactly when $p+q\geq 1$. The same argument gives $r>0$ and $r+s\geq 1$ for the second map.
2. The first map must select only even indices. Comparing the first two indices forces its step p to be even, and then its offset q must be even. Conversely these conditions make every $pj+q$ even.
3. The second map must select only odd indices. Thus r is even and s is odd, in addition to $r>0$ and $r+s\geq 1$. Negative odd offsets are valid: $s=-3,r=4$ starts at $1$.
4. The complete integer coefficient conditions are $p,r>0$ even; q even; s odd; $p+q\geq 1$; $r+s\geq 1$. These conditions characterize every valid integer tuple. Examples include $(2,0,2,-1), (4,-2,4,-3)$, and $(6,8,8,-5)$.
5. These conditions establish the requested structured property of this affine family for all positive j. Your explanation remains unassessed, and many other subsequences use index maps outside this family.

</details>
