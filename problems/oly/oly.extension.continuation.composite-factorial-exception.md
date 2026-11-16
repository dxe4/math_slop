# Classify the composite exception to factorial divisibility

*Hard · [Original olympiad-style problems](index.md)*

Prove that for composite $n>1$, $n\mid(n-1)!$ except when $n=4$, and verify that exception.

```answer
{"answer":{"kind":"proof","expected":null,"checker_scope":"Personal proof reflection only; no automatic proof verdict, contest correctness, graded evidence or checkpoint credit."}}
```

<details>
<summary>Hint 1</summary>

If $n=ab$ with distinct proper factors, both factors occur in the factorial.

</details>

<details>
<summary>Hint 2</summary>

For a square factorization $n=a^2$, use the distinct factors $a,2a$ when $a>2$.

</details>

<details>
<summary>Model proof</summary>

Separate distinct-factor and repeated-factor mechanisms.

1. Choose $n=ab$ with $1<a\le b<n$. If $a<b$, the distinct terms $a,b$ occur in $(n-1)!$, so their product divides it.
2. If this chosen factorization has $a=b$, then $n=a^2$. For $a>2$, the distinct integers $a,2a$ both lie below $a^2$; their product is $2n$, so the factorial is divisible by $n$.
3. The remaining square case is $a=2$, namely $n=4$. Its factorial is $3!=6$, not divisible by four.
4. Every composite integer admits the initial proper factorization, so these cases are exhaustive.

**Self-assessment rubric**

- Choose factors that actually lie among factorial terms.
- Explain why distinct factors supply their full product.
- Repair the repeated-factor case and isolate four.
- Check the stated exceptional factorial and exhaust all composites.

</details>
