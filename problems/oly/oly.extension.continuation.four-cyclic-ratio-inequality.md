# Prove a four-cycle ratio inequality with nonconstant equality

*Hard · [Original olympiad-style problems](index.md)*

For positive a,b,c,d, prove $a/(b+c)+b/(c+d)+c/(d+a)+d/(a+b)\ge2$. Determine all equality cases.

```answer
{"answer":{"kind":"proof","expected":null,"checker_scope":"Personal proof reflection only; no automatic proof verdict, contest correctness, graded evidence or checkpoint credit."}}
```

<details>
<summary>Hint 1</summary>

Use the Engel form of Cauchy with numerators written as squares.

</details>

<details>
<summary>Hint 2</summary>

The resulting denominator is at most half the squared total, with its gap expressed by opposite-coordinate differences.

</details>

<details>
<summary>Model proof</summary>

Combine a nonobvious denominator grouping with exact equality conditions.

1. Let S be the sum. Cauchy bounds the left side below by $S^2/D$, where $D=a(b+c)+b(c+d)+c(d+a)+d(a+b)$.
2. Expansion gives $S^2/2-D=((a-c)^2+(b-d)^2)/2\ge0$, so $S^2/D\ge2$. All denominators are positive.
3. Equality in the second step requires $a=c$ and $b=d$. Under those conditions all four original denominators equal $a+b$, so Cauchy also has equality.
4. Conversely equality in the full chain requires the same opposite-pair conditions. Any two positive alternating values work; all four need not coincide.

**Self-assessment rubric**

- Write the correct denominator after Cauchy.
- Prove its exact bound by squared opposite differences.
- Check equality in both inequalities, not just one.
- Retain the full alternating equality family.

</details>
