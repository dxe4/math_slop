# Propagate local defects on an arbitrary positive mesh

*Hard · [Differential equations problems](index.md)*

Suppose f is Lipschitz in y with constant L&gt;=0 on a region containing the exact and forward-Euler states, and \|y''\|&lt;=M along the exact solution on \[0,T\]. For a mesh 0=t\_0&lt;...&lt;t\_N=T, h\_j=t\_(j+1)-t\_j and exact initial data, prove $|y(T)-Y_N|\le(M/2)\sum_{j=0}^{N-1}h_j^2\exp(L(T-t_{j+1}))$. Deduce convergence whenever the largest step tends to zero.

```answer
{"answer":{"kind":"proof","expected":null,"checker_scope":"Personal proof draft and semantic rubric reflection only; no automatic correctness verdict or automatic required slot is supplied."}}
```

<details>
<summary>Hint 1</summary>

Taylor's integral remainder gives a defect at most M\*h\_j^2/2.

</details>

<details>
<summary>Hint 2</summary>

Iterate the error recurrence and bound products of 1+L\*h by exponentials.

</details>

<details>
<summary>Model proof</summary>

A nonuniform mesh requires each local defect's remaining-time amplification.

1. The exact step satisfies y(t\_(j+1))=y(t\_j)+h\_j\*f(t\_j,y(t\_j))+d\_j with \|d\_j\|&lt;=M\*h\_j^2/2, by integrating the bounded second derivative.
2. Subtracting the Euler step yields e\_(j+1)&lt;=(1+L\*h\_j)\*e\_j+M\*h\_j^2/2. Since e\_0=0, iteration gives e\_N&lt;=(M/2)\*sum\_j h\_j^2\*product\_(k=j+1)^(N-1)(1+L\*h\_k).
3. Use 1+s&lt;=exp(s) for s&gt;=0 to bound the product by exp(L\*(T-t\_(j+1))), giving the stated formula. It is at most (M/2)\*exp(L\*T)\*(max\_j h\_j)\*sum\_j h\_j=(M\*T/2)\*exp(L\*T)\*max\_j h\_j, which tends to zero.

**Self-assessment rubric**

- Obtain a uniform second-order local defect on each actual step.
- Iterate the recurrence with the correct remaining-step products.
- Bound the sum using the maximum step and total interval length.

</details>
