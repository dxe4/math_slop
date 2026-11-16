# Break deterministic public-key encryption in the IND-CPA game

*Difficulty 5 of 5 · [Number theory and cryptography audit studio](index.md) · exercise 12 of 13*

Assume a correct public-key encryption scheme has deterministic Enc. Construct an IND-CPA distinguisher for two distinct equal-length messages m0 and m1, and identify exactly where public evaluability and determinism enter.

<details>
<summary>Hint 1</summary>

The adversary knows the public key

</details>

<details>
<summary>Hint 2</summary>

Compute the encryption of m0 locally

</details>

<details>
<summary>Hint 3</summary>

Correctness prevents distinct messages from sharing the same valid deterministic ciphertext

</details>

<details>
<summary>Worked solution</summary>

The adversary chooses distinct equal-length messages m0,m1. The challenger returns $c*=Enc(pk,mb)$ for a hidden uniform bit b. Because pk and the deterministic encryption algorithm are public, the adversary computes $c0=Enc(pk,m0)$ and outputs 0 if $c*=c0$, otherwise 1. If $Enc(pk,m0)=Enc(pk,m1)$, deterministic decryption could not correctly recover both distinct messages from that same ciphertext, so correctness implies they differ. The adversary is therefore always right, with success probability 1 rather than the 1/2 baseline. Public evaluability permits the local comparison; determinism makes the comparison reproducible. Randomization is necessary for ordinary IND-CPA public-key encryption, though randomness alone is not sufficient: a proof under a stated assumption and a complete scheme are still required.

**Answer.** Re-encrypt m0 and compare with the challenge; determinism and the public key make the comparison exact, so the adversary wins with probability 1.

</details>

*Tags: IND-CPA, deterministic encryption, distinguisher, security definition*
