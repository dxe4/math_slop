# Classify an integer quadratic functional equation

*Hard · [Original olympiad-style problems](index.md)*

Classify all functions $f:\mathbb Z\to\mathbb Z$ satisfying $f(x+y)+f(x-y)=2f(x)+2f(y)$ for all integers $x,y$.

```answer
{"answer":{"kind":"proof","expected":null,"checker_scope":"Personal proof reflection only; no automatic proof verdict, contest correctness, graded evidence or checkpoint credit."}}
```

<details>
<summary>Hint 1</summary>

Zero inputs give the zero value and evenness.

</details>

<details>
<summary>Hint 2</summary>

Fix the second input to one to obtain a constant second-difference recurrence.

</details>

<details>
<summary>Model proof</summary>

Use the integer domain to reconstruct every value exactly.

1. Taking $y=0$ gives $f(0)=0$, and then $x=0$ gives $f(-y)=f(y)$. Put $c=f(1)\in\mathbb Z$.
2. The case $y=1$ reads $f(x+1)-2f(x)+f(x-1)=2c$. Starting from zero and $c$, induction gives $f(n)=cn^2$ for every nonnegative integer.
3. Evenness gives the same formula for negative integers. The induction is unique because each recurrence step determines the next value from its two predecessors.
4. Conversely, expanding both squares shows every integer multiple of the square function satisfies the equation. No continuity or real-domain extension was used.

**Self-assessment rubric**

- Establish the zero value and symmetry.
- Derive and solve a constant second-difference recurrence.
- Cover all integers and prove every proposed function works.

</details>
