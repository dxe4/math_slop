
# Cryptographic Arithmetic and Claim Boundaries

An arithmetic round trip and a secrecy theorem answer different questions. We prove the round trip for textbook RSA, construct an exact finite secrecy example, show what nonce reuse reveals, and prove the algebra behind threshold sharing. Each claim states its domain, randomness and observable output. No production protocol or deployment recommendation is supplied by these elementary constructions.

Preparation is units and exponent theorems, CRT, finite counting, polynomial arithmetic and the prime-field root bound. The RSA proof and security distinction adapt the earlier combined algorithms/certificates/cryptography chapter, which remains intact with its original capstone, listings and exercises. Its elliptic extension remains a graduate companion with explicit additional prerequisites; the elementary route does not silently require number fields or elliptic group theory.

## 1. Textbook RSA is a map with a proved inverse

Let $p,q$ be distinct primes and $n=pq$. Put $L=\operatorname{lcm}(p-1,q-1)$. Choose positive integers $e,d$ such that $ed\equiv1\pmod L$. Define maps on all residues modulo $n$ by $E(M)=M^e$ and $D(C)=C^d$. Then

$$D(E(M))=M^{ed}\equiv M\pmod n$$

for every residue, including nonunits. To prove it, work modulo $p$. If $p\mid M$, both sides are zero because the exponent is positive. Otherwise Fermat gives $M^{p-1}=1$, and $p-1\mid ed-1$ gives $M^{ed}=M$. Repeat at $q$ and use CRT. The same calculation proves $E(D(C))=C$ for every residue $C$, so the two maps are inverse permutations of the whole residue ring.

Coprimality of $e$ with $L$ allows Bezout to choose an inverse class $d$, but the representative used as an exponent must be positive. A negative inverse class representative may give an undefined power at zero or at a nonunit. The proof uses no cancellation by a message: its explicit zero/unit branches are what extend the inverse statement beyond the group of units.

### Worked example: a nonunit message

Take $p=5,q=11$, so $n=55,L=20$, and take $e=3,d=7$. Their product is twenty-one, one modulo twenty. For $M=5$, the ciphertext is $125\equiv15$. To decrypt, $15^2\equiv5$, $15^4\equiv25$ and $15^7\equiv25\cdot5\cdot15\equiv5$ modulo fifty-five. This direct certificate agrees with the two-prime proof. Message five has no inverse modulo fifty-five; a proof confined to units would not cover it.

Distinctness of the primes is a real hypothesis for this all-residue argument. If one instead uses $n=9$, the unit exponent is six. Positive exponents $e=d=5$ satisfy $ed=25\equiv1\pmod6$, but $3^{25}=0\pmod9$, not three. Unit exponent reduction still holds on units, while the nonunit branch has nilpotent behavior rather than a prime-field zero branch. A squarefree modulus with more distinct prime factors does admit the same primewise all-residue argument, using the lcm of their predecessor exponents.

## 2. Correctness does not give the desired secrecy experiment

A deterministic public encryption map cannot hide a choice between two messages with distinct images. An observer computes both public images and compares the observed ciphertext. For the preceding toy parameters choose messages one and two; their ciphertexts are one and eight. The observer identifies which was sent with certainty, without factoring fifty-five or recovering the private exponent. This is a complete attack on the stated two-message experiment.

This conclusion is compatible with the inverse theorem: the map can be a perfectly correct permutation and still reveal information in that experiment. A conditional security theorem would have to specify an encoded randomized scheme, the challenge distribution, the adversary's access and resource bounds, a named hardness assumption and the quantitative cost of a reduction. None of those objects follows merely from the congruence $ed\equiv1$.

For the unit group there is an additional exact relation. Textbook exponentiation is multiplicative: $E(M_1M_2)=E(M_1)E(M_2)$. An observer can therefore alter a ciphertext by a known multiplicative factor and predict the corresponding change in the underlying message. Whether that behavior violates a particular protocol depends on the protocol's stated experiment, but the algebraic relation itself is unconditional. An application must not mistake an inverse-map proof for an authenticity statement.

