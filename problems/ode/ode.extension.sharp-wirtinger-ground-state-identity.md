# Prove the sharp interval inequality through the first mode

*Hard · [Differential equations problems](index.md)*

For real C^2 u on \[0,pi\] with u(0)=u(pi)=0, prove $\int_0^\pi u'^2\ge\int_0^\pi u^2$, with equality exactly when u is a constant multiple of sin t. Use the substitution u=v\*sin t and justify the endpoint limits.

```answer
{"answer":{"kind":"proof","expected":null,"checker_scope":"Personal proof draft and semantic rubric reflection only; no automatic correctness verdict or automatic required slot is supplied."}}
```

<details>
<summary>Hint 1</summary>

Integrate the cross term after expanding u'^2-u^2.

</details>

<details>
<summary>Hint 2</summary>

Although v is defined initially only inside the interval, u's endpoint vanishing keeps v bounded near each endpoint.

</details>

<details>
<summary>Model proof</summary>

Factoring out the positive ground state turns the spectral gap into a square.

1. On (0,pi), set v=u/sin t. Direct expansion gives uprime^2-u^2=sin^2(t)\*vprime^2+(sin(t)\*cos(t)\*v^2)prime.
2. Integrate over \[epsilon,pi-epsilon\]. Since u is C^2 and vanishes at the endpoints, u/sin t stays bounded near them. Thus the boundary expression sin(t)\*cos(t)\*v^2 tends to zero at both ends. Let epsilon decrease to zero; the nonnegative square integrals increase to their full integral, yielding integral(uprime^2-u^2)=integral sin^2(t)\*vprime^2&gt;=0.
3. Equality makes vprime zero throughout the interior by continuity and positivity of sin t there, so u=C\*sin t. Conversely those functions give equality by direct substitution.

**Self-assessment rubric**

- Derive the square-plus-boundary identity accurately.
- Bound the quotient at each endpoint and justify the limiting integral.
- Characterize every equality case and verify the converse.

</details>
