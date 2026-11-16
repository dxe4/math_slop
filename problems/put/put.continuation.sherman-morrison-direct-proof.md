# Sherman morrison direct proof

*Hard · [Original Putnam-style training](index.md)*

For invertible $A$ and column vectors $u,v$ with $1+v^TA^{-1}u\ne0$, prove $(A+uv^T)^{-1}=A^{-1}-A^{-1}uv^TA^{-1}/(1+v^TA^{-1}u)$.

```answer
{"answer":{"kind":"proof","expected":null,"checker_scope":"Personal proof draft and semantic rubric reflection only; no automatic correctness verdict."}}
```

<details>
<summary>Hint 1</summary>

Factor $A+uv^T=A(I+A^{-1}uv^T)$.

</details>

<details>
<summary>Hint 2</summary>

Multiply the proposed inverse and collect the rank-one term.

</details>

<details>
<summary>Model proof</summary>

Thus $(I+wv^T)^{-1}=I-wv^T/(1+c)$. Right-multiplying by $A^{-1}$ yields the stated formula; the same multiplication verifies both inverse sides.

1. Set $w=A^{-1}u$ and $c=v^Tw$. The denominator $1+c$ is nonzero by hypothesis.
2. Compute $(I+w v^T)(I-wv^T/(1+c))=I+wv^T[1-1/(1+c)-c/(1+c)]=I$, using $(wv^T)^2=cwv^T$.
3. Thus $(I+wv^T)^{-1}=I-wv^T/(1+c)$. Right-multiplying by $A^{-1}$ yields the stated formula; the same multiplication verifies both inverse sides.

**Self-assessment rubric**

- Factor A+uvᵀ and state why the scalar denominator is nonzero.
- Compute the product using (wvᵀ)²=(vᵀw)wvᵀ.
- Recover and verify the claimed inverse of A+uvᵀ.

</details>
