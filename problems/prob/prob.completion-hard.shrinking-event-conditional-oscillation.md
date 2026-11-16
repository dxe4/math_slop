# Make shrinking-event conditional laws fail to settle

*Hard · [Probability problems](index.md)*

Construct $U\sim\operatorname{Uniform}(0,1)$ and a binary variable $Y$ measurable in $U$ such that $P(Y=1\mid U\le\epsilon)$ has subsequences tending to zero and to one as $\epsilon\downarrow0$. Use an explicit sequence of interval endpoints. Prove that no version of the regular conditional success function $u\mapsto P(Y=1\mid U=u)$ can be continuous at zero, whatever value is assigned there. Explain why shrinking-event conditioning does not determine a conditional law at this null point.

```answer
{"answer":{"kind":"proof","expected":null,"checker_scope":"Personal proof draft with task-specific semantic rubric; no automatic correctness verdict or checkpoint evidence."}}
```

<details>
<summary>Hint 1</summary>

Colour successive intervals near zero alternately, making each interval much longer than the entire tail below it.

</details>

<details>
<summary>Hint 2</summary>

At an outer endpoint the newest interval dominates the conditional average; null-set changes cannot remove full-measure pieces of both colours.

</details>

<details>
<summary>Model proof</summary>

Alternating dominating shells defeat both averaged and pointwise limiting conditional laws.

1. Set $a_k=2^{-2^k}$ for $k\ge0$. For $U$ uniform on $(0,1)$, set $Y=1$ on shells $(a_{k+1},a_k]$ with even $k$ and $Y=0$ on odd shells and on $(a_0,1)$. This is a measurable binary variable.
2. On an even shell index $k$, the numerator $P(Y=1,U\le a_k)$ is at least $a_k-a_{k+1}$, so its conditional proportion is at least $1-a_{k+1}/a_k\to1$. At an odd index it is at most $a_{k+1}$, so the proportion is at most $a_{k+1}/a_k\to0$.
3. Because $Y$ is a function of $U$, every regular conditional success function equals this shell indicator for Lebesgue-almost every $u>0$. Every shell has positive measure, so even after removing the exceptional null set one can choose a point in each shell. The two resulting sequences approach zero with success-function values one and zero respectively.
4. No chosen value at zero can make that function continuous there. The original joint law places no mass at $U=0$, so assigning a conditional distribution at zero is a version choice; the shrinking-event averages in this example do not even have a limiting distribution to suggest a distinguished choice.

**Self-assessment rubric**

- Specify measurable intervals with a vanishing inner-to-outer ratio.
- Bound the conditional success proportions along both shell parities.
- Show why changes on a null set cannot restore continuity at the null point.

</details>
