# Correct decryption, broken secrecy

*Difficulty 3 of 5 · [Mathematics for computer science proof and counterexample studio](index.md) · exercise 8 of 15*

Two equal-length bit messages $m_1,m_2$ are encrypted with the same one-time-pad key $k$: $c_1=m_1\mathbin{\mathtt{xor}}k$ and $c_2=m_2\mathbin{\mathtt{xor}}k$. Derive the leakage and explain why correct decryption does not imply security.

<details>
<summary>Hint 1</summary>

Xor the ciphertexts

</details>

<details>
<summary>Hint 2</summary>

k xor k is zero

</details>

<details>
<summary>Hint 3</summary>

Security is an adversarial experiment, not only an inverse equation

</details>

<details>
<summary>Worked solution</summary>

Xoring gives $c_1\mathbin{\mathtt{xor}}c_2=(m_1\mathbin{\mathtt{xor}}k)\mathbin{\mathtt{xor}}(m_2\mathbin{\mathtt{xor}}k)=m_1\mathbin{\mathtt{xor}}m_2$ because each key bit cancels. This reveals an exact relation between plaintexts. Known structure or one known message can expose the other. Honest decryption still works: $c_i\mathbin{\mathtt{xor}}k=m_i$. Thus functional correctness and secrecy are distinct. Information-theoretic one-time-pad secrecy requires a uniformly random secret key at least as long as the message and used only once. Reuse violates the randomness relation assumed by the secrecy proof even though every ciphertext remains decryptable.

**Answer.** $c_1\mathbin{\mathtt{xor}}c_2=m_1\mathbin{\mathtt{xor}}m_2$; decryption remains correct, but key reuse violates the condition supporting perfect secrecy.

</details>

*Tags: cryptography, one-time pad, key reuse, security definition*
