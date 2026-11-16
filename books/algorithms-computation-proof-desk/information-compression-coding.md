
# Information, Compression, Noise, and Coding

Information theory makes uncertainty quantitative and communication auditable. Its conclusions always name a source or channel model. A compressor cannot shorten every finite string injectively, and an error-correcting code cannot repair arbitrary corruption without redundancy or a bounded error model.

## 1. Self-information and entropy

For an event of probability $p>0$, self-information is $-\log_{2} p$ bits. Independent event information adds because logarithms turn products into sums. For a finite random variable $X$ with mass $p(x)$, Shannon entropy is

$H(X) = - \sum_{x} p(x) \log_{2} p(x)$,

with $0 \log 0=0$. It is an expectation under a stated distribution, not a property of one symbol string by itself.

Entropy is nonnegative and at most $\log_{2} \lvert A\rvert$ for an alphabet $A$, with equality at the uniform distribution. The upper bound follows from nonnegativity of relative entropy, or from concavity of logarithm.

## 2. Joint and conditional information

Joint entropy measures uncertainty in a pair. Conditional entropy averages remaining uncertainty:

$H(X\mid Y)=\sum_{y} p(y) H(X\mid Y=y)$.

The chain rule is $H(X,Y)=H(Y)+H(X\mid Y)$. Mutual information

\[I(X;Y)=H(X)-H(X\mid Y)\]

is symmetric and nonnegative; it measures reduction in uncertainty under the model. Independence gives zero mutual information, though zero covariance alone does not.

## 3. Prefix codes

A binary prefix code assigns no codeword as a prefix of another, so concatenations decode left to right. Codeword lengths $ell_{i}$ satisfy Kraft's inequality $\sum_{i} 2^{-ell_{i}} \le 1$. The binary-tree proof assigns each word a node; prefix-free words select disjoint subtrees whose leaf fractions sum to at most one.

For any prefix code, expected length is at least entropy. Huffman's greedy algorithm repeatedly combines the two least probable symbols and produces an optimal binary prefix code for the declared symbol probabilities. The exchange proof places two least likely symbols as deepest siblings in some optimum, contracts them, and recurses.

## 4. Compression boundaries

No lossless compressor can make every $n$-bit string shorter: there are $2^n$ inputs but only $1+2+\ldots+2^{n-1}=2^n-1$ shorter binary outputs. Thus compression exploits nonuniformity, repeated structure, a shared model, or willingness to lose information.

Metadata and model cost count. A codebook that compresses the body but costs more than it saves is not a shorter complete message. Universal compressors adapt to data but do not defeat the counting argument.

## 5. Channels and errors

A discrete channel specifies $P(Y=y\mid X=x)$. A binary symmetric channel flips each bit independently with probability $q$. Independence is a modeling assumption; burst errors need a different channel. Channel capacity is the maximum mutual information over input distributions and sets an asymptotic reliable-rate boundary under the coding theorem. This chapter uses that statement as a forward theorem, not as a finite-block guarantee.

## 6. Hamming geometry

Hamming distance counts coordinates in which equal-length words differ. It is a metric. A code $C \subseteq \{0,1\}^n$ with minimum distance $d$ detects up to $d-1$ errors: a corrupted word differing in fewer than $d$ positions cannot equal another codeword. It corrects up to $\left\lfloor (d-1)/2 \right\rfloor$ errors because radius-$t$ balls around codewords are disjoint when $2t<d$.

Correction beyond that radius may still succeed on some patterns, but the universal guarantee ends.

## 7. Linear codes

A binary linear $[n,k]$ code is a $k$-dimensional subspace $C$ of $\mathbb{F}_{2}^n$. A generator matrix maps messages to codewords. A parity-check matrix $H$ is chosen so that $\ker H=C$ (equivalently, its rows span the orthogonal complement of $C$ and it has rank $n-k$). Thus $Hc^T=0$ exactly for codewords. For received word $r=c+e$, the syndrome is $Hr^T=He^T$, depending only on the error coset.

The repetition code $\{000,111\}$ has distance three and corrects one bit. A parity bit detects every odd number of bit flips but can miss an even number. Detection and correction claims must quantify the error family.

## 8. A syndrome decoder

The following standard-library program encodes the binary Hamming $(7,4)$ code in systematic positions and corrects one flipped bit. Its bit convention is explicit and exhaustively tested for all messages and single-bit errors.

