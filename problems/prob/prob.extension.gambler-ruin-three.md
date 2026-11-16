# Hit the upper absorbing boundary

*Medium · [Probability problems](index.md)*

A time-homogeneous walk on $\{0,1,2,3\}$ is absorbing at $0,3$. From each interior state it moves to each adjacent state with probability $1/2$. Starting at state $1$, find the probability of hitting $3$ before $0$.

```answer
{"answer":{"kind":"rational","expected":{"numerator":1,"denominator":3},"checker_scope":"Checks the upper-before-lower hitting probability for this finite fair walk from state one only."}}
```

<details>
<summary>Hint 1</summary>

Assign a hitting probability to each state, with boundary values fixed by the target event.

</details>

<details>
<summary>Hint 2</summary>

Use first-step conditioning at both interior states and solve the resulting two linear equations.

</details>

<details>
<summary>Worked solution</summary>

Solve the finite harmonic boundary problem.

1. Let $h_i=P_i(T_3<T_0)$. The boundary values are $h_0=0$, $h_3=1$. First-step conditioning gives $h_1=h_2/2$ and $h_2=(h_1+1)/2$.
2. Substituting yields $h_1=(h_1+1)/4$, hence $3h_1=1$ and $h_1=1/3$; the corresponding $h_2=2/3$ satisfies both equations.
3. These equations determine the actual hitting probabilities uniquely. Also absorption is almost surely finite: from either interior state there is probability at least $1/4$ to reach a boundary within two steps, so the Markov property bounds survival for $2m$ steps by $(3/4)^m\to0$. Thus the answer has no hidden non-absorption convention.

The harmonic equations give $h_1=1/3$ and $h_2=2/3$.

</details>
