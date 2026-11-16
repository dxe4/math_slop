# Audit a complete toy RSA round trip

*Difficulty 4 of 5 · [Number theory and cryptography audit studio](index.md) · exercise 11 of 13*

Take $p=11$, $q=17$, $e=7$, and message $M=42$. Compute $n$, $\phi(n)$, the private exponent $d$, ciphertext $C$, and the decoded message. Then state why this calculation proves neither semantic security nor deployment safety.

<details>
<summary>Hint 1</summary>

$7\cdot23\equiv1\pmod{160}$

</details>

<details>
<summary>Hint 2</summary>

Repeated squaring gives $42^2\equiv81$ and $42^4\equiv16\pmod{187}$

</details>

<details>
<summary>Hint 3</summary>

Textbook RSA is deterministic and this modulus is deliberately factorable

</details>

<details>
<summary>Worked solution</summary>

We have $n=11\cdot17=187$ and $\phi(n)=10\cdot16=160$. Extended Euclid gives $d=23$ because $7\cdot23=161\equiv1\pmod{160}$. For encryption, $42^2\equiv81$, $42^4\equiv16$, and $42^7=42^4\cdot42^2\cdot42\equiv16\cdot81\cdot42\equiv15\pmod{187}$. Thus $C=15$. Repeated squaring of 15 to exponent 23 gives $42\pmod{187}$, as RSA correctness also predicts prime by prime, including nonunit messages. This is only an algebraic round trip. The tiny modulus is instantly factorable, textbook RSA is deterministic, no secure encoding or randomness is defined, and no adversarial experiment or side-channel model has been addressed. Real RSA schemes require current standardized encodings and audited implementations.

**Answer.** $n=187$, $\phi(n)=160$, $d=23$, $C=15$, and decoding returns 42; this establishes toy correctness only, not a security definition.

</details>

*Tags: RSA, modular exponentiation, correctness, security boundary*