Factoring supplies one route to computing $L$ and a valid inverse exponent. The statement that all ways of inverting the map are equivalent to factoring is stronger and is not proved here. Reductions are directional mathematical constructions, not an inference that two problems appear difficult on the same examples. Likewise failure of a factor search establishes no security bound for the encryption map.

## 3. Exact secrecy in a finite group

A smaller construction illustrates what a complete secrecy calculation looks like. Let $G$ be a finite group, write its operation multiplicatively, and choose a key $K$ uniformly from $G$, independently of a message $M$. Encrypt by $C=MK$ and decrypt by $M=CK^{-1}$. Correctness follows from associativity and the inverse law; commutativity is unnecessary.

For any fixed message $m$ and ciphertext $c$, there is exactly one key producing that ciphertext, namely $k=m^{-1}c$. Therefore

$$\Pr(C=c\mid M=m)=1/|G|.$$

The right side is independent of the message. For any prior distribution of $M$ independent of $K$, the joint probability factors as $\Pr(M=m,C=c)=\Pr(M=m)/|G|$. Summing over messages makes $C$ uniform and proves that $M$ and $C$ are independent. This is a finite counting proof of perfect secrecy for one use with a uniform independent key.

The proof names the randomness explicitly. A fixed key, a biased key or a key correlated with the message does not satisfy its premise. It also supplies no method of distributing or storing that key. Those are separate tasks rather than consequences of the counting equality. The key space is as large as the message space in this construction; the theorem has not produced secrecy from a short public seed.

### Worked example: addition modulo seven

Use the additive group of residues modulo seven. Encrypt $m=4$ with key $k=5$ to get $c=2$, and decrypt by subtraction to recover four. For a given ciphertext two and any possible message $m$, exactly one of the seven equally likely keys, $2-m$, gives that ciphertext. All seven messages remain compatible. This is an exact statement about a specified random variable, not an empirical observation from a sample of keys.

## 4. Reusing the key changes the theorem

In the additive version, two encryptions with the same key satisfy

$$C_1-C_2=M_1-M_2.$$

Thus the pair of ciphertexts reveals the message difference exactly. Its joint distribution cannot be independent of the pair of messages: equal messages always produce equal ciphertexts, while distinct messages never do. Each individual ciphertext may still be uniform, so checking marginal distributions would miss the leaked relation.

If one plaintext becomes known, the corresponding ciphertext gives the key by subtraction and reveals the other plaintext. More generally a partially constrained message difference can reduce the candidate pairs even without revealing either message separately. The failed hypothesis is one-use independence of fresh keys, not a defect in the inverse operation. The same algebra applies to exponent masks in a cyclic group, where reuse exposes a multiplicative ratio instead of an additive difference.

### Worked example: a reused key

Modulo eleven, messages three and eight encrypted with the same key five give ciphertexts eight and two. Their difference is six, agreeing with $3-8=-5=6$ modulo eleven. An observer learns this difference without knowing five. If the first message three is later disclosed, the first ciphertext gives key five and then the second ciphertext gives message eight. Uniformity of each ciphertext alone has therefore not established secrecy for the two-message experiment.

A claim about nonce reuse needs the actual equations of the scheme. The calculation above proves the stated group-mask failure, and does not assert that every object called a nonce is a one-time-pad key. Concrete algebra is what identifies the relation revealed by reuse.

## 5. Polynomial interpolation gives a threshold construction

Fix a prime $p$, an integer $t\ge1$ and distinct nonzero field points $x_1,\ldots,x_N$ with $N<p$. To share a secret $s\in\mathbb F_p$, choose coefficients $a_1,\ldots,a_{t-1}$ independently and uniformly in the field and set

$$f(X)=s+a_1X+\cdots+a_{t-1}X^{t-1}.$$

Participant $i$ receives $(x_i,f(x_i))$. For reconstruction require $t\le N$. Any $t$ shares determine the polynomial of degree less than $t$, because two such polynomials agreeing at $t$ distinct points have a difference with too many roots unless it is zero. Explicitly, for points $y_1,\ldots,y_t$ and values $v_j$, the interpolation polynomial is

$$f(X)=\sum_{j=1}^t v_j\prod_{k\ne j}\frac{X-y_k}{y_j-y_k}.$$

