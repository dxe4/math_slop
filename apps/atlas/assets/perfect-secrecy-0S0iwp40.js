var e=`---
id: visual-lab-perfect-secrecy
title: "A ciphertext and a posterior"
license: CC BY-SA 4.0
---

# A ciphertext and a posterior

When does a two-bit ciphertext leave every message prior unchanged?

Choose a prior on four two-bit messages, an independent key law and an observed ciphertext. The table compares the prior with the posterior whenever the ciphertext has positive probability. Reset restores the native distributions. The controls use strictly positive key weights, so every displayed ciphertext has positive probability. An observation of probability zero in a different model would not have a defined posterior.

## What to notice

Encryption is $C=M\\mathbin{\\oplus}K$. With a uniform independent key, every message produces each ciphertext with probability one quarter. Bayes' rule therefore leaves every message prior unchanged after any observed ciphertext. A nonuniform independent key does not have this property for every prior: for the uniform message prior, the posterior at message $m$ is the key probability at $c\\mathbin{\\oplus}m$.

## Worked example

Choose a uniform message prior and key weights $(9,1,1,1)$. The normalized key probabilities are $3/4,1/12,1/12,1/12$. Observing ciphertext $c$ gives posterior probability $3/4$ to message $c$ and $1/12$ to each other message, instead of the uniform prior $1/4$. A uniform key leaves that prior uniform and also preserves nonuniform message priors. Uniformity of the message alone never establishes perfect secrecy.

## Scope

The model concerns information-theoretic secrecy of one independent two-bit pad use. It provides neither authenticity nor protection against reuse of the same pad. Reusing a pad reveals the xor of two messages. Modern computational security and practical key generation need the separate definitions in the cryptography book.

## Preparation and continuation

- [Ciphers perfect secrecy security](/resources/library%3Abook-cryptography%3Aciphers-perfect-secrecy-security/)

The interactive controls, reset and data table use the shared Euler Lab frame. Read marks and saved notes remain personal study records.
`;export{e as default};