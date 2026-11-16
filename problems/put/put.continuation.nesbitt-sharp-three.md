# Nesbitt sharp three

*Hard · [Original Putnam-style training](index.md)*

For $a,b,c>0$, prove $a/(b+c)+b/(c+a)+c/(a+b)\ge3/2$, with equality characterization.

```answer
{"answer":{"kind":"proof","expected":null,"checker_scope":"Personal proof draft and semantic rubric reflection only; no automatic correctness verdict."}}
```

<details>
<summary>Hint 1</summary>

Use a Cauchy–Schwarz quotient inequality on the three fractions.

</details>

<details>
<summary>Hint 2</summary>

Simplify the sum of the three denominators.

</details>

<details>
<summary>Model proof</summary>

Combining gives at least $3/2$. Equalities in both steps require $a=b=c$, and that choice attains the bound.

1. By Cauchy–Schwarz in Engel form, $\sum a/(b+c)=\sum a^2/[a(b+c)]\ge(a+b+c)^2/[2(ab+bc+ca)]$.
2. Also $(a+b+c)^2\ge3(ab+bc+ca)$ because the difference is $\frac12[(a-b)^2+(b-c)^2+(c-a)^2]$.
3. Combining gives at least $3/2$. Equalities in both steps require $a=b=c$, and that choice attains the bound.

**Self-assessment rubric**

- Apply the Engel form of Cauchy–Schwarz to the three denominators.
- Prove the symmetric sum bound via nonnegative squared differences.
- Show both inequalities are sharp exactly at equal positive variables.

</details>