Every denominator is nonzero in the field, so its inverse exists. Substitution at a listed point leaves exactly its own summand. The resulting polynomial has degree less than $t$, and uniqueness follows from the root bound. Evaluating at zero reconstructs the secret. The nonzero-point condition matters: a share at zero would directly disclose the secret.

Now take any $r<t$ distinct shares. For every fixed proposed secret $s$, the number of coefficient choices yielding any fixed tuple of those share values is exactly $p^{t-1-r}$. To prove it, let the observed points be $y_1,\ldots,y_r$. Interpolate the prescribed values together with $f(0)=s$ to obtain one polynomial $f_0$ of degree at most $r$. Every polynomial of degree less than $t$ with the same constraints is exactly

$$f(X)=f_0(X)+X\prod_{j=1}^r(X-y_j)h(X),$$

where $h$ has degree less than $t-r-1$. The factorisation follows by successively dividing the difference by its distinct linear root factors. Conversely every displayed polynomial has the required values and degree. There are $p^{t-r-1}$ choices of $h$, with the interpretation of one choice when that degree bound is zero. This equals the claimed count.

Since all $p^{t-1}$ coefficient choices were equally likely, the probability of any observed $r$-tuple, conditional on any secret, is $p^{-r}$. It is independent of the secret. The same elementary joint-probability argument used for the group mask proves perfect privacy against those fewer-than-threshold shares, for any independent prior on the secret. This is a full finite counting theorem, including its uniformity and independence hypotheses.

### Worked example: two shares reconstruct a line

Take $p=7,t=2,s=3$ and coefficient $a_1=2$, so $f(X)=3+2X$. Shares at one and two are five and zero. Their difference gives slope $(0-5)/(2-1)=2$ modulo seven, and subtracting that slope from the first value gives secret three. With only the first share five, each proposed secret gives exactly one coefficient $a_1=5-s$, all equally likely. The single share therefore has the same probability for every secret. The two-share reconstruction and one-share privacy statements are proved by different arguments and both depend on their exact domains.

## 6. What the elementary sharing theorem leaves open

The privacy proof assumes honestly generated shares and the stated bound on how many are observed. It does not prove that altered shares will be detected. In the preceding line example, changing the share at two from zero to one reconstructs slope three and secret two. Both shares remain valid field elements; arithmetic interpolation alone has no reason to reject the altered input. An integrity mechanism would need additional data and a separate correctness and adversarial model.

The theorem also does not claim secrecy when a random coefficient is fixed or biased. With threshold two and coefficient always zero, every share equals the secret. The count changes because the coefficient choices are no longer uniformly distributed. This is a concrete failure of a premise, rather than an ambiguity about the meaning of “random.”

For cyclic-group key agreement, the elementary correctness equation is $(g^a)^b=(g^b)^a=g^{ab}$. It is valid in any group for powers of one fixed element. Deriving $g^{ab}$ from the public pair $(g^a,g^b)$ is a separate computational problem; distinguishing it from a random group element is a further problem. The correctness equation does not prove either hard, does not identify the intended group or parameter distribution, and does not turn all these problems into one assumption.

For an elliptic continuation, use the actual [group-law chapter](../algebraic-analytic-number-theory/elliptic-curves-group-associativity.md). It proves its group statement under explicitly stated curve hypotheses and an identified geometric input. The earlier elementary split retains the original elliptic/capstone source as a separate advanced companion. An elementary reader can finish this chapter without importing those graduate hypotheses or reading that continuation.

## 7. A claim ledger for an arithmetic construction

Record the input domain first: field prime, distinct evaluation points, allowed exponents, group membership, and whether zero is allowed. Record correctness next, with all cases that the proof uses. For a probabilistic statement name the random variables, their joint distribution and what the observer sees. Finally state the exact conclusion: invertibility, independence, a revealed relation, reconstruction, or a conditional computational implication.

These entries are mathematical claims, not implementation receipts. An exact finite example can illustrate a theorem; it cannot prove a universal security statement by repetition. A source listing can preserve an algorithm and its specified domain; its existence is not evidence of execution, timing behavior or resistance to malformed inputs. The retained combined source contains the original toy capstone and full listings. This chapter makes no claim that they have been executed again.

