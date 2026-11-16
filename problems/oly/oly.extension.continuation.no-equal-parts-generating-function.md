# Derive a generating function with forbidden repeated parts

*Hard · [Original olympiad-style problems](index.md)*

Let $a_n$ count ordered compositions of n into parts from $\{1,2,3\}$ with no equal adjacent parts, and let $a_0=1$. Derive a rational expression for the formal series $F(t)=\sum_{n\ge0}a_nt^n$ and prove it counts exactly these compositions.

```answer
{"answer":{"kind":"proof","expected":null,"checker_scope":"Personal proof reflection only; no automatic proof verdict, contest correctness, graded evidence or checkpoint credit."}}
```

<details>
<summary>Hint 1</summary>

Use three auxiliary series recording the final part.

</details>

<details>
<summary>Hint 2</summary>

Appending part i is allowed after every composition except those already ending in i.

</details>

<details>
<summary>Model proof</summary>

Use a coupled last-part decomposition, including the empty composition.

1. Let $A_i$ count nonempty valid compositions ending in i. Appending i gives the exact formal identity $A_i=t^i(F-A_i)$, since the forbidden final class is removed while the empty composition is retained.
2. Thus $A_i=t^iF/(1+t^i)$ for i one, two and three. Also $F=1+A_1+A_2+A_3$.
3. Solving gives $F=[1-t/(1+t)-t^2/(1+t^2)-t^3/(1+t^3)]^{-1}$. All inverted series have constant coefficient one, so formal division is legitimate.
4. The decomposition is bijective by deleting the last part, and its equations uniquely determine coefficients successively from the constant term. Therefore the rational expression counts exactly the stated objects, with no analytic convergence assumption needed.

**Self-assessment rubric**

- Define the ending-part classes and include the empty object correctly.
- Prove each append/delete equation is exact.
- Solve the coupled equations with legitimate formal inverses.
- Explain why every coefficient has the intended combinatorial meaning.

</details>