```python
def encode(data):
    d1, d2, d3, d4 = data
    p1 = d1 ^ d2 ^ d4
    p2 = d1 ^ d3 ^ d4
    p4 = d2 ^ d3 ^ d4
    return [p1, p2, d1, p4, d2, d3, d4]

def decode(received):
    word = list(received)
    s1 = word[0] ^ word[2] ^ word[4] ^ word[6]
    s2 = word[1] ^ word[2] ^ word[5] ^ word[6]
    s4 = word[3] ^ word[4] ^ word[5] ^ word[6]
    position = s1 + 2 * s2 + 4 * s4
    if position:
        word[position - 1] ^= 1
    return [word[2], word[4], word[5], word[6]]

if __name__ == "__main__":
    for value in range(16):
        data = [(value >> shift) & 1 for shift in range(4)]
        codeword = encode(data)
        assert decode(codeword) == data
        for index in range(7):
            damaged = codeword.copy()
            damaged[index] ^= 1
            assert decode(damaged) == data
```

The exhaustive check is deductive evidence for this finite implementation only after inspecting that the loops enumerate all 16 messages and seven one-bit locations. The distance theorem explains why correction works.

## 9. Source coding versus channel coding

Compression removes predictable redundancy relative to a source model. Channel coding adds structured redundancy to resist noise. A practical pipeline may compress, add error correction, modulate, transmit, detect, decode, and decompress. Reversing or merging these roles obscures failure modes.

Checksums detect accidental corruption; cryptographic authentication addresses an active adversary. A low collision rate under random errors is not a forgery-resistance theorem.

## 10. Finite-block reporting

Report block length, message length, rate $k/n$, minimum distance or measured decoder region, assumed error process, decoding rule, and failure behavior. Simulations estimate performance under their sampling model; they do not establish an asymptotic coding theorem or protect against an adaptive adversary.

## Practice with fully explained solutions

1. **How many bits of self-information has an event of probability $1/8$?** $-\log_{2}(1/8)=3$ bits.
2. **What is the entropy of a fair bit?** $-2(1/2)\log_{2}(1/2)=1$ bit; uniformity attains the two-symbol maximum.
3. **What is the entropy of a deterministic variable?** Zero, because the certain outcome contributes $-1 \log_{2} 1=0$ and impossible outcomes contribute zero by convention.
4. **Why is entropy not the length of one message?** It averages information over a declared distribution. Individual code lengths can lie above or below the average.
5. **State the chain rule.** $H(X,Y)=H(Y)+H(X\mid Y)$: identify $Y$, then the remaining uncertainty in $X$ once $Y$ is known.
6. **When is mutual information zero?** For independent finite variables; their conditional distribution equals the marginal, so learning one does not reduce entropy of the other.
7. **Are codewords $0,10,110,111$ prefix-free?** Yes. No listed word begins with another complete listed word, so concatenations have unique left-to-right parsing.
8. **Check Kraft for lengths $1,2,3,3$.** $1/2+1/4+1/8+1/8=1$, so the lengths fill a binary prefix tree exactly.
9. **Why cannot every string be compressed?** There are fewer shorter outputs than $n$-bit inputs; an injective lossless map cannot place $2^n$ objects into $2^n-1$ slots.
10. **What hidden cost can reverse a compression gain?** The decoder's codebook or model description; total transmitted representation includes it.
11. **Prove Hamming distance satisfies the triangle inequality.** At every coordinate where $x$ differs from $z$, at least one of $x$ versus $y$ or $y$ versus $z$ differs. Count coordinates.
12. **What does minimum distance five guarantee?** Detection of any four errors and correction of any two, since $d-1=4$ and $\left\lfloor (d-1)/2 \right\rfloor=2$.
13. **Why are correction balls disjoint?** If a word were within distance $t$ of two codewords, the triangle inequality would place those codewords within $2t<d$, contradicting minimum distance.
14. **What does a zero syndrome prove?** Provided $H$ is a full parity-check matrix with $\ker H=C$, the received word satisfies all parity checks exactly when it is a codeword. It does not prove no error occurred: an error equal to a nonzero codeword is undetected. The weaker equation $Hc^T=0$ for codewords alone would not support the converse.
15. **What does the repetition code correct?** Among three transmitted bits it universally corrects one flip by majority; two flips can lead to the other codeword.
16. **Why is a checksum not authentication?** An attacker may deliberately alter the message and recompute an unkeyed checksum; authentication requires a secret or other adversarial security mechanism.

## Project: finite coding laboratory

Extend the Hamming implementation with explicit `encode`, `corrupt`, `syndrome`, `decode`, and `audit` boundaries. Exhaustively enumerate all messages, no-error cases, all single-bit errors, and all double-bit errors. Report which claims are universally proved by enumeration, which follow from minimum distance, and which empirical channel estimates depend on a seeded random model. Include a table-only output mode so results do not depend on a plot.

[Previous chapter](information-security-geometry-quantum.md) · [Next chapter](#/books/algorithms-computation-proof-desk) · [Book overview](#/books/algorithms-computation-proof-desk)
