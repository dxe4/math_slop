# Sylow constraints for a group of order 56

*Difficulty 2 of 5 · [Abstract Algebra Core Practice](index.md) · exercise 3 of 12*

Let $G$ be a group of order $56=2^3\cdot 7$. Determine the possible values of $n_7$ and $n_2$. If $n_7=8$, count how many nonidentity elements are accounted for by the Sylow $7$-subgroups, and deduce what this leaves for the Sylow $2$-subgroups.

<details>
<summary>Hint 1</summary>

Apply the third Sylow theorem: $n_p\mid |G|/p^n$ and $n_p\equiv 1\pmod p$.

</details>

<details>
<summary>Hint 2</summary>

For $p=7$, $n_7$ divides $8$ and is $1\bmod 7$.

</details>

<details>
<summary>Hint 3</summary>

Distinct subgroups of prime order intersect only in the identity.

</details>

<details>
<summary>Worked solution</summary>

Since $56=2^3\cdot 7$, the Sylow $7$-subgroups have order $7$. The third Sylow theorem gives $n_7\mid 8$ and $n_7\equiv 1\pmod 7$, so $n_7\in\{1,8\}$. For $p=2$, $n_2\mid 7$ and $n_2\equiv 1\pmod 2$, so $n_2\in\{1,7\}$. If $n_7=8$, the eight subgroups of order $7$ intersect pairwise only in $\{e\}$ (since any nontrivial intersection would have order $7$ and force equality). They contribute $8\cdot(7-1)=48$ distinct nonidentity elements. With $|G|=56$, only $56-48=8$ elements remain, including the identity. A Sylow $2$-subgroup has order $8$, so the remaining elements must form exactly one such subgroup; hence $n_2=1$ in this case.

**Answer.** $n_7\in\{1,8\}$ and $n_2\in\{1,7\}$. If $n_7=8$, exactly $48$ nonidentity elements are used, leaving $8$ elements including $e$, which forces $n_2=1$.

</details>

*Tags: finite-groups-sylow, group-theory, sylow-theorems, counting-argument*
