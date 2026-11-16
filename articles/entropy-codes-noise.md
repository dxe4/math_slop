
# Entropy, Codes, and the Price of Noise

**Before reading.** Read [Expectation and Variance](../books/introduction-to-probability/expectation-variance.md), [Logarithms](../books/algebra-and-functions/logarithms.md) and [Linear Maps, Isomorphism, and Rank–Nullity](../books/linear-algebra-structure-proofs/linear-maps-isomorphism-rank-nullity.md). These are preparation for the ideas used below.

Information theory asks a precise question: how many symbols are needed to describe an uncertain outcome? Coding theory asks a complementary one: how much redundancy is needed to recover a message after corruption? Probability and linear algebra connect the answers.

## Surprise becomes a logarithm

Suppose an event has probability $p$. A useful measure of surprise $I(p)$ should satisfy:

1. less likely events are more surprising;
2. independent events add surprise, so $I(pq)=I(p)+I(q)$;
3. surprise varies continuously with $p$.

These requirements force $I(p)=-c \log p$. Measuring in bits selects base two and $c=1$:

$$I(p)=-\log_{2} p$$

An outcome of probability $1/2$ carries one bit of surprise; one of probability $1/8$ carries three. For a discrete random variable $X$ with probabilities $p_{i}$, average surprise is Shannon entropy:

$$H(X)=-\sum_{i} p_{i} \log_{2} p_{i}$$

Entropy is not the number of possible outcomes. A fair four-sided outcome has entropy $2$ bits, while probabilities $(1/2,1/4,1/8,1/8)$ give

$H=1/2+1/2+3/8+3/8=1.75$ bits.

## Why entropy predicts compressibility

A binary prefix code assigns no symbol a codeword that begins another. This permits left-to-right decoding without separators. If codeword lengths are $l_{i}$, Kraft's inequality says

$$\sum_{i} 2^{-l_{i}} \le 1$$

The powers represent disjoint leaves of a binary tree. An ideal real-valued length would be $l_{i}=-\log_{2} p_{i}$, giving expected length exactly $H(X)$. Integer lengths prevent perfection, but choosing $l_{i}=\lceil -\log_{2} p_{i}\rceil$ gives

$$H(X) \le E[L] < H(X)+1$$

The lower bound follows from a relative-entropy argument: define
\(q_i=2^{-l_i}/K\), where \(K=\sum_i2^{-l_i}\le1\). Then nonnegativity of
\(D(p\mathbin\Vert q)=\sum_i p_i\log_2(p_i/q_i)\) rearranges to
\(E[L]\ge H(X)-\log_2K\ge H(X)\).

### Worked Huffman example

**Worked example.**

For symbols with probabilities $A:1/2, B:1/4, C:1/8, D:1/8$, repeatedly merge the two least likely nodes. Merge $C,D$ to weight $1/4$; merge that node with $B$ to $1/2$; merge with $A$. One code is

```text
A -> 0
B -> 10
C -> 110
D -> 111
```

Its expected length is $1/2(1)+1/4(2)+1/8(3)+1/8(3)=1.75$ bits, equal to the entropy. Huffman coding is optimal among symbol-by-symbol binary prefix codes, not among every conceivable compressor. Modeling longer blocks can exploit dependence between symbols.

## Redundancy can repair corruption

Compression removes predictable redundancy. Error correction deliberately adds structured redundancy. The simplest example repeats a bit three times and decodes by majority vote:

$0 \to 000$, $1 \to 111$.

The Hamming distance between codewords is three, so any single flipped bit can be corrected. The price is a rate of only $1/3$ information bit per transmitted bit.

For a binary code with minimum distance $d_{\min}$:

- up to $d_{\min}-1$ errors can be detected;
- up to \(\lfloor(d_{\min}-1)/2\rfloor\) errors can be uniquely corrected.

Why? Balls of that correction radius around distinct codewords are disjoint precisely when twice the radius is smaller than their separation.

## Linear codes turn decoding into algebra

A binary linear \([n,k]\) code is a \(k\)-dimensional subspace of
\(\mathbb F_2^n\). A generator matrix \(G\) maps message \(m\) to codeword
\(c=mG\). A parity-check matrix \(H\) satisfies \(Hc^{\mathsf T}=0\) for every
valid word.

Consider the $[3,2]$ even-parity code

$$C=\{000,011,101,110\}$$

One generator and check matrix are

```text
G = [1 0 1]      H = [1 1 1].
    [0 1 1]
```

If $m=(1,0)$, then $c=101$. A received word $r=100$ has syndrome

