# Fibonacci gcd index

*Hard · [Original Putnam-style training](index.md)*

For Fibonacci numbers $F_0=0,F_1=1$, prove $\gcd(F_m,F_n)=F_{\gcd(m,n)}$ for positive integers $m,n$.

```answer
{"answer":{"kind":"proof","expected":null,"checker_scope":"Personal proof draft and semantic rubric reflection only; no automatic correctness verdict."}}
```

<details>
<summary>Hint 1</summary>

Use the addition identity for Fibonacci numbers to reduce an index by Euclid’s algorithm.

</details>

<details>
<summary>Hint 2</summary>

Consecutive Fibonacci numbers are coprime; include this in the reduction.

</details>

<details>
<summary>Model proof</summary>

Repeat this subtraction as Euclid does on the indices until one index is $\gcd(m,n)$ and the other zero. Since $F_0=0$, the final gcd is $F_{\gcd(m,n)}$.

1. The addition identity $F_{r+s}=F_{r-1}F_s+F_rF_{s+1}$ follows by induction on $s$. Also $\gcd(F_r,F_{r-1})=1$ by the Fibonacci recurrence and Euclid.
2. For $s\ge r$, the identity with $s=r+(s-r)$ gives $F_s=F_{r-1}F_{s-r}+F_rF_{s-r+1}$, so modulo $F_r$, $F_s\equiv F_{r-1}F_{s-r}$. Coprimality yields $\gcd(F_r,F_s)=\gcd(F_r,F_{s-r})$.
3. Repeat this subtraction as Euclid does on the indices until one index is $\gcd(m,n)$ and the other zero. Since $F_0=0$, the final gcd is $F_{\gcd(m,n)}$.

**Self-assessment rubric**

- Establish the Fibonacci addition identity and consecutive coprimality.
- Use the identity modulo F\_r to reduce the larger index.
- Iterate Euclid on indices to reach F\_gcd(m,n).

</details>
