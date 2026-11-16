# Count twos through a factorization chain

*Hard · [Original olympiad-style problems](index.md)*

Find the greatest integer $e\geq0$ for which $2^e$ divides $3^{32}-1$.

```answer
{"answer":{"kind":"integer","expected":"7","checker_scope":"Exact short answer only; the complete argument remains a worked solution, not an automatically certified proof or contest result."}}
```

<details>
<summary>Hint 1</summary>

Factor repeatedly as a difference of squares.

</details>

<details>
<summary>Hint 2</summary>

Every factor of the form an odd square plus one has a fixed residue modulo four.

</details>

<details>
<summary>Worked solution</summary>

Repeated factorization isolates the exceptional first two factors.

1. The factorization is $(3-1)(3+1)(3^2+1)(3^4+1)(3^8+1)(3^{16}+1)$.
2. The first two factors have valuations one and two. Each of the remaining four factors is $2$ modulo four, so each contributes exactly one factor of two.
3. The total valuation is $1+2+4=7$.

</details>