A finite field element is a residue class, so its canonical integer representative is a presentation convention. Replacing a share value by a congruent integer does not alter interpolation, whereas replacing it by a different field element can alter the secret. An input format must distinguish those two operations before a mathematical claim about changed shares has a definite meaning.

## Exercises

### ENT18-01. Cover the nonunit branch

Prove the RSA round trip for a message divisible by $p$ but not by $q$.

**Hint 1.** Modulo $p$ use the positivity of $ed$.

**Hint 2.** Modulo $q$ use Fermat and $q-1\mid ed-1$.

<details><summary>Full solution</summary>

Both $M^{ed}$ and $M$ vanish modulo $p$. Modulo $q$ the message is a unit, so $M^{ed}=M(M^{q-1})^{(ed-1)/(q-1)}\equiv M$. CRT combines the two congruences modulo the product of the distinct primes. No inverse of $M$ modulo $pq$ exists or is needed. The same branch proof handles all other messages, including zero and the units.

</details>

### ENT18-02. A repeated-prime failure

For modulus nine and exponents $e=d=5$, show why unit correctness does not extend to all residues.

**Hint 1.** The product twenty-five is one modulo six.

**Hint 2.** Use message three.

<details><summary>Full solution</summary>

Euler proves $u^{25}=u$ modulo nine for units because $25\equiv1\pmod6$. For message three, however, every power at least two is zero modulo nine, so the round trip gives zero rather than three. The distinct-prime all-residue proof used zero in a field, whereas three is nonzero and nilpotent in this quotient. Its unit theorem remains correct on its stated domain.

</details>

### ENT18-03. A deterministic distinguisher

For the toy public map $M\mapsto M^3\pmod{55}$, distinguish encryptions of one and two.

**Hint 1.** Compute both public images.

**Hint 2.** No private exponent is required to compare them.

<details><summary>Full solution</summary>

The two images are one and eight. On receiving the challenge ciphertext, compare it with those values and return the matching message. The two cases are always distinguished correctly. This does not contradict arithmetic inversion correctness and uses no factorisation assumption. It proves failure in the exact two-message public deterministic experiment stated here.

</details>

### ENT18-04. Multiplicative alteration

Show how multiplying a textbook RSA ciphertext by $r^e$ changes its underlying message.

**Hint 1.** Exponentiation is multiplicative in the residue ring.

**Hint 2.** Apply the proved inverse map to the altered ciphertext.

<details><summary>Full solution</summary>

If $C=M^e$, then $Cr^e=(Mr)^e$. Decrypting gives $Mr$ modulo $n$ by the all-residue inverse theorem. If $r$ is a unit, this is a reversible chosen multiplicative change; the algebraic identity also holds for nonunits, although reversibility may fail. This exhibits a predictable relation, while a claim about a protocol's integrity would require its particular adversarial experiment.

</details>

### ENT18-05. One-use secrecy by counting

Prove the finite-group masking theorem for a fixed message and ciphertext when the group may be nonabelian.

**Hint 1.** Solve $mk=c$ by multiplying on the left by $m^{-1}$.

**Hint 2.** There is exactly one solution among equally likely keys.

<details><summary>Full solution</summary>

The unique key is $m^{-1}c$. Uniform choice among the $|G|$ keys therefore gives probability $1/|G|$ for this ciphertext at every fixed message. Since the key is independent of the message, multiplying by any message prior gives a joint distribution that factors. Associativity and inverse laws suffice; exchanging factors is never used, so commutativity is unnecessary.

</details>

### ENT18-06. A biased key

Modulo three, let a masking key equal zero with probability one-half and each other residue with probability one-quarter. Show the ciphertext distribution depends on the message.

**Hint 1.** Examine the probability of ciphertext zero.

**Hint 2.** The required key is the negative of the message.

<details><summary>Full solution</summary>

For message zero, ciphertext zero requires key zero and has probability one-half. For message one, it requires key two and has probability one-quarter. These different conditional probabilities refute independence. The decryption subtraction remains correct, so this is a failure of secrecy caused by the missing uniformity premise rather than by arithmetic error.

</details>

### ENT18-07. Reuse with a known message

Modulo eleven, ciphertexts eight and two use the same additive key, and the first message is three. Recover the key and second message.

