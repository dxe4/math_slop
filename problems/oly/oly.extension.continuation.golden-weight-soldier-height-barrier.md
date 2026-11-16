# A finite army cannot cross the fifth-row barrier

*Hard · [Original olympiad-style problems](index.md)*

Finitely many pebbles occupy distinct integer lattice points $(x,y)$ with $y\le0$. A move jumps one pebble horizontally or vertically over an adjacent pebble into the next empty lattice point, removing the jumped pebble. Prove that no finite sequence can put a pebble at $(0,5)$. There is no bound on the finite initial army size.

```answer
{"answer":{"kind":"proof","expected":null,"checker_scope":"Personal proof reflection only; no automatic proof verdict, contest correctness, graded evidence or checkpoint credit."}}
```

<details>
<summary>Hint 1</summary>

Let $q=(\sqrt5-1)/2$, so $q+q^2=1$, and assign point $(x,y)$ weight $q^{|x|+|y-5|}$.

</details>

<details>
<summary>Hint 2</summary>

Show the weight of a landing point never exceeds the sum at the two removed starting points. The total weight of all points with $y\le0$ is exactly one.

</details>

<details>
<summary>Model proof</summary>

A summable golden-ratio potential gives a strict finite-army bound independent of its size.

1. For any horizontal or vertical three-point jump, let the landing-point distance from $(0,5)$ be $d$. The two source distances are at most $d+1$ and $d+2$ by the Manhattan triangle inequality. Since $0<q<1$, their weights sum to at least $q^{d+1}+q^{d+2}=q^d$. Thus every move makes total occupied weight nonincreasing.
2. The total weight of the entire initial half-plane is $[\sum_{x\in\mathbb Z}q^{|x|}][\sum_{y\le0}q^{5-y}]=[(1+q)/(1-q)]q^5/(1-q)$. Using $1-q=q^2$ and $1+q=1/q$, this equals one.
3. Every finite initial set has total weight strictly less than one, because it omits infinitely many positive terms of that convergent sum. Every later position therefore also has weight less than one.
4. A pebble at $(0,5)$ alone contributes weight one, contradicting the bound. Finiteness of the initial set is essential to the strict inequality; treating an infinite fully occupied half-plane as an allowed initial position would invalidate this argument.

**Self-assessment rubric**

- Use distance inequalities and q+q squared=1 for every jump orientation.
- Evaluate both convergent geometric sums exactly.
- Explain why every finite initial army has weight strictly below one.
- Compare the target pebble weight with the nonincreasing total.

</details>
