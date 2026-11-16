# Give explicit two-sided asymptotic witnesses

*Medium · [Discrete mathematics](index.md)*

Without calculus, prove $3n^2-2n+1=\Theta(n^2)$ for positive integer n by giving fixed positive lower and upper factors and a fixed threshold.

```answer
{"answer":{"kind":"proof","expected":null,"checker_scope":"Personal proof and rubric reflection only; no automatic correctness verdict or automatic required objective slot is supplied."}}
```

<details>
<summary>Hint 1</summary>

Try factors one and three after the first positive index.

</details>

<details>
<summary>Hint 2</summary>

Express each required difference in a form with a clear sign.

</details>

<details>
<summary>Model proof</summary>

Explicit algebraic inequalities provide witnesses independent of n.

1. For n&gt;=1, $3n^2-2n+1-n^2=2n(n-1)+1\geq0$, giving the lower bound n squared.
2. Also -2n+1&lt;=0, so $3n^2-2n+1\leq3n^2$.
3. Fixed factors c\_1=1,c\_2=3 and threshold N=1 work for every later integer n, proving the stated tight order.

**Self-assessment rubric**

- State positive factors and one threshold independent of the later input.
- Prove lower and upper bounds on the whole tail.
- Connect the witnesses to the definition of tight asymptotic order.

</details>