**Hint 1.** Subtract the first message from its ciphertext.

**Hint 2.** Subtract that recovered key from the other ciphertext.

<details><summary>Full solution</summary>

The key is $8-3=5$. The second message is $2-5=-3=8$ modulo eleven. Even before the first message was disclosed, the ciphertext difference revealed the message difference six. Thus reusing a uniform key preserves neither the independent two-message distribution nor protection against later known plaintext.

</details>

### ENT18-08. Why nonzero sharing points matter

Explain the effect of issuing a share at evaluation point zero.

**Hint 1.** The constant term is the secret.

**Hint 2.** All higher powers vanish at zero.

<details><summary>Full solution</summary>

The share is $f(0)=s$ itself. One participant therefore learns the entire secret, contradicting a fewer-than-threshold privacy claim whenever the threshold exceeds one. The interpolation reconstruction statement can still hold with zero among distinct points, but the privacy proof relies on adding the separate secret constraint at zero to nonzero observed points. The distinction is an exact hypothesis boundary.

</details>

### ENT18-09. Reconstruct a threshold-two secret

Over $\mathbb F_7$, shares at one and two have values six and two. Recover the secret.

**Hint 1.** The slope is the value difference divided by the point difference.

**Hint 2.** Subtract the slope from the first value.

<details><summary>Full solution</summary>

The slope is $2-6=-4=3$ modulo seven. The constant term is $6-3=3$. The reconstructed line is $f(X)=3+3X$, which has the two stated values. Uniqueness follows because a degree-at-most-one difference with two distinct roots must vanish. This reconstructs from the prescribed threshold; it does not establish that either share was honestly generated.

</details>

### ENT18-10. Count the remaining polynomials

For threshold four and two observed nonzero shares, determine the number of compatible polynomials for each fixed secret.

**Hint 1.** The difference from one solution has roots at zero and the two observed points.

**Hint 2.** Its remaining factor has degree less than one.

<details><summary>Full solution</summary>

The difference is $X(X-y_1)(X-y_2)h(X)$ with $h$ constant, including zero. There are exactly $p$ choices in $\mathbb F_p$. Thus each secret is compatible with $p$ coefficient choices, while the total number of random coefficient choices is $p^3$. Every observed pair has conditional probability $p/p^3=p^{-2}$ independently of the secret. Distinctness and nonzero points ensure the three root constraints are separate.

</details>

### ENT18-11. Altered shares

In the threshold-two example with shares $(1,5),(2,0)$ over seven, replace the second value by one and reconstruct. What theorem has not been proved by interpolation?

**Hint 1.** The altered slope is $1-5=-4$.

**Hint 2.** Both altered values are still legitimate field elements.

<details><summary>Full solution</summary>

The new slope is three and the new constant is $5-3=2$, different from the original secret three. Interpolation correctly reconstructs the unique line through the received data. It has not authenticated those data or detected tampering. Privacy against a bounded collection of honest shares and integrity against altered shares are distinct mathematical claims.

</details>

### ENT18-12. Separate three group statements

State the elementary key-agreement correctness equation and distinguish computing its shared output from deciding whether a proposed output is that value.

**Hint 1.** Powers of the same element commute in their exponent multiplication.

**Hint 2.** A decision question receives an additional candidate group element.

<details><summary>Full solution</summary>

The equation is $(g^a)^b=(g^b)^a=g^{ab}$. A computational shared-output problem receives the public elements $g^a,g^b$ and asks for $g^{ab}$. A decision problem additionally receives a candidate $h$ and asks whether it has the designated relation, or distinguishes an associated challenge distribution from a random one. The algebraic correctness identity proves neither problem hard and supplies no equivalence between them. A conditional security claim must choose and state the appropriate assumption and distribution.

</details>

## Closing summary

Primewise CRT proves textbook RSA correctness for all residues under its precise squarefree and exponent hypotheses. Finite counting proves one-use group-mask secrecy, and exact subtraction shows the failure under reuse. Polynomial interpolation proves threshold reconstruction; a fiber count proves fewer-than-threshold privacy, while altered shares expose the absence of integrity. These conclusions are mathematical statements with named domains and random variables. The earlier complete capstone, elliptic material and source listings remain live companions without a new execution claim.
