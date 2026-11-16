# Separate total variation from entropy convergence

*Hard · [Probability problems](index.md)*

On $[0,1]$ with Lebesgue reference probability $Q$, construct strictly positive densities $f_n$ such that $\|f_n-1\|_1\to0$, $D(f_nQ\|Q)\to1$, and $D(Q\|f_nQ)\to0$, where $D(P\|Q)=\int\log(dP/dQ)\,dP$. Give exact densities and prove each limit without replacing a small interval by a point mass.

```answer
{"answer":{"kind":"proof","expected":null,"checker_scope":"Personal proof draft with task-specific semantic rubric; no automatic correctness verdict or checkpoint evidence."}}
```

<details>
<summary>Hint 1</summary>

Mix the uniform density with a vanishing amount of uniform mass on an exponentially short interval.

</details>

<details>
<summary>Hint 2</summary>

Split each entropy integral over the spike interval and its complement; the two orientations weight the logarithm differently.

</details>

<details>
<summary>Model proof</summary>

A vanishing amount of mass can carry a fixed logarithmic information cost.

1. For $n\ge2$, set $\epsilon_n=1/n$, $\delta_n=e^{-n}$ and $f_n=1-\epsilon_n+(\epsilon_n/\delta_n)\mathbf1_{[0,\delta_n]}$. It is positive and integrates to one. The difference from one has integral absolute value $2\epsilon_n(1-\delta_n)\to0$.
2. Put $A_n=1-1/n+e^n/n$ and $B_n=1-1/n$. Then $D(f_nQ\|Q)=\delta_n A_n\log A_n+(1-\delta_n)B_n\log B_n$. The second term tends to zero.
3. Here $\delta_n A_n=1/n+e^{-n}(1-1/n)$ and $\log A_n=n-\log n+\log(1+(n-1)e^{-n})$. Their product tends to one, proving the forward entropy limit.
4. The reverse entropy is $-\int\log f_n\,dQ\ge0$ by Jensen. Since $f_n\ge B_n$, it is at most $-\log B_n\to0$. This establishes the reverse limit while displaying exactly why the forward weighting retains the spike cost.

**Self-assessment rubric**

- Normalise a strictly positive spike mixture and compute its absolute density error.
- Keep the spike width, height and logarithm in the correct product.
- Control the opposite orientation by a justified nonnegative squeeze.

</details>