\[
s=Hr^{\mathsf T}=1\pmod2.
\]

so an odd number of bits changed. This code detects one error but cannot always correct it: every non-codeword is distance one from several codewords.

The classic Hamming \([7,4]\) code chooses columns of \(H\) as the seven
distinct nonzero vectors in \(\mathbb F_2^3\). A single error in position \(j\)
produces a syndrome equal to column \(j\), which identifies the flipped
position. That is an algorithm extracted directly from matrix structure.

```text
syndrome_decode(r, H):
    s <- H r^T over F_2
    if s = 0: return r
    find column j of H equal to s
    flip bit j of r
    return r
```

## Worked side-information calculation

Let \(X\) be a fair bit and let \(Y\) be the result after independently
flipping \(X\) with probability \(\varepsilon\), where
\(0\le\varepsilon\le1/2\). Before seeing \(Y\), uncertainty is \(H(X)=1\)
bit. Given \(Y\), the original bit equals \(Y\) with probability
\(1-\varepsilon\) and differs with probability \(\varepsilon\), so

\[
H(X\mid Y)=h_2(\varepsilon).
\]

The mutual information is therefore

\[
I(X;Y)=H(X)-H(X\mid Y)=1-h_2(\varepsilon).
\]

At \(\varepsilon=0\), \(Y\) reveals \(X\) and the mutual information is one
bit. At \(\varepsilon=1/2\), \(Y\) is independent of \(X\) and the mutual
information is zero. For the binary symmetric channel, the uniform input
achieves capacity, so this calculation also explains the capacity formula in
the next section.

## A noisy channel has a capacity

In a binary symmetric channel, each bit flips independently with probability $\epsilon$. Its capacity is

$C=1-h_{2}(\epsilon)$ bits per channel use,

where $h_{2}(\epsilon)=-\epsilon \log_{2} \epsilon-(1-\epsilon)\log_{2}(1-\epsilon)$. At $\epsilon=0$, capacity is one; at $\epsilon=1/2$, output is independent of input and capacity is zero.

Shannon's channel-coding theorem is striking: for rates below capacity, long codes can make decoding error arbitrarily small; above capacity, reliable communication is impossible. It is an existence and limit theorem, not a promise that a particular finite code is fast or practical.

## Assumptions and failure modes

- Entropy depends on a probability model; a wrong model gives misleading compression predictions.
- “Random-looking” is not the same as independent or uniformly distributed.
- Huffman codes operate on known symbol frequencies and can be poor under distribution shift.
- Hamming distance models substitutions, not insertions, deletions, or burst errors.
- Independent bit flips are an idealization; real channels may have memory.
- A nonzero syndrome detects inconsistency but does not automatically identify the most likely transmitted word.
- Capacity is asymptotic: block length, latency, and decoding complexity matter.

## Exercises

<a id="deep-dive-entropy-codes-noise-ex-1"></a>

### Exercise 1

1. Compute the entropy of a fair eight-sided outcome.

<details>
<summary>Hint 1</summary>

All eight outcomes have the same probability, so each has the same information content.
</details>

<details>
<summary>Hint 2</summary>

Use the base-two logarithm of the number of equally likely outcomes.
</details>

<details>
<summary>Solution</summary>

$\log_{2} 8=3$ bits.

</details>

<a id="deep-dive-entropy-codes-noise-ex-2"></a>

### Exercise 2

2. Is $\{0,01,11\}$ a prefix code? Explain.

<details>
<summary>Hint 1</summary>

A prefix code forbids any complete codeword from starting another codeword.
</details>

<details>
<summary>Hint 2</summary>

Compare the shortest word with the beginning of each longer word.
</details>

<details>
<summary>Solution</summary>

No. $0$ is a prefix of $01$, so a stream beginning $01$ is ambiguous without a boundary rule.

</details>

### Further exercises

3. A code has minimum distance $5$. How many errors can it detect and correct?
4. Encode $m=(1,1)$ using the $[3,2]$ generator above.
5. Why can no compressor assign every $n$-bit string a distinct description shorter than $n$ bits?

## Answers


3. It detects four errors and uniquely corrects two.
4. Add the two rows modulo two: $101+011=110$.
5. There are $2^{n}$ inputs but only $1+2+\ldots+2^{n-1}=2^{n}-1$ binary strings of length below $n$; the pigeonhole principle forbids an injective assignment.

## Connections

Continue to **conditional probability** for side information, **fields and extensions** for larger alphabets, **cryptography** to distinguish secrecy from error correction, **randomized algorithms** for probabilistic guarantees, and **statistical learning** for another setting where information limits what data can reveal.
