
# Program and Audit Number-Theory Primitives

**Before reading.** Read [Multiplication and Division](#/books/number-and-arithmetic/multiplication-division), [Direct Proof and Proof by Cases](#/books/introduction-to-proof/direct-proof-cases).

Use this recipe to implement extended Euclid, generalized CRT, modular powers, toy RSA, and elliptic-curve addition for learning. The goal is inspectable mathematics with contracts and property tests. The output is not a cryptographic library: no key sizes, padding, randomness, constant-time operations, protocol, or side-channel protection are supplied.

## Step 1 — choose one canonical residue convention

JavaScript’s `%` is a signed remainder, so negative inputs can produce negative outputs. Mathematical tables are easier to compare when every residue modulo m lies in $0,\ldots ,m-1$.

```js
function requireInteger(value, label) {
  if (!Number.isSafeInteger(value)) throw new RangeError(`${label} must be a safe integer`);
}

function mod(value, modulus) {
  requireInteger(value, "value");
  requireInteger(modulus, "modulus");
  if (modulus <= 0) throw new RangeError("modulus must be positive");
  const remainder = value % modulus;
  return remainder < 0 ? remainder + modulus : remainder === 0 ? 0 : remainder;
}

console.assert(mod(-17, 5) === 3);
```

Contract: $mod(a,m)$ is the unique r with $0\le r<m$ and $m|(a-r)$. Test both inequalities and the divisibility property, not only example values.

Add the modulus only when the remainder is negative. Adding it to an already nonnegative remainder can exceed the safe-integer range even when both inputs are safe integers. The zero branch also returns ordinary zero for a negative-zero remainder.

## Step 2 — make Euclid return a certificate

A gcd alone is hard to audit. Extended Euclid returns x,y with $ax+by=g$.

```js
function xgcd(a, b) {
  requireInteger(a, "a");
  requireInteger(b, "b");
  let oldR = Math.abs(a), r = Math.abs(b);
  let oldS = 1, s = 0, oldT = 0, t = 1;
  const rows = [];
  while (r !== 0) {
    const q = Math.floor(oldR / r);
    rows.push({ dividend: oldR, divisor: r, quotient: q, remainder: oldR - q * r });
    [oldR, r] = [r, oldR - q * r];
    [oldS, s] = [s, oldS - q * s];
    [oldT, t] = [t, oldT - q * t];
  }
  return { gcd: oldR, x: a < 0 ? -oldS : oldS, y: b < 0 ? -oldT : oldT, rows };
}

const certificate = xgcd(-240, 46);
console.assert(certificate.gcd === 2);
console.assert(-240 * certificate.x + 46 * certificate.y === 2);
```

Loop invariant: current remainders are integer combinations of the original a,b, and the unimodular coefficient update preserves the same generated ideal. The positive remainders strictly decrease, proving termination.

For ordinary machine-size integers, Euclid needs O(log min(|a|,|b|)) division steps. Bit complexity also depends on operand size; do not call integer division constant-time at arbitrary precision.

## Step 3 — expose inverse failure

### Worked example: a Bézout certificate by exact substitution

For the displayed inputs $-240$ and 46, the coefficients 9 and 47 give
$(-240)\cdot9+46\cdot47=2$. Euclid's successive nonzero remainders are
46,10,6,4,2, ending with remainder zero. Each division preserves the common
divisors, so the final positive remainder is the gcd. The linear combination
independently checks that certificate, while the remainder argument establishes
that it is the greatest common divisor. Neither statement depends on trusting
the printed output of the sample code.

```js
function inverse(value, modulus) {
  if (modulus < 2) throw new RangeError("inverse modulus must be at least 2");
  const result = xgcd(value, modulus);
  return result.gcd === 1 ? mod(result.x, modulus) : undefined;
}

console.assert(inverse(7, 160) === 23);
console.assert(inverse(6, 15) === undefined);
```

Returning `undefined` is mathematical information: a zero divisor cannot be divided away. Silently returning zero would turn an invalid group operation into a plausible-looking result.

## Step 4 — implement generalized CRT, not only the coprime slogan

For $x≡a (\pmod{m})$ and $x≡b (\pmod{n})$, consistency is equivalent to $gcd(m,n)|(b-a)$. Reduce the moduli before inversion.

```js
function crt2(a, m, b, n) {
  if (!Number.isSafeInteger(m) || !Number.isSafeInteger(n) || m < 2 || n < 2) {
    throw new RangeError("CRT moduli must be integers at least 2");
  }
  a = mod(a, m);
  b = mod(b, n);
  const g = xgcd(m, n).gcd;
  if ((b - a) % g !== 0) return { consistent: false, gcd: g };

  const reducedN = n / g;
  const reducedNBig = BigInt(reducedN);
  const stepProduct = reducedN === 1
    ? 0n
    : BigInt((b - a) / g) * BigInt(inverse(m / g, reducedN));
  const stepRemainder = stepProduct % reducedNBig;
  const step = stepRemainder < 0n ? stepRemainder + reducedNBig : stepRemainder;
  const period = BigInt(m) * reducedNBig;
  if (period > BigInt(Number.MAX_SAFE_INTEGER)) {
    throw new RangeError("CRT period exceeds the safe-integer output range");
  }
  const residue = (BigInt(a) + BigInt(m) * step) % period;
  return { consistent: true, gcd: g, residue: Number(residue), modulus: Number(period) };
}

console.assert(JSON.stringify(crt2(2, 6, 5, 9)) === JSON.stringify({ consistent: true, gcd: 3, residue: 14, modulus: 18 }));
console.assert(crt2(1, 4, 2, 6).consistent === false);
```

Postconditions for a successful result $(r,L)$:

- $r≡a \pmod{m}$ and $r≡b \pmod{n}$;
- $0\le r<L$;
- $L=lcm(m,n)$;
- adding L preserves both constraints.

The CRT products use BigInt internally because safe input moduli do not ensure safe intermediate products. This Number-returning interface rejects a period above `Number.MAX_SAFE_INTEGER`; successful residues and periods convert back exactly.

Exhaustively compare against brute force for all small moduli. This catches sign, gcd, and period errors.

## Step 5 — repeated squaring without floating-point products

JavaScript Number multiplication loses integer exactness above $2^{53}-1$. Use BigInt internally for modular powers, and reject mixed or unsafe inputs at the boundary.

```js
function modPow(base, exponent, modulus) {
  requireInteger(base, "base");
  requireInteger(exponent, "exponent");
  requireInteger(modulus, "modulus");
  if (exponent < 0 || modulus < 2) throw new RangeError("bad exponent or modulus");
  let b = BigInt(mod(base, modulus));
  let e = BigInt(exponent);
  const m = BigInt(modulus);
  let answer = 1n;
  while (e > 0n) {
    if (e % 2n === 1n) answer = (answer * b) % m;
    b = (b * b) % m;
    e /= 2n;
  }
  return Number(answer);
}

console.assert(modPow(42, 7, 187) === 15);
```

Invariant: at each loop start, $answer \cdot b^e$ is congruent to the original $base^exponent$ modulo m. Halving e yields O(log exponent) modular squarings/multiplications.

## Step 6 — keep toy RSA validation visible

For learning-size p,q:

1. verify both are prime and distinct;
2. compute $n=pq$, $\varphi =(p-1)(q-1)$;
3. require $1<e<\varphi$ and gcd(e,φ)=1;
4. compute d as the inverse of e modulo φ;
5. require $0\le message<n$;
6. compute $cipher=message^e \pmod{n}$, $decoded=cipher^d \pmod{n}$;
7. assert decoded equals message.

Trial division through √p is adequate only for this small instrument. Cryptographic prime generation needs probabilistic primality testing, entropy, candidate constraints, and standards not implemented here.

RSA correctness must cover messages sharing a factor with n. Prove the equality modulo p and q: if the message is zero modulo that prime the claim is immediate; otherwise use Fermat. CRT joins the two congruences.

Property test every message $0,\ldots ,n-1$ for small p,q. This proves the implementation on that finite state space, not security. Also reject p=q, composite inputs, noninvertible e, and message n.

## Step 7 — define curve validity before point addition

For odd prime p and $E\colon y^{2}=x^{3}+ax+b$, require

$4a^{3}+27b^{2} \not\equiv 0 \pmod{p}$.

Otherwise the cubic is singular and the advertised elliptic-curve group is absent. A useful UI may preserve a singular pair as a labelled non-example, but it must stop before group operations.

Represent the identity separately from affine coordinates:

```js
const infinity = { kind: "infinity" };
const affine = (x, y, p) => ({ kind: "affine", x: mod(x, p), y: mod(y, p) });
```

Canonicalize every public affine input or reject noncanonical coordinates consistently. If $(0,1)$ and $(p,1)$ both validate as the same point but equality compares raw numbers, vertical and doubling branches can fail.

Addition cases:

1. $𝒪+P=P$;
2. if x coordinates agree and y values sum to zero, return $\mathcal{O}$;
3. for P≠Q, slope is $(y_{2}-y_{1})(x_{2}-x_{1})^{-1}$;
4. for P=Q with y≠0, slope is $(3x_{1}^{2}+a)(2y_{1})^{-1}$;
5. compute $x_{3}=\lambda ^{2}-x_{1}-x_{2}$, $y_{3}=\lambda (x_{1}-x_{3})-y_{1}$ modulo p.

Postcondition: output lies on E. For every small nonsingular curve, exhaustively test closure, identity, inverse, and commutativity. Associativity can also be exhausted at tiny p, although the mathematical theorem is separate from finite tests.

## Step 8 — compare scalar algorithms

Implement both repeated addition and double-and-add. For every small k and every enumerated point, require equal results. Also test:

- $0P=𝒪$, $1P=P$;
- $(-k)P=-(kP)$ if negative scalars are supported;
- $rP=𝒪$ where r is the computed point order;
- doubling a point with y=0 returns $\mathcal{O}$;
- congruent coordinate representatives produce the same canonical result.

Enumeration by testing p² affine pairs costs O(p²) field operations and is intentionally restricted to tiny fields. It is not how large curves are counted or used.

## Step 9 — serialize defensively

A shared URL is untrusted input. For every field:

- distinguish missing or blank text from numeric zero;
- require a safe integer;
- clamp a documented display range;
- restrict prime fields to an allowed list;
- normalize residues;
- verify a selected point or choose a valid fallback;
- either reject or explicitly preserve a singular curve as a non-example.

Regression: `Number(null)===0`, so parsing a missing parameter by calling `Number(query.get(key))` can silently replace a fallback with zero. Check for `null` and blank text first.

## Step 10 — report the claim boundary

End a notebook or UI with statements such as:

- “The Bézout identity independently certifies this gcd.”
- “The two congruences conflict modulo their gcd; no integer solution exists.”
- “Every residue modulo this tiny n round-tripped under the toy RSA exponents.”
- “The point table is complete for this explicitly enumerated field.”
- “No confidentiality or signature security claim follows from these arithmetic tests.”

Never end with “RSA is secure” or “elliptic curves are secure.” A concrete scheme, parameters, security game, assumption, implementation, and operational context would all be missing.

## Exercises with hints and complete solutions

### Exercise 1
<a id="program-number-theory-crypto-primitives-ex-1"></a>

Add a postcondition checker for every Euclid row.

<details><summary>Hint 1</summary>

Each Euclid division is an exact integer equality with a bounded remainder.

</details>
<details><summary>Hint 2</summary>

Also check how the divisor and remainder become the next row's inputs.

</details>
<details><summary>Solution</summary>

Check $dividend=quotient\cdot divisor+remainder$ and $0\le remainder<divisor$ for each nonfinal divisor. Also check consecutive rows shift divisor/remainder into dividend/divisor.

</details>

### Exercise 2
<a id="program-number-theory-crypto-primitives-ex-2"></a>

Brute-force CRT systems for moduli 2 through 12 and compare with `crt2`.

<details><summary>Hint 1</summary>

All solutions are periodic modulo the least common multiple.

</details>
<details><summary>Hint 2</summary>

Inspect exactly one complete period and compare existence as well as the residue.

</details>
<details><summary>Solution</summary>

For each system, list x from 0 through lcm−1. The list is empty exactly on the inconsistent branch; otherwise it contains the single returned canonical residue.

</details>

### Exercise 3
<a id="program-number-theory-crypto-primitives-ex-3"></a>

Prove the repeated-squaring invariant.

<details><summary>Hint 1</summary>

Track the product of the accumulated answer and the unprocessed power.

</details>
<details><summary>Hint 2</summary>

Handle the odd-bit multiplication before halving the remaining exponent.

</details>
<details><summary>Solution</summary>

If the low bit is 1, moving one factor b into answer preserves $answer\cdot b^e$. Squaring b and halving the remaining even exponent preserves the same power. Induct through loop iterations.

</details>

### Exercise 4
<a id="program-number-theory-crypto-primitives-ex-4"></a>

Explain why Number-only multiplication can corrupt a modular proof.

<details><summary>Hint 1</summary>

A mathematically integral product need not be exactly representable as a Number.

</details>
<details><summary>Hint 2</summary>

Reducing after rounding cannot recover the lost integer bits.

</details>
<details><summary>Solution</summary>

Once a product is rounded, taking `% modulus` computes the residue of the rounded value, not necessarily the integer product. BigInt or a proved overflow-safe multiplication routine is needed.

</details>

### Exercise 5
<a id="program-number-theory-crypto-primitives-ex-5"></a>

Add a primality guard and show why it is necessary for the curve inverse branches.

<details><summary>Hint 1</summary>

The inverse formula requires every nonzero denominator to be invertible.

</details>
<details><summary>Hint 2</summary>

A composite modulus can have a nonzero denominator with a common factor.

</details>
<details><summary>Solution</summary>

Over a prime field every nonzero denominator has an inverse. Over a composite modulus a nonzero denominator can be a zero divisor, so the chord formula may fail without representing a vertical line.

</details>

### Exercise 6
<a id="program-number-theory-crypto-primitives-ex-6"></a>

Test associativity on every triple of points for the seven-point curve.

<details><summary>Hint 1</summary>

Use the complete point set including the identity.

</details>
<details><summary>Hint 2</summary>

Compare both parenthesizations for every ordered triple, preserving canonical representatives.

</details>
<details><summary>Solution</summary>

Enumerate all 7³ triples and compare $(P+Q)+R$ with $P+(Q+R)$. Passing audits this finite implementation; the general associativity theorem still needs mathematics.

</details>

## Continue

Open the live workbench for tables tied to these contracts. For any real cryptographic application, stop here and use a maintained audited library plus current standards and professional threat modeling; this recipe is deliberately incomplete for security.
