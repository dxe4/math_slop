# Prove the Schwarzian chain rule and its fractional-linear zero case

*Hard · [Calculus](index.md)*

For C³ real functions with nonvanishing first derivatives define $S(f)=f‴/f′-(3/2)(f″/f′)^2$. Prove S(f∘g)=(S(f)∘g)(g′)²+S(g). Then prove S((ax+b)/(cx+d))=0 on every interval where cx+d≠0, assuming ad−bc≠0.

```answer
{"answer":{"kind":"proof","expected":null,"checker_scope":"Personal proof reflection only; no automatic proof verdict or graded evidence."}}
```

<details>
<summary>Hint 1</summary>

Set L\_f=f″/f′ and rewrite S(f)=L\_f′−L\_f²/2.

</details>

<details>
<summary>Hint 2</summary>

The logarithmic derivative of the composite is (L\_f∘g)g′+L\_g; its mixed terms cancel because g″=g′L\_g.

</details>

<details>
<summary>Model proof</summary>

A logarithmic derivative organizes the third-order algebra into a cancellation identity.

1. Put L\_f=f″/f′. Quotient differentiation yields L\_f′=f‴/f′−(f″/f′)², hence S(f)=L\_f′−L\_f²/2. The ordinary second-order chain rule gives L\_{f∘g}=(L\_f∘g)g′+L\_g.
2. Differentiate this identity and subtract half its square. The terms in (g′)² combine to (L\_f′−L\_f²/2)∘g times (g′)². The terms containing only g combine to L\_g′−L\_g²/2. The remaining mixed term is (L\_f∘g)(g″−g′L\_g)=0. This proves the chain rule.
3. For h=(ax+b)/(cx+d), h′=(ad−bc)/(cx+d)² is nonzero on the stated interval. Direct differentiation gives L\_h=−2c/(cx+d) and L\_h′=2c²/(cx+d)².
4. Thus L\_h′−L\_h²/2=0, including the affine case c=0. The denominator and determinant hypotheses ensure every quotient used in the proof is valid.

**Self-assessment rubric**

- Rewrites the Schwarzian correctly using L\_f.
- Derives the composite L and explicitly cancels its mixed terms.
- Computes the nonzero first derivative and logarithmic derivative of the fractional-linear map.
- States where all denominators remain nonzero and verifies the resulting zero Schwarzian.

</details>
