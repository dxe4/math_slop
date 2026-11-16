# Quadratic parallelogram continuous

*Hard · [Original Putnam-style training](index.md)*

If continuous $f:\mathbb R\to\mathbb R$ satisfies $f(x+y)+f(x-y)=2f(x)+2f(y)$, prove $f(x)=cx^2$ for some real $c$.

```answer
{"answer":{"kind":"proof","expected":null,"checker_scope":"Personal proof draft and semantic rubric reflection only; no automatic correctness verdict."}}
```

<details>
<summary>Hint 1</summary>

First obtain $f(0)=0$, evenness, and the doubling law.

</details>

<details>
<summary>Hint 2</summary>

Use the recurrence at $x=nt$, $y=t$ to determine values on integer and rational multiples.

</details>

<details>
<summary>Model proof</summary>

Continuity and rational density extend the formula to all real $x$, with $c=f(1)$. Direct substitution verifies the family.

1. Setting $x=y=0$ gives $f(0)=0$; setting $x=0$ gives $f(-y)=f(y)$; setting $y=x$ gives $f(2x)=4f(x)$.
2. With $x=nt,y=t$, the equation gives $f((n+1)t)+f((n-1)t)=2f(nt)+2f(t)$. Induction from $n=0,1$ yields $f(nt)=n^2f(t)$ for every integer $n$. Applying this to $t=1/q$ gives $f(p/q)=(p/q)^2f(1)$ for every rational $p/q$.
3. Continuity and rational density extend the formula to all real $x$, with $c=f(1)$. Direct substitution verifies the family.

**Self-assessment rubric**

- Derive f(0)=0, evenness, and f(2x)=4f(x).
- Prove integer and rational square scaling via the recurrence.
- Extend to all reals and verify the quadratic family.

</details>
