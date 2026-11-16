# Totient prime power product

*Medium · [Original Putnam-style training](index.md)*

Compute $\varphi(3^4\cdot5^2)$ exactly.

```answer
{"answer":{"kind":"integer","expected":"1080","checker_scope":"Only the exact bounded answer is checked; the argument and assumptions are not automatically graded."}}
```

<details>
<summary>Hint 1</summary>

Use multiplicativity for coprime prime powers.

</details>

<details>
<summary>Hint 2</summary>

Compute each prime-power totient separately before multiplying.

</details>

<details>
<summary>Worked solution</summary>

Thus $\varphi(3^4 5^2)=54\cdot20=1080$.

1. $\varphi(3^4)=3^4-3^3=81-27=54$.
2. $\varphi(5^2)=5^2-5=25-5=20$, and the two powers are coprime.
3. Thus $\varphi(3^4 5^2)=54\cdot20=1080$.

</details>
