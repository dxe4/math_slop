# A cyclic sign-changing process that always stops

*Hard · [Original olympiad-style problems](index.md)*

Integers $x_1,\ldots,x_n$ lie cyclically, with $n\ge3$ and positive sum $S$. If $x_i<0$, a move replaces $x_i$ by $-x_i$ and adds its old value to each of its two neighbors. Prove that every legal sequence terminates with all entries nonnegative.

```answer
{"answer":{"kind":"proof","expected":null,"checker_scope":"Personal proof reflection only; no automatic proof verdict, contest correctness, graded evidence or checkpoint credit."}}
```

<details>
<summary>Hint 1</summary>

Write $x_i=y_{i+1}-y_i$ with $y_{i+n}=y_i+S$. A move swaps the adjacent heights $y_i,y_{i+1}$, with the periodic adjustment at the end.

</details>

<details>
<summary>Hint 2</summary>

Use $E=\sum_{i=1}^n[y_i-(i-1)S/n]^2$. Show every move decreases it by at least $2S/n$.

</details>

<details>
<summary>Model proof</summary>

A quadratic potential on periodically lifted heights turns a cyclic process into a controlled adjacent swap.

1. Choose integral heights $y_1=0$, $y_{i+1}=y_i+x_i$ and extend by $y_{i+n}=y_i+S$. For $i<n$, swapping $y_i,y_{i+1}$ flips $x_i$ and adds its former value to the two neighboring differences, exactly the allowed move. At $i=n$, the equivalent replacement is $y_n\mapsto y_1+S$, $y_1\mapsto y_n-S$.
2. Put $t_i=(i-1)S/n$ and $E=\sum(y_i-t_i)^2\ge0$. If an interior pair is $a=y_i>b=y_{i+1}$, swapping changes the two square terms by $-2(a-b)(t_{i+1}-t_i)=-2S(a-b)/n$.
3. At the boundary write $d=y_n-y_1-S=-x_n>0$. The changes $y_n\mapsto y_n-d$, $y_1\mapsto y_1+d$ give $\Delta E=2d[y_1-y_n+(n-1)S/n]+2d^2=-2Sd/n$. Thus the same formula holds for every cyclic index.
4. All heights and negative differences remain integral, so $a-b$ or $d$ is at least one. Every legal move decreases $E$ by at least $2S/n>0$. There can be only finitely many moves; at a maximal endpoint no negative entry remains, exactly as claimed.

**Self-assessment rubric**

- Represent all cyclic entries by heights and verify the boundary move.
- Compute the exact negative change for an interior swap.
- Check the periodic boundary yields the same decrease.
- Use the uniform positive decrease and nonnegative potential to conclude termination.

</details>
