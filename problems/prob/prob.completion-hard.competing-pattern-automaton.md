# Resolve an overlapping-pattern race

*Hard · [Probability problems](index.md)*

Flip a fair coin until either $HHT$ or $HTH$ first appears as three consecutive tosses, and let $\tau$ be that stopping time. Determine both $P(HHT\text{ appears first})$ and $E\tau$, proving that the stopping time has finite mean before solving expectation equations. Account explicitly for overlapping partial patterns.

```answer
{"answer":{"kind":"proof","expected":null,"checker_scope":"Personal proof draft with task-specific semantic rubric; no automatic correctness verdict or checkpoint evidence."}}
```

<details>
<summary>Hint 1</summary>

Retain only the longest current suffix that is a proper prefix of one of the two target words.

</details>

<details>
<summary>Hint 2</summary>

A disjoint block equal to one target forces termination by its end. Use this to justify the expectation calculation.

</details>

<details>
<summary>Model proof</summary>

A prefix automaton handles overlaps, while a geometric block bound justifies its equations.

1. The transient suffix states are $0,H,HH,HT$. Every independent block of three tosses has probability $1/8$ of equalling $HHT$; if such a block occurs, the race has ended by its end. Thus $P(\tau>3m)\le(7/8)^m$ and $E\tau<\infty$.
2. Let $p_s$ be the probability that $HHT$ wins starting in suffix state $s$. The transitions give $p_0=(p_0+p_H)/2$, $p_H=(p_{HH}+p_{HT})/2$, $p_{HH}=(p_{HH}+1)/2$, and $p_{HT}=p_0/2$, since an $H$ from $HT$ ends in the losing pattern.
3. These imply $p_{HH}=1$, $p_0=p_H=1/2+p_0/4$, hence $p_0=2/3$. The self-loop at $HH$ retains the overlapping prefix instead of starting afresh.
4. For remaining mean times, $e_0=1+(e_0+e_H)/2$, $e_H=1+(e_{HH}+e_{HT})/2$, $e_{HH}=1+e_{HH}/2$, $e_{HT}=1+e_0/2$. Therefore $e_{HH}=2$, $e_H=5/2+e_0/4$, and $e_0=2+e_H=6$. The initial state is $0$, so the requested pair is $(2/3,6)$.

**Self-assessment rubric**

- Give a geometric tail bound before manipulating expected remaining times.
- Identify the proper suffix states and all reset or absorption transitions.
- Solve both systems with their distinct boundary rewards.

</details>
