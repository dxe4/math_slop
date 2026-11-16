# A weighted bound for cross-intersecting set pairs

*Hard · [Original olympiad-style problems](index.md)*

Finite pairs $(A_i,B_i)$, $1\le i\le m$, satisfy $A_i\cap B_i=\varnothing$ and $A_i\cap B_j\ne\varnothing$ whenever $i\ne j$. Prove $\sum_{i=1}^m\binom{|A_i|+|B_i|}{|A_i|}^{-1}\le1$, allowing empty sets when the hypotheses permit them.

```answer
{"answer":{"kind":"proof","expected":null,"checker_scope":"Personal proof reflection only; no automatic proof verdict, contest correctness, graded evidence or checkpoint credit."}}
```

<details>
<summary>Hint 1</summary>

Uniformly order the finite union of all sets. Let event $E_i$ mean every element of $A_i$ precedes every element of $B_i$.

</details>

<details>
<summary>Hint 2</summary>

For $i\ne j$, choose $x\in A_i\cap B_j$ and $y\in A_j\cap B_i$. The two events demand opposite orders of $x,y$.

</details>

<details>
<summary>Model proof</summary>

Disjoint ordering events have probabilities given by reciprocal binomial coefficients.

1. If $m=0$ the sum is zero. Otherwise take a uniform permutation of the finite union. Within $A_i\cup B_i$, all interleavings of the two groups are equally likely; exactly one has the whole first group before the second. Thus $\Pr(E_i)=|A_i|!|B_i|!/(|A_i|+|B_i|)!=\binom{|A_i|+|B_i|}{|A_i|}^{-1}$. This remains one if a group is empty.
2. For distinct indices, choose the cross-intersection elements $x,y$ as in the hint. They are distinct, since equality would put one element in both $A_i$ and $B_i$. Event $E_i$ requires $x$ before $y$, while $E_j$ requires $y$ before $x$. Hence the events are pairwise disjoint.
3. The sum of probabilities of disjoint events is at most one, proving the inequality. If an empty group occurs, the cross-intersection assumptions force $m=1$, consistent with the formula rather than requiring an unstated nonemptiness condition.

**Self-assessment rubric**

- Compute the reciprocal-binomial ordering probability including empty groups.
- Choose two distinct elements from the correct cross intersections.
- Derive the incompatible order requirements.
- Sum disjoint event probabilities and address degenerate admissible cases.

</details>
