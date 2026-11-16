# Solve an exponential equation exactly

*Difficulty 4 of 5 · [Algebra & Functions Core Practice](index.md) · exercise 10 of 12*

Solve $3\cdot 4^{t}=60$. Give the exact answer using a logarithm and a decimal approximation to three places.

<details>
<summary>Hint 1</summary>

Divide by $3$ first to isolate the exponential term.

</details>

<details>
<summary>Hint 2</summary>

Take logarithms of both sides and use the power rule $\log_b(a^c)=c\log_b(a)$.

</details>

<details>
<summary>Worked solution</summary>

Divide both sides by $3$ to obtain $4^{t}=20$. Take logarithms: $\ln(4^{t})=\ln(20)$, so $t\ln(4)=\ln(20)$. Therefore $t=\dfrac{\ln(20)}{\ln(4)}$. This is also $\log_{4}(20)$ by the change-of-base formula. Numerically, $\ln(20)\approx 2.9957$ and $\ln(4)\approx 1.3863$, so $t\approx 2.161$. Check: $4^{2.161}\approx 20.000$, and $3\cdot 20=60$.

**Answer.** $t=\log_{4}(20)=\dfrac{\ln(20)}{\ln(4)}\approx 2.161$

</details>

*Tags: exponentials-logarithms*
