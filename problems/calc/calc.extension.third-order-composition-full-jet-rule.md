# Derive a third-order chain rule with its mixed coefficient

*Hard · [Calculus](index.md)*

For C³ real functions f,g derive the complete formula for $(f\circ g)^{(3)}$. Then evaluate at a where g′=−1,g″=4,g‴=−2 and f′(g(a))=2,f″(g(a))=3,f‴(g(a))=5. Explain the origin of the coefficient of the mixed term.

```answer
{"answer":{"kind":"proof","expected":null,"checker_scope":"Personal proof reflection only; no automatic proof verdict or graded evidence."}}
```

<details>
<summary>Hint 1</summary>

Differentiate the first chain rule twice, retaining every product term.

</details>

<details>
<summary>Hint 2</summary>

Two mixed terms arise from the derivative of the squared first derivative, and one from the derivative of the second summand.

</details>

<details>
<summary>Model proof</summary>

A higher chain rule records several ways derivatives can fall on inner and outer factors.

1. First (f∘g)′=(f′∘g)g′. Differentiating gives (f∘g)″=(f″∘g)(g′)²+(f′∘g)g″.
2. Differentiate the first second-order summand to get (f‴∘g)(g′)³+2(f″∘g)g′g″. Differentiate the second to get (f″∘g)g′g″+(f′∘g)g‴.
3. Adding produces (f∘g)‴=(f‴∘g)(g′)³+3(f″∘g)g′g″+(f′∘g)g‴. The mixed coefficient 3 is 2+1 from those separate product contributions.
4. At a the value is 5(−1)³+3·3·(−1)·4+2(−2)=−5−36−4=−45.

**Self-assessment rubric**

- Derives the two correct second-order summands.
- Differentiates both summands fully and explains the mixed coefficient 3.
- Uses the outer derivatives at g(a), not at a, and obtains −45 from the supplied jets.

</details>
