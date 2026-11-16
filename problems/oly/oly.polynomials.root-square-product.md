# Evaluate a symmetric root-square product

*Hard · [Original olympiad-style problems](index.md)*

Let a,b,c be the three roots, counted with multiplicity, of $t^3-3t+1$. Find $(1+a^2)(1+b^2)(1+c^2)$.

```answer
{"answer":{"kind":"integer","expected":"17","checker_scope":"Exact short answer only; the complete argument remains a worked solution, not an automatically certified proof or contest result."}}
```

<details>
<summary>Hint 1</summary>

Use Vieta to obtain the elementary symmetric sums of the roots.

</details>

<details>
<summary>Hint 2</summary>

Expand the requested product and express the sum of pairwise squared products using those symmetric sums.

</details>

<details>
<summary>Worked solution</summary>

Vieta and two symmetric-square identities determine the product without solving the cubic.

1. Vieta gives $a+b+c=0$, $ab+bc+ca=-3$ and $abc=-1$. Therefore $a^2+b^2+c^2=6$.
2. The sum $a^2b^2+b^2c^2+c^2a^2=(ab+bc+ca)^2-2abc(a+b+c)=9$. Also $(abc)^2=1$.
3. Expanding the desired product gives $1+6+9+1=17$.

</details>
