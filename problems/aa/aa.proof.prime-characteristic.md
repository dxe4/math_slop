# A finite field has prime characteristic

*Medium · [Abstract algebra problems](index.md)*

Prove that every finite field $F$ has a positive prime characteristic.

```answer
{"answer":{"kind":"proof","expected":null,"checker_scope":"Personal proof reflection only; no automatic correctness verdict, demonstration or checkpoint."}}
```

<details>
<summary>Hint 1</summary>

First use finiteness on successive sums of the identity element.

</details>

<details>
<summary>Hint 2</summary>

If the least positive vanishing multiple were composite, multiply the two smaller corresponding multiples.

</details>

<details>
<summary>Model proof</summary>

Finiteness creates a positive characteristic, and no zero divisors force it to be prime.

1. The sequence $0,1,1+1,\ldots$ takes values in a finite set, so two terms agree. Subtraction yields a positive integer multiple of $1$ equal to zero.
2. Let $p$ be the least such positive integer. Since $1\ne0$, $p>1$.
3. If $p=ab$ with $1<a,b<p$, then both $a1$ and $b1$ are nonzero by minimality, but $(a1)(b1)=p1=0$.
4. This contradicts the field property of having no zero divisors. Hence $p$ is prime.

**Self-assessment rubric**

- Derive a positive vanishing multiple using finiteness.
- Choose the least positive multiple and rule out one.
- Use a hypothetical factorization and the no-zero-divisors property to prove primality.

</details>
