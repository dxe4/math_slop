# Exploit coprimality after reducing modulo a sum

*Hard · [Original olympiad-style problems](index.md)*

Positive coprime integers $a,b$ satisfy $a+b\mid a^2+b^2$. Find the only possible value of $a+b$.

```answer
{"answer":{"kind":"integer","expected":"2","checker_scope":"Exact short answer only; the complete argument remains a worked solution, not an automatically certified proof or contest result."}}
```

<details>
<summary>Hint 1</summary>

Reduce the square sum modulo a+b.

</details>

<details>
<summary>Hint 2</summary>

Coprimality of a and b implies the product ab is coprime to a+b.

</details>

<details>
<summary>Worked solution</summary>

A divisibility constraint and a coprimality cancellation leave a tiny possible sum.

1. Modulo $a+b$, the square sum is congruent to $-2ab$. Thus $a+b\mid2ab$.
2. Since $\gcd(a,b)=1$, both a and b are coprime to a+b, so $\gcd(ab,a+b)=1$. Hence $a+b$ divides two.
3. Positivity gives $a+b\geq2$, so it must be two, attained by a=b=1.

</details>
