# Derive a sharp symmetric mgf envelope and refute a variance-only proxy

*Hard · [Probability problems](index.md)*

Fix $0<v<1/3$. For every symmetric $X$ supported on $[-1,1]$ with $EX^2=v$, prove the sharp bound $E[e^{tX}]\le1+v(\cosh t-1)$ for every real $t$. Identify an attaining law for all $t$, and decide whether every such $X$ must satisfy $E[e^{tX}]\le e^{vt^2/2}$.

```answer
{"answer":{"kind":"proof","expected":null,"checker_scope":"Personal proof draft with task-specific semantic rubric; no automatic correctness verdict or checkpoint evidence."}}
```

<details>
<summary>Hint 1</summary>

Symmetry reduces the mgf to an even function, and every higher even power of a number in the unit interval is bounded by its square.

</details>

<details>
<summary>Hint 2</summary>

For the variance-only assertion, expand the logarithm of the attaining law mgf far enough to see its first nonquadratic term.

</details>

<details>
<summary>Model proof</summary>

An even-power majorant determines the extremal law, whose fourth-order cumulant disproves a naive sub-Gaussian variance proxy.

1. Symmetry gives $E[e^{tX}]=E\cosh(tX)$. Expanding the nonnegative even series and using $X^{2k}\le X^2$ for $k\ge1$ yields the displayed bound. Bounded support justifies the series expectation.
2. The law with mass $1-v$ at zero and $v/2$ at each of $-1,1$ is symmetric, has second moment $v$, and has mgf exactly $1+v(\cosh t-1)$. Thus the bound is sharp simultaneously at every $t$.
3. For this law, Taylor expansion gives $\log E e^{tX}=vt^2/2+v(1-3v)t^4/24+O(t^6)$.
4. The quartic coefficient is positive for the stated range of $v$. Hence for all sufficiently small nonzero $t$, its mgf exceeds $e^{vt^2/2}$. Variance alone is not a valid sub-Gaussian proxy even within this bounded symmetric class.

**Self-assessment rubric**

- Derive the bound with a justified expectation-series interchange.
- Give and verify a law attaining the full envelope.
- Compute the relevant nonquadratic term rather than only matching variance.
- Use its sign to refute the proposed variance-only inequality on an actual nonzero interval of parameters.

</details>
