# Construct Floquet coordinates from a matrix logarithm

*Hard · [Differential equations problems](index.md)*

Let A(t) be a continuous complex matrix with period T&gt;0, and let $X'=A(t)X$, X(0)=I. Put M=X(T), choose a complex matrix B with exp(T\*B)=M, and prove P(t)=X(t)\*exp(-t\*B) is invertible and T-periodic, giving X(t)=P(t)\*exp(t\*B). Explain why eigenvalues of B alone need neutral Jordan information for boundedness.

```answer
{"answer":{"kind":"proof","expected":null,"checker_scope":"Personal proof draft and semantic rubric reflection only; no automatic correctness verdict or automatic required slot is supplied."}}
```

<details>
<summary>Hint 1</summary>

Compare X(t+T) with X(t)\*M using uniqueness.

</details>

<details>
<summary>Hint 2</summary>

The chosen exponential and M commute because M is an exponential of B.

</details>

<details>
<summary>Model proof</summary>

A matrix logarithm separates periodic coordinates from constant-coefficient evolution.

1. Both X(t+T) and X(t)\*M solve the same matrix equation in t and have value M at t=0, so uniqueness gives X(t+T)=X(t)\*M. Fundamental matrices are invertible for all t.
2. Since M=exp(T\*B) commutes with exp(-t\*B), one has P(t+T)=X(t)\*exp(T\*B)\*exp(-(t+T)\*B)=P(t). Each factor is invertible and X=P\*exp(t\*B).
3. The continuous periodic P and its inverse are bounded over all time by compactness of one period. Thus boundedness and decay are governed by exp(t\*B). Negative real parts give decay; zero real parts require semisimple Jordan blocks for boundedness, since nontrivial neutral blocks produce polynomial factors.

**Self-assessment rubric**

- Prove the fundamental-matrix translation identity through uniqueness.
- Use the correct commutation and invertibility to construct periodic coordinates.
- Explain bounded coordinate equivalence and the role of neutral Jordan blocks.

</details>
